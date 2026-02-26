import { Theme } from '@leafygreen-ui/lib';

export const wrapperBaseStyles = [
  '-ml-px',
  '[&:hover]:z-[2]',
  '[&:focus-within]:z-[2]',
].join(' ');

// background.disabled.default: light = #E8EDEB, dark = #1C2D38
// border.disabled.default: light = #C1C7C6, dark = #3D4F58
export const getSelectDisabledStyles = (theme: Theme) =>
  theme === Theme.Light
    ? '[&_button]:bg-[#E8EDEB] [&_button]:border-[#C1C7C6]'
    : '[&_button]:bg-[#1C2D38] [&_button]:border-[#3D4F58]';

// typeScales.body1.fontSize = 13, lineHeight = 20
// fontWeights.semiBold = 600
export const selectStyles = [
  '[&>div]:flex',
  '[&_button]:text-[13px]',
  '[&_button]:font-semibold',
  '[&_button]:leading-[20px]',
  '[&_button]:normal-case',
].join(' ');
