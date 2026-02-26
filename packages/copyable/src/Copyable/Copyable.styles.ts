import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import {
  BaseFontSize,
  fontFamilies,
  transitionDuration,
  typeScales,
} from '@leafygreen-ui/tokens';
import { labelTypeScaleStyles } from '@leafygreen-ui/typography';

import { cn } from '../cn';

import { Size } from './Copyable.types';

const containerStyle = [
  'relative',
  'grid',
  'grid-flow-col',
  'grid-cols-[1fr_auto]',
  `[grid-template-areas:'code_button']`,
  'h-[48px]',
  'w-[400px]',
  'my-[2px]',
].join(' ');

const buttonContainerStyle = 'h-[36px]';

const noButtonContainerStyle = 'overflow-hidden rounded-xl';

const noButtonContainerStyleMode: Record<Theme, string> = {
  [Theme.Light]: `rounded-[6px] border border-solid border-[${palette.gray.light2}]`,
  [Theme.Dark]: `rounded-[6px] border border-solid border-[${palette.gray.dark1}]`,
};

export const getContainerStyle = ({
  className,
  showCopyButton,
  theme,
}: {
  className?: string;
  showCopyButton: boolean;
  theme: Theme;
}) =>
  cn(
    containerStyle,
    showCopyButton && buttonContainerStyle,
    !showCopyButton && noButtonContainerStyleMode[theme],
    !showCopyButton && noButtonContainerStyle,
    className,
  );

const codeStyle = [
  '[grid-area:code]',
  'inline-flex',
  'items-center',
  'h-full',
  'w-full',
  `font-[${fontFamilies.code}]`,
  'border',
  'border-solid',
  'border-r-0',
  'rounded-l-[6px]',
  'rounded-r-none',
  'pl-[12px]',
  'whitespace-nowrap',
  'overflow-auto',
].join(' ');

const codeStyleColor: Record<Theme, string> = {
  [Theme.Light]: `text-[${palette.black}] bg-[${palette.gray.light3}] border-[${palette.gray.light2}]`,
  [Theme.Dark]: `text-[${palette.gray.light2}] bg-[${palette.black}] border-[${palette.gray.dark1}]`,
};

// Border is removed from the code component and added to the parent
const codeStyleNoButton = 'border-0';

const codeFontStyle: Record<Size, string> = {
  [Size.Default]: `text-[${typeScales.code1.fontSize}px] leading-[${typeScales.code1.lineHeight}px]`,
  [Size.Large]: `text-[${typeScales.code2.fontSize}px] leading-[${typeScales.code2.lineHeight}px]`,
};

const labelNoButtonStyle = 'text-[18px] leading-[24px]';

const labelFontStyle: Record<Size, string> = {
  [Size.Default]: labelTypeScaleStyles[BaseFontSize.Body1],
  [Size.Large]: labelTypeScaleStyles[BaseFontSize.Body2],
};

export const getFontStyle = ({
  size,
  showCopyButton,
}: {
  size: Size;
  showCopyButton: boolean;
}) => cn(labelFontStyle[size], !showCopyButton && labelNoButtonStyle);

const buttonWrapperStyle = [
  '[grid-area:button]',
  'relative',
  'inline-block',
  'h-full',
].join(' ');

// Uses rgba for the shadow colors instead of polished `transparentize`
// Light: palette.gray.dark1 (#5C6C75) at 35% opacity => rgba(92,108,117,0.35)
// Light hover: palette.gray.dark1 at 40% opacity => rgba(92,108,117,0.40)
// Dark: palette.black (#001E2B) at 60% opacity => rgba(0,30,43,0.60)
// Dark hover: palette.black at 60% opacity => rgba(0,30,43,0.60)
const buttonWrapperStyleShadow = [
  "before:content-['']",
  'before:block',
  'before:absolute',
  'before:h-[calc(100%-6px)]',
  'before:w-[16px]',
  'before:left-0',
  'before:top-[3px]',
  'before:rounded-full',
  `before:transition-shadow`,
  `before:duration-[${transitionDuration.faster}ms]`,
  'before:ease-in-out',
].join(' ');

const buttonWrapperStyleShadowTheme: Record<Theme, string> = {
  [Theme.Light]: [
    'before:shadow-[0_0_10px_0_rgba(92,108,117,0.35)]',
    'hover:before:shadow-[0_0_12px_0_rgba(92,108,117,0.40)]',
  ].join(' '),
  [Theme.Dark]: [
    'before:shadow-[-10px_0_10px_0_rgba(0,30,43,0.60)]',
    'hover:before:shadow-[-12px_0_10px_0_rgba(0,30,43,0.60)]',
  ].join(' '),
};

export const getCodeStyle = ({
  theme,
  size,
  showCopyButton,
}: {
  theme: Theme;
  size: Size;
  showCopyButton: boolean;
}) =>
  cn(
    codeStyle,
    codeStyleColor[theme],
    codeFontStyle[size],
    !showCopyButton && codeStyleNoButton,
  );

export const getButtonWrapperStyle = ({
  theme,
  isOverflowed,
}: {
  theme: Theme;
  isOverflowed: boolean;
}) =>
  cn(
    buttonWrapperStyle,
    // Toggle these styles on only when the content extends beyond the edge of the container
    isOverflowed && buttonWrapperStyleShadow,
    isOverflowed && buttonWrapperStyleShadowTheme[theme],
  );

export const buttonStyle = [
  'h-full',
  'rounded-l-none',
  'rounded-r-[6px]',

  // The ripple element
  '[&>:first-child]:rounded-l-none',
  '[&>:first-child]:rounded-r-[6px]',
].join(' ');

export const iconStyle = 'pr-[6px]';
