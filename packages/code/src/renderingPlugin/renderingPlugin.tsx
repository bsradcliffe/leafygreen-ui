import React from 'react';
import flatMap from 'lodash/flatMap';

import { injectStyles } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { spacing } from '@leafygreen-ui/tokens';

import {
  LeafyGreenHighlightResult,
  LeafyGreenHLJSPlugin,
  TokenObject,
} from '../highlight';
import { useSyntaxContext } from '../Syntax/SyntaxContext';

import { generateKindClassName } from './utils/generateKindClassName/generateKindClassName';
import {
  childrenAsKeywords,
  isArray,
  isNumber,
  isObject,
  isString,
  isTokenObject,
} from './utils/helpers';
import { lineWithKeywords } from './utils/lineWithKeywords/lineWithKeywords';
import {
  FlatTokenObject,
  LineDefinition,
  LineTableRowProps,
  TableContentProps,
  TokenProps,
  TreeItem,
} from './renderingPlugin.types';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

function Token({ kind, children }: TokenProps) {
  return <span className={kind}>{children}</span>;
}

export function processToken(token: TreeItem, key?: number): React.ReactNode {
  if (token == null) {
    return null;
  }

  if (isString(token)) {
    return token;
  }

  if (isArray(token)) {
    return token.map(processToken);
  }

  if (isObject(token)) {
    return (
      <Token key={key} kind={token.kind}>
        {processToken(token.children)}
      </Token>
    );
  }

  return token;
}

const cellClassName = 'lg-code-cell';
injectStyles(cellClassName, `
  .${cellClassName} {
    border-spacing: 0;
    vertical-align: top;
    padding: 0 ${spacing[300]}px;
  }
`);

// Pre-computed transparent colors replacing polished transparentize
const highlightBgLight = palette.yellow.light3;
const highlightBgDark = 'rgba(76, 33, 0, 0.3)'; // transparentize(0.7, palette.yellow.dark3)
const highlightBorderLight = palette.yellow.light2;
const highlightBorderDark = palette.gray.dark3;

function getHighlightedRowClassName(darkMode: boolean): string {
  const id = darkMode
    ? 'lg-code-highlighted-row-dark'
    : 'lg-code-highlighted-row-light';

  const backgroundColor = darkMode ? highlightBgDark : highlightBgLight;
  const borderColor = darkMode ? highlightBorderDark : highlightBorderLight;

  injectStyles(id, `
    .${id} {
      background-color: ${backgroundColor};
      background-image: none;
      background-attachment: fixed;
    }
    .${id} > td {
      border-top: 1px solid ${borderColor};
    }
    .${id} + tr > td {
      border-top: 1px solid ${borderColor};
    }
    .${id} + .${id} > td {
      border-top: 0;
    }
    .${id}:last-child > td {
      border-bottom: 1px solid ${borderColor};
    }
  `);

  return id;
}

export function LineTableRow({
  lineNumber,
  highlighted,
  darkMode,
  children,
}: LineTableRowProps) {
  const numberColor = darkMode ? palette.gray.light1 : palette.gray.dark1;
  const highlightedNumberColor = darkMode
    ? palette.gray.light3
    : palette.yellow.dark2;

  return (
    <tr className={cn(highlighted && getHighlightedRowClassName(darkMode))}>
      {lineNumber && (
        <td
          className={cellClassName}
          style={{
            userSelect: 'none',
            textAlign: 'right',
            paddingLeft: `${spacing[400]}px`,
            paddingRight: 0,
            color: highlighted ? highlightedNumberColor : numberColor,
          }}
        >
          {lineNumber}
        </td>
      )}

      <td className={cellClassName}>{children}</td>
    </tr>
  );
}

// Check if object is a TokenObject which has an array with a single string element within it.
function isFlattenedTokenObject(obj: TokenObject): obj is FlatTokenObject {
  // default to an empty object in the off-chance "obj" is null or undefined.
  const { children } = obj ?? {};

  if (isArray(children) && children.length === 1 && isString(children[0])) {
    return true;
  }

  return false;
}

// If an array of tokens contains an object with more than one children, this function will flatten that tree recursively.
export function flattenNestedTree(
  children: TokenObject['children'] | TokenObject,
  kind?: string,
): Array<string | FlatTokenObject> {
  if (typeof children === 'string') {
    return children;
  }

  if (isTokenObject(children)) {
    return flattenNestedTree(children.children, kind);
  }

  // Generate a flat map function with a closure around parent's kind
  function flatMapTreeWithKinds(...parentKinds: Array<string | undefined>) {
    parentKinds = parentKinds.filter(
      (str): str is string => isString(str) && str.length > 0,
    );

    return function (
      entity: string | TokenObject,
    ): string | FlatTokenObject | Array<string | FlatTokenObject> {
      if (isString(entity)) {
        return parentKinds.length > 0
          ? {
              kind: generateKindClassName([
                kind,
                ...parentKinds,
                ...childrenAsKeywords(entity),
              ]),
              children: [entity],
            }
          : entity; // entity is basic text
      }

      // If this is a nested entity, then flat map it's children
      if ((entity?.children?.length ?? 0) >= 1) {
        // Generate a new flat map function with this entity's kind
        return flatMap(
          entity.children,
          flatMapTreeWithKinds(kind, entity.kind, ...parentKinds),
        );
      }

      if (isFlattenedTokenObject(entity)) {
        return {
          kind: generateKindClassName([
            kind,
            entity.kind,
            ...parentKinds,
            ...childrenAsKeywords(...entity.children),
          ]),
          children: entity.children,
        };
      }

      return entity as FlatTokenObject;
    };
  }

  return flatMap(children, flatMapTreeWithKinds(kind));
}

function containsLineBreak(token: TreeItem): boolean {
  if (isArray(token)) {
    return token.some(containsLineBreak);
  }

  if (isString(token)) {
    return token.includes('\n');
  }

  if (isObject(token)) {
    return (
      token.children?.includes('\n') ||
      (isString(token.children?.[0]) && token.children[0].includes('\n'))
    );
  }

  return false;
}

export function treeToLines(
  children: Array<string | TokenObject>,
): LineDefinition {
  const lines: LineDefinition = [];
  let currentLineIndex = 0;

  // Create a new line, if no lines exist yet
  if (lines[currentLineIndex] == null) {
    lines[currentLineIndex] = [];
  }

  const createNewLine = () => {
    currentLineIndex++;
    lines[currentLineIndex] = [];
  };

  flattenNestedTree(children).forEach(child => {
    // If the current element includes a line break, we need to handle it differently
    if (containsLineBreak(child)) {
      if (isString(child)) {
        child.split('\n').forEach((fragment, i) => {
          if (i > 0) {
            createNewLine();
          }

          // Empty new lines should be represented as an empty array
          if (fragment) {
            lines[currentLineIndex].push(fragment);
          }
        });
      } else {
        const tokenString = child.children[0];

        tokenString.split('\n').forEach((fragment, i) => {
          if (i > 0) {
            createNewLine();
          }

          lines[currentLineIndex].push({
            kind: child.kind,
            children: [fragment],
          });
        });
      }
    } else if (child && (isString(child) || isFlattenedTokenObject(child))) {
      lines[currentLineIndex].push(child);
    }
  });

  return lines;
}

export function TableContent({ lines }: TableContentProps) {
  const {
    highlightLines,
    showLineNumbers,
    darkMode,
    lineNumberStart,
    customKeywords = {},
  } = useSyntaxContext();
  const trimmedLines = [...lines];

  // Strip empty lines from the beginning of code blocks
  while (trimmedLines[0]?.length === 0) {
    trimmedLines.shift();
  }

  // Strip empty lines from the end of code blocks
  while (trimmedLines[trimmedLines.length - 1]?.length === 0) {
    trimmedLines.pop();
  }

  const lineShouldHighlight = (line: number) => {
    return highlightLines.some(def => {
      if (isNumber(def)) {
        return line === def;
      }

      if (isArray(def)) {
        const sortedArr = [...def].sort((a, b) => a - b);

        return line >= sortedArr[0] && line <= sortedArr[1];
      }

      return false;
    });
  };

  return (
    <>
      {trimmedLines.map((line, index) => {
        const currentLineNumber = index + (lineNumberStart ?? 1);
        const highlightLine = lineShouldHighlight(currentLineNumber);

        let mappedLine = line;

        if (Object.keys(customKeywords).length > 0) {
          mappedLine = lineWithKeywords(line, customKeywords);
        }

        const displayLineNumber = showLineNumbers
          ? currentLineNumber
          : undefined;

        const processedLine = mappedLine?.length ? (
          mappedLine.map(processToken)
        ) : (
          // We create placeholder content when a line break appears to preserve the line break's height
          // It needs to be inline-block for the table row to not collapse.
          <div className="inline-block" />
        );

        return (
          <LineTableRow
            key={currentLineNumber}
            lineNumber={displayLineNumber}
            darkMode={darkMode}
            highlighted={highlightLine}
          >
            {processedLine}
          </LineTableRow>
        );
      })}
    </>
  );
}

const plugin: LeafyGreenHLJSPlugin = {
  'after:highlight': function (result: LeafyGreenHighlightResult) {
    const { rootNode } = result._emitter;
    result.react = <TableContent lines={treeToLines(rootNode.children)} />;
  },
};

export default plugin;
