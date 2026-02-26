import { Theme } from '@leafygreen-ui/lib';

import { Size } from '../types';

// Static class names to replace createUniqueClassName
export const svgInnerOutlineClassName = 'lg-pipeline-inner-outline';
export const svgOuterOutlineClassName = 'lg-pipeline-outer-outline';
export const svgInnerClassName = 'lg-pipeline-inner';

export const counterVisibleStyles = 'flex';

export const counterSvgBaseStyles =
  'absolute w-full h-[calc(100%+10px)] flex';

export const counterSvgColStyles =
  'w-1/2 relative overflow-hidden';

export const counterSizeStyles: Record<Size, string> = {
  [Size.XSmall]:
    'min-w-[44px] -ml-[6px] before:px-[18px] before:py-0',
  [Size.Small]:
    'min-w-[48px] -ml-[8px] before:px-[21px] before:py-0',
  [Size.Normal]:
    'min-w-[54px] -ml-[9px] before:px-[23px] before:py-0',
  [Size.Large]:
    'min-w-[66px] -ml-[11px] before:px-[28px] before:py-0',
};

// transitionDuration.slower = 300ms
export const counterBaseStyles = [
  'hidden',
  'grow',
  'items-center',
  'justify-center',
  'relative',
  '-ml-[11px]',
  "before:whitespace-nowrap before:[content:'+'_counter(hiddenCount)] before:z-[1]",
  `[&_.${svgInnerClassName}]:transition-all [&_.${svgInnerClassName}]:duration-300 [&_.${svgInnerClassName}]:ease-in-out`,
  `[&_.${svgInnerOutlineClassName}]:fill-[rgba(255,255,255,0)] [&_.${svgInnerOutlineClassName}]:transition-all [&_.${svgInnerOutlineClassName}]:duration-300 [&_.${svgInnerOutlineClassName}]:ease-in-out`,
  `[&_.${svgOuterOutlineClassName}]:fill-[rgba(255,255,255,0)] [&_.${svgOuterOutlineClassName}]:transition-all [&_.${svgOuterOutlineClassName}]:duration-300 [&_.${svgOuterOutlineClassName}]:ease-in-out`,
  'focus-visible:outline-none focus:outline-none',
].join(' ');

export const svgStyles =
  'absolute top-1/2 -translate-y-1/2';

export const svgLayer1Styles =
  `${svgStyles} left-0`;

export const svgLayer2Styles =
  `${svgStyles} right-0`;

// palette.blue.dark1 = #1254B7, palette.blue.dark2 = #083C90
// palette.blue.light1 = #0498EC, palette.blue.light2 = #C3E7FE, palette.blue.light3 = #E1F7FF
export const counterThemeStyles: Record<Theme, string> = {
  [Theme.Light]: [
    'text-[#1254B7]',
    `[&_.${svgInnerClassName}]:fill-[#E1F7FF]`,
    `[&:focus-visible_.${svgOuterOutlineClassName}]:fill-[#0498EC]`,
    `[&:hover_.${svgInnerOutlineClassName}]:fill-[#E1F7FF]`,
    `[&:hover_.${svgInnerClassName}]:fill-[#C3E7FE]`,
  ].join(' '),
  [Theme.Dark]: [
    'text-[#C3E7FE]',
    `[&_.${svgInnerClassName}]:fill-[#083C90]`,
    `[&:focus-visible_.${svgOuterOutlineClassName}]:fill-[#0498EC]`,
    `[&:hover_.${svgInnerOutlineClassName}]:fill-[#083C90]`,
    `[&:hover_.${svgInnerClassName}]:fill-[#1254B7]`,
  ].join(' '),
};
