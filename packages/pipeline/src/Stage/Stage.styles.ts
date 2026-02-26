import { Theme } from '@leafygreen-ui/lib';

import { edges } from '../svgs/edges';
import { Size } from '../types';

export const stageTextStyles =
  'flex h-full items-center justify-center w-full';

export const stageTextSizeStyles: Record<Size, string> = {
  [Size.XSmall]: 'px-[6px] py-0',
  [Size.Small]: 'px-[6px] py-0',
  [Size.Normal]: 'px-[8px] py-0',
  [Size.Large]: 'px-[12px] py-0',
};

// palette.blue.light2 = #C3E7FE, palette.blue.dark1 = #1254B7
export const stageTextThemeStyles: Record<Theme, string> = {
  [Theme.Light]: 'bg-[#C3E7FE] text-[#1254B7]',
  [Theme.Dark]: 'bg-[#1254B7] text-[#C3E7FE]',
};

export const stageBaseStyles = [
  'flex',
  'grow',
  'h-full',
  "[&[data-stage-visible='false']]:[counter-increment:hiddenCount]",
  "before:content-[''] before:inline-block before:shrink-0 before:relative before:h-full",
  "after:content-[''] after:inline-block after:shrink-0 after:relative after:h-full",
  'first-of-type:[&_span]:rounded-tl-[5px] first-of-type:[&_span]:rounded-bl-[5px]',
].join(' ');

export const stageSvgThemeStyles: Record<Theme, string> = {
  [Theme.Dark]: [
    '[&:not(:first-of-type)]:before:bg-[#1254B7] [&:not(:first-of-type)]:before:right-[-1px]',
    'after:bg-[#1254B7] after:left-[-1px]',
  ].join(' '),
  [Theme.Light]: [
    '[&:not(:first-of-type)]:before:bg-[#C3E7FE] [&:not(:first-of-type)]:before:right-[-1px]',
    'after:bg-[#C3E7FE] after:left-[-1px]',
  ].join(' '),
};

// Adding edges of segments as an SVG with CSS
// Note: mask URLs use data URIs from the edges constant
export const getStageSvgSizeStyles = (size: Size): string => {
  const edge = edges[size];

  switch (size) {
    case Size.XSmall:
      return [
        'first-of-type:[&_span]:pl-[10px]',
        '[&:not(:first-of-type)]:-ml-[3px]',
        `[&:not(:first-of-type)]:before:[mask:url('${edge.before}')] [&:not(:first-of-type)]:before:w-[7px]`,
        `after:[mask:url('${edge.after}')] after:w-[9px]`,
      ].join(' ');

    case Size.Small:
      return [
        'first-of-type:[&_span]:pl-[10px]',
        '[&:not(:first-of-type)]:-ml-[6px]',
        `[&:not(:first-of-type)]:before:[mask:url('${edge.before}')] [&:not(:first-of-type)]:before:w-[9px]`,
        `after:[mask:url('${edge.after}')] after:w-[11px]`,
      ].join(' ');

    case Size.Normal:
      return [
        'first-of-type:[&_span]:pl-[12px]',
        '[&:not(:first-of-type)]:-ml-[7px]',
        `[&:not(:first-of-type)]:before:[mask:url('${edge.before}')] [&:not(:first-of-type)]:before:w-[13px]`,
        `after:[mask:url('${edge.after}')] after:w-[13px]`,
      ].join(' ');

    case Size.Large:
      return [
        'first-of-type:[&_span]:pl-[15px]',
        '[&:not(:first-of-type)]:-ml-[8px]',
        `[&:not(:first-of-type)]:before:[mask:url('${edge.before}')] [&:not(:first-of-type)]:before:w-[13px]`,
        `after:[mask:url('${edge.after}')] after:w-[15px]`,
      ].join(' ');
  }
};

// Pre-computed record for use without function call
export const stageSvgSizeStyles: Record<Size, string> = {
  [Size.XSmall]: getStageSvgSizeStyles(Size.XSmall),
  [Size.Small]: getStageSvgSizeStyles(Size.Small),
  [Size.Normal]: getStageSvgSizeStyles(Size.Normal),
  [Size.Large]: getStageSvgSizeStyles(Size.Large),
};
