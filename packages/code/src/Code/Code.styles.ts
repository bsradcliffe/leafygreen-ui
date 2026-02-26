import {
  createUniqueClassName,
  injectStyles,
  Theme,
} from '@leafygreen-ui/lib';
import { color } from '@leafygreen-ui/tokens';

import { cn } from '../cn';
import { variantColors } from '../globalStyles';

import { CopyButtonAppearance, ScrollState } from './Code.types';

/**
 * Unique className used to target the copy button from the
 * code wrapper hover selector.
 */
const copyButtonWithoutPanelClassName = createUniqueClassName('copy_button');

/**
 * Computed constant: (36 - 24) / 2 = 6
 */
const singleLinePaddingY = 6;

// ---------------------------------------------------------------------------
// Wrapper (outermost div)
// ---------------------------------------------------------------------------

export const getWrapperStyles = ({
  theme,
  className,
}: {
  theme: Theme;
  className?: string;
}) =>
  cn(
    'rounded-[12px] overflow-hidden w-full',
    `border border-solid border-[${variantColors[theme][1]}]`,
    className,
  );

// ---------------------------------------------------------------------------
// Content grid (code + panel + expand button)
// ---------------------------------------------------------------------------

/**
 * Base pseudo-element scroll shadow styles injected once via `injectStyles`.
 * Returns a class name for use in `cn()`.
 */
const baseScrollShadowClassName = 'lg-code-base-scroll-shadow';
injectStyles(
  baseScrollShadowClassName,
  `
  .${baseScrollShadowClassName}::before,
  .${baseScrollShadowClassName}::after {
    content: '';
    display: block;
    position: absolute;
    z-index: 1;
    top: 0;
    height: 100%;
    width: 40px;
    border-radius: 40%;
    box-shadow: unset;
    transition: box-shadow 100ms ease-in-out;
  }
  .${baseScrollShadowClassName}::before {
    grid-column: 1;
    left: -40px;
  }
  .${baseScrollShadowClassName}::after {
    grid-column: 2;
  }
`,
);

function getScrollShadow(scrollState: ScrollState, theme: Theme): string {
  const id = `lg-code-scroll-shadow-${scrollState}-${theme}`;

  const dropShadowBefore =
    theme === Theme.Light
      ? '1px 0 10px 0 rgba(0,0,0,0.25)'
      : '15px 0px 15px 0 rgba(0,0,0,0.3)';

  const dropShadowAfter =
    theme === Theme.Light
      ? '-1px 0px 10px rgba(0,0,0,0.25)'
      : '-15px 0px 15px 0 rgba(0,0,0,0.3)';

  const showBefore =
    scrollState === ScrollState.Both || scrollState === ScrollState.Left;
  const showAfter =
    scrollState === ScrollState.Both || scrollState === ScrollState.Right;

  injectStyles(
    id,
    `
    .${id}::before {
      ${showBefore ? `box-shadow: ${dropShadowBefore};` : ''}
    }
    .${id}::after {
      ${showAfter ? `box-shadow: ${dropShadowAfter};` : ''}
    }
  `,
  );

  return id;
}

const contentWrapperTailwind = [
  'relative grid rounded-[inherit] z-0',
  "[grid-template-areas:'panel'_'code']",
].join(' ');

const codeWithoutPanelTailwind =
  "[grid-template-areas:'code_code'] [&::after]:[grid-column:-1]";

const codeWithPanelTailwind = [
  "[grid-template-areas:'panel'_'code']",
  '[grid-template-columns:unset]',
  '[&::before]:[grid-row:2] [&::after]:[grid-row:2]',
].join(' ');

const expandableContentWithoutPanelTailwind =
  "[grid-template-areas:'code_code'_'expandButton_expandButton'] [grid-template-rows:auto_28px]";

const expandableContentWithPanelTailwind =
  "[grid-template-areas:'panel'_'code'_'expandButton'] [grid-template-rows:auto_auto_28px]";

export const getCodeStyles = ({
  scrollState,
  theme,
  showPanel,
  showExpandButton,
  isLoading,
}: {
  scrollState: ScrollState;
  theme: Theme;
  showPanel: boolean;
  showExpandButton: boolean;
  isLoading: boolean;
}) =>
  cn(
    contentWrapperTailwind,
    baseScrollShadowClassName,
    !isLoading && getScrollShadow(scrollState, theme),
    showPanel ? codeWithPanelTailwind : codeWithoutPanelTailwind,
    showExpandButton && showPanel && expandableContentWithPanelTailwind,
    showExpandButton && !showPanel && expandableContentWithoutPanelTailwind,
  );

// ---------------------------------------------------------------------------
// Code wrapper (<pre>)
// ---------------------------------------------------------------------------

/**
 * Hover styles that target a sibling copy button element by its generated
 * unique className. Uses `injectStyles` because sibling-targeting with a
 * dynamic class name is not feasible in Tailwind.
 */
const codeWrapperHoverClassName = 'lg-code-wrapper-hover';
injectStyles(
  codeWrapperHoverClassName,
  `
  .${codeWrapperHoverClassName}:hover + .${copyButtonWithoutPanelClassName},
  .${codeWrapperHoverClassName}[data-hover='true'] + .${copyButtonWithoutPanelClassName} {
    opacity: 1;
  }
`,
);

/**
 * iOS mobile Safari workaround using device-width media queries.
 * Uses `injectStyles` because device-width queries are not available
 * as standard Tailwind utilities.
 */
const codeWrapperMobileSafariClassName = 'lg-code-wrapper-mobile-safari';
injectStyles(
  codeWrapperMobileSafariClassName,
  `
  @media only screen and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 2) {
    .${codeWrapperMobileSafariClassName} {
      white-space: pre-wrap;
    }
  }
  @media only screen and (min-device-width: 813px) and (-webkit-min-device-pixel-ratio: 2) {
    .${codeWrapperMobileSafariClassName} {
      white-space: pre;
    }
  }
`,
);

const codeWrapperBaseTailwind = [
  '[grid-area:code] overflow-x-auto',
  'rounded-[inherit] rounded-tr-none rounded-br-none',
  'border-0 m-0 relative whitespace-pre',
  'pt-[8px] pb-[8px]',
  'transition-[box-shadow] duration-[100ms] ease-in-out',
  // second transition overrides in original — keep height transition
  'transition-[height] duration-[300ms] ease-in-out',
  'focus-visible:outline-none',
].join(' ');

const codeWrapperWithoutPanelTailwind =
  'border-l-0 rounded-[inherit] rounded-tr-none rounded-tl-none';

const codeWrapperWithPanelTailwind =
  'border-l-0 rounded-[inherit] rounded-tr-none rounded-tl-none';

const codeWrapperSingleLineTailwind = `flex items-center pt-[${singleLinePaddingY}px] pb-[${singleLinePaddingY}px]`;

function getExpandableCodeWrapperStyle(
  expanded: boolean,
  codeHeight: number,
  collapsedCodeHeight: number,
): string {
  /**
   * max-height must be set to a specific runtime pixel value for the
   * expand/collapse animation, which is inherently dynamic. We use
   * `injectStyles` because Tailwind arbitrary values are static.
   */
  const height = expanded ? codeHeight : collapsedCodeHeight;
  const id = `lg-code-expandable-wrapper-${expanded ? 'exp' : 'col'}-${height}`;

  injectStyles(
    id,
    `
    .${id} {
      max-height: ${height}px;
      overflow-y: hidden;
      transition: max-height 300ms ease-in-out;
    }
  `,
  );

  return id;
}

function getCodeWrapperVariantTailwind(theme: Theme): string {
  const colors = variantColors[theme];
  return `bg-[${colors[0]}] text-[${colors[3]}]`;
}

export const getCodeWrapperStyles = ({
  theme,
  showPanel,
  expanded,
  codeHeight,
  collapsedCodeHeight,
  isMultiline,
  showExpandButton,
  className,
}: {
  theme: Theme;
  showPanel: boolean;
  expanded: boolean;
  codeHeight: number;
  collapsedCodeHeight: number;
  isMultiline: boolean;
  showExpandButton: boolean;
  className?: string;
}) =>
  cn(
    codeWrapperBaseTailwind,
    getCodeWrapperVariantTailwind(theme),
    codeWrapperHoverClassName,
    codeWrapperMobileSafariClassName,
    showPanel ? codeWrapperWithPanelTailwind : codeWrapperWithoutPanelTailwind,
    !isMultiline && codeWrapperSingleLineTailwind,
    showExpandButton &&
      getExpandableCodeWrapperStyle(expanded, codeHeight, collapsedCodeHeight),
    className,
  );

// ---------------------------------------------------------------------------
// Expand button
// ---------------------------------------------------------------------------

const expandButtonTailwind = [
  'flex items-center justify-center',
  'border-none rounded-b-[11px] rounded-t-none',
  '[border-width:1px_0_0_0] border-solid',
  "font-['Euclid_Circular_A',_'Helvetica_Neue',_Helvetica,_Arial,_sans-serif]",
  'text-[13px] gap-[4px]',
  '[grid-area:expandButton]',
  'transition-all duration-[150ms] ease-in-out',
  'z-[2] cursor-pointer',
].join(' ');

function getExpandButtonVariantTailwind(theme: Theme): string {
  const colors = variantColors[theme];
  return `bg-[${colors[0]}] border-[${colors[1]}] text-[${colors[2]}]`;
}

/**
 * Hover and focus-visible interaction styles for the expand button.
 * Uses `injectStyles` because the focus-visible background depends on
 * a runtime semantic token (`color[theme].background.info.focus`).
 */
function getExpandButtonInteractionStyles(theme: Theme): string {
  const id = `lg-code-expand-btn-interaction-${theme}`;
  const colors = variantColors[theme];

  injectStyles(
    id,
    `
    .${id}:hover {
      background-color: ${colors[1]};
    }
    .${id}:focus-visible {
      background-color: ${color[theme].background.info.focus};
      color: ${theme === Theme.Light ? '#1254B7' : colors[2]};
      outline: none;
    }
  `,
  );

  return id;
}

export const getExpandedButtonStyles = ({ theme }: { theme: Theme }) =>
  cn(
    expandButtonTailwind,
    getExpandButtonVariantTailwind(theme),
    getExpandButtonInteractionStyles(theme),
  );

// ---------------------------------------------------------------------------
// Copy button (without panel)
// ---------------------------------------------------------------------------

/**
 * Copy button hidden-by-default styles with a mobile pointer media query
 * override. Uses `injectStyles` because compound pointer media queries
 * cannot be expressed as standard Tailwind breakpoints.
 */
const copyButtonHoverHiddenClassName = 'lg-code-copy-btn-hover-hidden';
injectStyles(
  copyButtonHoverHiddenClassName,
  `
  .${copyButtonHoverHiddenClassName} {
    opacity: 0;
  }
  @media (max-width: 1024px) and (pointer: coarse),
    (max-width: 1024px) and (pointer: none) {
    .${copyButtonHoverHiddenClassName} {
      opacity: 1;
    }
  }
`,
);

export const getCopyButtonWithoutPanelStyles = ({
  copyButtonAppearance,
}: {
  copyButtonAppearance: CopyButtonAppearance;
}) =>
  cn(
    copyButtonWithoutPanelClassName,
    'absolute z-[1] top-[8px] right-[8px]',
    'transition-opacity duration-[150ms] ease-in-out',
    'hover:opacity-100 focus-within:opacity-100',
    copyButtonAppearance === CopyButtonAppearance.Hover &&
      copyButtonHoverHiddenClassName,
  );

// ---------------------------------------------------------------------------
// Loading skeleton
// ---------------------------------------------------------------------------

export const getLoadingStyles = (theme: Theme) =>
  cn(
    '[grid-area:code]',
    'pt-[16px] pb-[80px] pl-[16px] pr-[28px]',
    `bg-[${variantColors[theme][0]}]`,
  );
