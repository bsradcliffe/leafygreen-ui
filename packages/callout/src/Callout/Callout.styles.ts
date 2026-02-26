import { injectStyles, Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { color, fontFamilies, spacing } from '@leafygreen-ui/tokens';
import { anchorClassName } from '@leafygreen-ui/typography';

import { Variant } from './Callout.types';

export const headerLabels: Record<Variant, string> = {
  [Variant.Note]: 'Note',
  [Variant.Tip]: 'Tip',
  [Variant.Important]: 'Important',
  [Variant.Warning]: 'Warning',
  [Variant.Example]: 'Example',
} as const;

interface ColorSet {
  headerText: string;
  bar: string;
}

export const calloutColor: Record<Theme, Record<Variant, ColorSet>> = {
  [Theme.Dark]: {
    [Variant.Note]: {
      headerText: palette.blue.light2,
      bar: palette.blue.light1,
    },
    [Variant.Tip]: {
      headerText: palette.purple.light2,
      bar: palette.purple.base,
    },
    [Variant.Important]: {
      headerText: palette.yellow.light2,
      bar: palette.yellow.base,
    },
    [Variant.Warning]: {
      headerText: palette.red.light1,
      bar: palette.red.light1,
    },
    [Variant.Example]: {
      headerText: palette.gray.light1,
      bar: palette.gray.light1,
    },
  },
  [Theme.Light]: {
    [Variant.Note]: {
      headerText: palette.blue.dark1,
      bar: palette.blue.base,
    },
    [Variant.Tip]: {
      headerText: palette.purple.dark2,
      bar: palette.purple.base,
    },
    [Variant.Important]: {
      headerText: palette.yellow.dark2,
      bar: palette.yellow.base,
    },
    [Variant.Warning]: {
      headerText: palette.red.dark2,
      bar: palette.red.base,
    },
    [Variant.Example]: {
      headerText: palette.gray.dark1,
      bar: palette.gray.dark1,
    },
  },
};

export const getBaseStyles = (theme: Theme, variant: Variant) =>
  [
    `font-[${fontFamilies.default}]`,
    `text-[${color[theme].text.primary.default}]`,
    `ps-[${spacing[300]}px]`,
    'relative',
    // ::after pseudo-element for left bar
    `after:content-['']`,
    'after:absolute',
    'after:w-[3px]',
    'after:top-0',
    'after:bottom-0',
    'after:left-0',
    'after:rounded-[2px]',
    `after:bg-[${calloutColor[theme][variant].bar}]`,
  ].join(' ');

export const getHeaderStyles = (theme: Theme, variant: Variant) =>
  [
    'w-full',
    `mb-[${spacing[100]}px]`,
    `text-[${calloutColor[theme][variant].headerText}]`,
  ].join(' ');

/**
 * Content styles use injectStyles because they require descendant selectors
 * targeting `a` elements that are not already styled by @leafygreen-ui/typography's
 * Link component (identified by anchorClassName).
 * This pattern cannot be expressed with Tailwind utility classes.
 */
function getContentStylesClassName(theme: Theme): string {
  const id = `lg-callout-content-${theme}`;

  // Link color values per theme
  const linkColor = theme === Theme.Light ? '#016BF8' : '#0498EC';
  const fontWeight = theme === Theme.Light ? 'normal' : '600';
  const hoverDecorationColor =
    theme === Theme.Light ? '#E8EDEB' : '#3D4F58';
  const focusDecorationColor = '#016BF8';

  injectStyles(
    id,
    `
.${id} a:not(.${anchorClassName}) {
  font-family: 'Euclid Circular A', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  display: inline;
  align-items: center;
  text-decoration: none;
  text-decoration-color: transparent;
  cursor: pointer;
  color: ${linkColor};
  font-weight: ${fontWeight};
  line-height: inherit;
  appearance: none;
  background: none;
  border: none;
  padding: 0;
}
.${id} a:not(.${anchorClassName}):hover,
.${id} a:not(.${anchorClassName})[data-hover="true"] {
  text-decoration: underline;
  transition: text-decoration 150ms ease-in-out;
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
  text-decoration-color: ${hoverDecorationColor};
}
.${id} a:not(.${anchorClassName}):focus-visible,
.${id} a:not(.${anchorClassName})[data-focus="true"] {
  text-decoration: underline;
  transition: text-decoration 150ms ease-in-out;
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
  text-decoration-color: ${focusDecorationColor};
}
.${id} a:not(.${anchorClassName}):focus {
  outline: none;
}
`,
  );

  return id;
}

export const getContentStyles = (theme: Theme): string =>
  getContentStylesClassName(theme);
