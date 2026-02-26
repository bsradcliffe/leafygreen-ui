import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { transitionDuration } from '@leafygreen-ui/tokens';

import { tableClassName } from '../Table/Table.styles';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

export const themeStyles: Record<Theme, string> = {
  [Theme.Dark]: `bg-[${palette.black}]`,
  [Theme.Light]: `bg-[${palette.white}]`,
};

/**
 * Returns Tailwind classes for the thead element.
 *
 * Note: The sticky header shadow effect requires pseudo-element CSS
 * (::after) that cannot be expressed as Tailwind utility classes.
 * When isSticky is true, the component renders a scoped <style> block
 * to handle the overflow shadow.
 */
export const getBaseStyles = (isSticky = false, theme: Theme) =>
  cn(
    isSticky && 'z-[1] top-0 sticky relative',
    themeStyles[theme],
  );

/**
 * Shadow configuration values per theme, used to generate the
 * scoped CSS for sticky overflow shadows.
 */
const shadowColors: Record<Theme, string> = {
  // color-mix values matching tokens/shadows
  [Theme.Light]: `color-mix(in srgb, ${palette.gray.dark1} 30%, transparent)`,
  [Theme.Dark]: `color-mix(in srgb, #000000 30%, transparent)`,
};

const shadowOffsets: Record<Theme, number> = {
  [Theme.Light]: 2,
  [Theme.Dark]: 16,
};

const BLUR_RADIUS = 16;
const SHORT_SIDE_SIZE = 36;

/**
 * Returns a scoped CSS string for the sticky thead overflow shadow.
 * Uses an ::after pseudo-element with a box-shadow below the thead.
 * The shadow is hidden by default and shown when data-is-sticky is true.
 */
export const getStickyOverflowCss = (stickyClassName: string, theme: Theme) => {
  const shadowColor = shadowColors[theme];
  const shadowOffsetVal = shadowOffsets[theme];

  return `
    .${stickyClassName}::after {
      content: '';
      position: absolute;
      border-radius: 40%;
      z-index: -1;
      bottom: 0;
      left: 0;
      right: 0;
      width: 96%;
      height: ${SHORT_SIDE_SIZE}px;
      margin: 0 auto;
      box-shadow: 0 ${shadowOffsetVal}px ${BLUR_RADIUS}px ${shadowColor};
    }
    .${tableClassName} .${stickyClassName}::after {
      opacity: 0;
      transition: opacity ${transitionDuration.default}ms ease-in-out;
    }
    .${tableClassName}[data-is-sticky='true'] .${stickyClassName}::after {
      opacity: 1;
    }
  `;
};
