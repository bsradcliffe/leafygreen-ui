import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';
import { BaseFontSize } from '@leafygreen-ui/tokens';

import { bodyTypeScaleStyles } from '../styles';

export const anchorClassName = createUniqueClassName();

export const linkStyles = [
  "font-[\'Euclid_Circular_A\',\'Helvetica_Neue\',Helvetica,Arial,sans-serif]",
  'inline items-center no-underline [text-decoration-color:transparent] cursor-pointer',
  'text-[inherit] leading-[inherit] appearance-none bg-none border-none p-0',
  'hover:underline hover:[transition:text-decoration_150ms_ease-in-out] hover:[text-underline-offset:4px] hover:[text-decoration-thickness:2px]',
  '[&[data-hover=true]]:underline [&[data-hover=true]]:[transition:text-decoration_150ms_ease-in-out] [&[data-hover=true]]:[text-underline-offset:4px] [&[data-hover=true]]:[text-decoration-thickness:2px]',
  'focus-visible:underline focus-visible:[transition:text-decoration_150ms_ease-in-out] focus-visible:[text-underline-offset:4px] focus-visible:[text-decoration-thickness:2px]',
  '[&[data-focus=true]]:underline [&[data-focus=true]]:[transition:text-decoration_150ms_ease-in-out] [&[data-focus=true]]:[text-underline-offset:4px] [&[data-focus=true]]:[text-decoration-thickness:2px]',
  'focus:outline-none',
].join(' ');

export const linkModeStyles: Record<Theme, string> = {
  [Theme.Light]: [
    'text-[#016BF8] font-normal',
    'hover:[text-decoration-color:#E8EDEB] [&[data-hover=true]]:[text-decoration-color:#E8EDEB]',
    'focus-visible:[text-decoration-color:#016BF8] [&[data-focus=true]]:[text-decoration-color:#016BF8]',
  ].join(' '),
  [Theme.Dark]: [
    'text-[#0498EC] font-semibold',
    'hover:[text-decoration-color:#3D4F58] [&[data-hover=true]]:[text-decoration-color:#3D4F58]',
    'focus-visible:[text-decoration-color:#016BF8] [&[data-focus=true]]:[text-decoration-color:#016BF8]',
  ].join(' '),
};

export const linkScaleStyles = (baseFontSize?: BaseFontSize) => {
  if (baseFontSize) {
    return bodyTypeScaleStyles[baseFontSize];
  }
};
