import React from 'react';

import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';
import {
  borderRadius,
  color,
  InteractionState,
  spacing,
  transitionDuration,
  Variant,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';
import { PANEL_HEIGHT } from '../Panel';

import {
  LINE_HEIGHT,
  PADDING_BOTTOM,
  PADDING_TOP,
} from './hooks/extensions/useThemeExtension';
import {
  CodeEditorProps,
  CopyButtonAppearance,
} from './CodeEditor.types';

export const copyButtonClassName = createUniqueClassName(
  'lg-code_editor-code_editor_copy_button',
);

export const getEditorStyles = ({
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  className,
  copyButtonAppearance,
}: {
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  className?: string;
  copyButtonAppearance?: CopyButtonAppearance;
}) => {
  return cn(
    'relative',
    copyButtonAppearance === CopyButtonAppearance.Hover &&
      `[@media(hover:hover)]:hover:[&_.${copyButtonClassName}]:opacity-100`,
    className,
  );
};

/**
 * Returns an inline style object for the editor wrapper.
 * These dynamic dimension styles cannot be expressed as Tailwind utilities
 * because they depend on runtime prop values.
 */
export const getEditorInlineStyles = ({
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
}: {
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
}): React.CSSProperties => {
  const styles: React.CSSProperties = {};
  if (height) styles.height = height;
  if (maxHeight) styles.maxHeight = maxHeight;
  if (minHeight) styles.minHeight = minHeight;
  if (width) styles.width = width;
  if (maxWidth) styles.maxWidth = maxWidth;
  if (minWidth) styles.minWidth = minWidth;
  return styles;
};

function getHeight(
  numOfLines: number,
  baseFontSize: CodeEditorProps['baseFontSize'],
) {
  const borders = 2;
  const fontSize = baseFontSize ?? 13;
  const numOfLinesForCalculation = numOfLines === 0 ? 1 : numOfLines;

  return (
    numOfLinesForCalculation * (fontSize * LINE_HEIGHT) +
    PADDING_TOP +
    PADDING_BOTTOM +
    borders
  );
}

const loaderBaseStyle = [
  'flex',
  'items-center',
  'justify-center',
  'absolute',
  'z-[1]',
].join(' ');

const loaderThemeStyles: Record<Theme, string> = {
  [Theme.Light]: `bg-[${color[Theme.Light].background[Variant.Primary][InteractionState.Default]}] border border-solid border-[${color[Theme.Light].border[Variant.Secondary][InteractionState.Default]}]`,
  [Theme.Dark]: `bg-[${color[Theme.Dark].background[Variant.Primary][InteractionState.Default]}] border border-solid border-[${color[Theme.Dark].border[Variant.Secondary][InteractionState.Default]}]`,
};

export const getLoaderStyles = ({
  theme,
  baseFontSize,
  numOfLines,
  isLoading,
  hasPanel,
}: {
  theme: Theme;
  baseFontSize: CodeEditorProps['baseFontSize'];
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  numOfLines: number;
  isLoading: boolean;
  hasPanel: boolean;
}) => {
  return cn(
    loaderBaseStyle,
    loaderThemeStyles[theme],
    hasPanel
      ? `rounded-tl-none rounded-tr-none`
      : `rounded-tl-[${borderRadius[300]}px] rounded-tr-[${borderRadius[300]}px]`,
    `rounded-bl-[${borderRadius[300]}px] rounded-br-[${borderRadius[300]}px]`,
  );
};

/**
 * Returns inline styles for the loader, handling dynamic dimension values.
 */
export const getLoaderInlineStyles = ({
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  baseFontSize,
  numOfLines,
  isLoading,
  hasPanel,
}: {
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  baseFontSize: CodeEditorProps['baseFontSize'];
  numOfLines: number;
  isLoading: boolean;
  hasPanel: boolean;
}): React.CSSProperties => {
  const fontSize = baseFontSize ? baseFontSize : 13;
  const defaultHeight = getHeight(numOfLines, fontSize);

  let heightValue = height;
  if (!heightValue) {
    if (isLoading) {
      heightValue = `${defaultHeight}px`;
    } else {
      heightValue = '100%';
    }
  }

  return {
    top: hasPanel ? `${PANEL_HEIGHT}px` : '0px',
    width: width || '100%',
    maxWidth: maxWidth || 'none',
    minWidth: minWidth || 'none',
    height: heightValue,
    maxHeight: maxHeight || 'none',
    minHeight: minHeight || 'none',
  };
};

const loadingTextThemeStyles: Record<Theme, string> = {
  [Theme.Light]: `text-[${color[Theme.Light].text[Variant.Secondary][InteractionState.Default]}]`,
  [Theme.Dark]: `text-[${color[Theme.Dark].text[Variant.Secondary][InteractionState.Default]}]`,
};

export const getLoadingTextStyles = (theme: Theme) =>
  loadingTextThemeStyles[theme];

export const getCopyButtonStyles = (
  copyButtonAppearance: CopyButtonAppearance,
) =>
  cn(
    copyButtonClassName,
    'absolute',
    'opacity-100',
    `top-[${spacing[200]}px]`,
    `right-[${spacing[200]}px]`,
    `transition-opacity duration-[${transitionDuration.default}ms] ease-in-out`,
    'z-[1]',
    'hover:opacity-100 focus-within:opacity-100',
    copyButtonAppearance === CopyButtonAppearance.Hover &&
      `opacity-0 max-[@media(only_screen_and_(max-width:1024px)_and_(hover:none)_and_(pointer:coarse)),@media(only_screen_and_(max-width:1024px)_and_(hover:none)_and_(pointer:none))]:opacity-100`,
  );
