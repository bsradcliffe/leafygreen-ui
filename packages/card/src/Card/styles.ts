import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import {
  boxShadows,
  color,
  focusRing,
  fontFamilies,
  transitionDuration,
  typeScales,
} from '@leafygreen-ui/tokens';

import { ContentStyle } from './types';

function cn(
  ...classes: Array<string | false | undefined | null>
): string {
  return classes.filter(Boolean).join(' ');
}

interface ColorSet {
  containerStyle: string;
  clickableStyle: string;
}

const lightBaseBoxShadow = boxShadows[Theme.Light][1];
const lightHoverBoxShadow = boxShadows[Theme.Light][2];
const darkBaseBoxShadow = boxShadows[Theme.Dark][1];
const darkHoverBoxShadow = boxShadows[Theme.Dark][2];

const lightFocusBoxShadow = focusRing.light.default;
const darkFocusBoxShadow = focusRing.dark.default;

const colorSet: Record<Theme, ColorSet> = {
  [Theme.Light]: {
    containerStyle: [
      'box-border',
      `border-[1px]`,
      `border-solid`,
      `border-[${color[Theme.Light].border.tertiary.default}]`,
      `bg-[${palette.white}]`,
      `text-[${palette.gray.dark3}]`,
    ].join(' '),
    clickableStyle: [
      'cursor-pointer',
      `focus:outline-none`,
      `focus:[box-shadow:${lightFocusBoxShadow},${lightBaseBoxShadow}]`,
      `hover:border-[${palette.gray.light2}]`,
      `hover:[box-shadow:${lightHoverBoxShadow}]`,
      `active:border-[${palette.gray.light2}]`,
      `active:[box-shadow:${lightHoverBoxShadow}]`,
      `hover:focus:[box-shadow:${lightFocusBoxShadow},${lightBaseBoxShadow}]`,
      `active:focus:[box-shadow:${lightFocusBoxShadow},${lightBaseBoxShadow}]`,
    ].join(' '),
  },
  [Theme.Dark]: {
    containerStyle: [
      'box-border',
      `border-[1px]`,
      `border-solid`,
      `border-[${color[Theme.Dark].border.tertiary.default}]`,
      `bg-[${palette.black}]`,
      `text-[${palette.white}]`,
    ].join(' '),
    clickableStyle: [
      'cursor-pointer',
      `focus:outline-none`,
      `focus:[box-shadow:${darkBaseBoxShadow},${darkFocusBoxShadow}]`,
      `hover:[box-shadow:${darkHoverBoxShadow}]`,
      `hover:focus:[box-shadow:${darkBaseBoxShadow},${darkFocusBoxShadow}]`,
    ].join(' '),
  },
};

const containerStyle = [
  'relative',
  `[transition:${transitionDuration.default}ms_ease-in-out]`,
  `[transition-property:border,box-shadow]`,
  'rounded-[24px]',
  `font-[${fontFamilies.default}]`,
  `text-[${typeScales.body1.fontSize}px]`,
  `leading-[${typeScales.body1.lineHeight}px]`,
  'p-[24px]',
  'min-h-[68px]',
].join(' ');

export const getCardStyles = ({
  theme,
  contentStyle,
  className,
}: {
  theme: Theme;
  contentStyle?: ContentStyle;
  className?: string;
}) =>
  cn(
    containerStyle,
    colorSet[theme].containerStyle,
    contentStyle === ContentStyle.Clickable && colorSet[theme].clickableStyle,
    className,
  );
