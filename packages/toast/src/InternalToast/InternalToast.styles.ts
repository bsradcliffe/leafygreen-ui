import { Theme } from '@leafygreen-ui/lib';
import { anchorClassName } from '@leafygreen-ui/typography';

import { cn } from '../cn';
import { TOAST_CONSTANTS } from '../constants';
import { Variant } from '../Toast.types';

export const toastBGColor: Record<Theme, string> = {
  [Theme.Light]: '#001E2B',
  [Theme.Dark]: '#E8EDEB',
};

/**
 * Note: nested selectors targeting .${anchorClassName} and `a` elements
 * are handled via Tailwind arbitrary selectors.
 */
export const baseToastStyle = [
  'fixed',
  `left-[${TOAST_CONSTANTS.inset}px]`,
  `bottom-[${TOAST_CONSTANTS.inset}px]`,
  `w-[calc(100vw-${TOAST_CONSTANTS.inset * 2}px)]`,
  `max-w-[${TOAST_CONSTANTS.maxWidth}px]`,
  `min-h-[${TOAST_CONSTANTS.minHeight - 2}px]`,
  'flex',
  'items-center',
  'justify-between',
  `p-[${TOAST_CONSTANTS.inset * 2 - 1}px]`,
  `pl-[16px]`,
  'gap-[16px]',
  'font-[var(--font-family-default)]',
  'text-[13px]',
  'leading-[20px]',
  'rounded-[12px]',
  'border',
  'border-solid',
  'overflow-hidden',
  '[transform-origin:bottom_center]',
  'transition-all',
  'duration-[var(--transition-duration-default)]',
  'ease-in-out',
  // Anchor/link styles within toast
  `[&_.${anchorClassName}]:text-[inherit]`,
  `[&_.${anchorClassName}]:text-[inherit]`,
  `[&_.${anchorClassName}]:font-semibold`,
  `[&_.${anchorClassName}]:underline`,
  `[&_.${anchorClassName}]:[text-underline-offset:3px]`,
  `[&_.${anchorClassName}]:[text-decoration-thickness:2px]`,
  `[&_.${anchorClassName}]:rounded-[4px]`,
  '[&_a]:text-[inherit]',
  '[&_a]:font-semibold',
  '[&_a]:underline',
  '[&_a]:[text-underline-offset:3px]',
  '[&_a]:[text-decoration-thickness:2px]',
  '[&_a]:rounded-[4px]',
  `[&_.${anchorClassName}:hover]:outline-none`,
  `[&_.${anchorClassName}:focus]:outline-none`,
  `[&_.${anchorClassName}:focus-visible]:outline-none`,
  `[&_.${anchorClassName}:focus-visible]:relative`,
  '[&_a:hover]:outline-none',
  '[&_a:focus]:outline-none',
  '[&_a:focus-visible]:outline-none',
  '[&_a:focus-visible]:relative',
].join(' ');

export const toastThemeStyles: Record<Theme, string> = {
  [Theme.Light]: [
    'bg-[#001E2B]',
    'border-[#3D4F58]',
    'shadow-[0px_18px_18px_-15px_color-mix(in_srgb,#001E2B_20%,transparent)]',
    `[&_.${anchorClassName}]:text-[#F9FBFA]`,
    '[&_a]:text-[#F9FBFA]',
    `[&_.${anchorClassName}:hover]:text-[#E8EDEB]`,
    `[&_.${anchorClassName}:focus-visible]:text-[#E8EDEB]`,
    '[&_a:hover]:text-[#E8EDEB]',
    '[&_a:focus-visible]:text-[#E8EDEB]',
  ].join(' '),
  [Theme.Dark]: [
    'bg-[#E8EDEB]',
    'border-[#C1C7C6]',
    'shadow-[0_18px_18px_-15px_color-mix(in_srgb,#000000_45%,transparent)]',
    `[&_.${anchorClassName}]:text-[#1C2D38]`,
    '[&_a]:text-[#1C2D38]',
    `[&_.${anchorClassName}:hover]:text-[#3D4F58]`,
    `[&_.${anchorClassName}:focus-visible]:text-[#3D4F58]`,
    '[&_a:hover]:text-[#3D4F58]',
    '[&_a:focus-visible]:text-[#3D4F58]',
  ].join(' '),
};

const contentWrapperStyle = [
  'flex',
  'items-center',
  'gap-[16px]',
  'w-full',
  'opacity-0',
  'transition-opacity',
  'ease-out',
  'duration-[var(--transition-duration-default)]',
].join(' ');

const contentVisibleStyles = 'opacity-100';

export const getContentWrapperStyles = ({
  showContent,
}: {
  showContent?: boolean;
}) =>
  cn(contentWrapperStyle, {
    [contentVisibleStyles]: !!showContent,
  });

export const baseIconStyle = [
  'h-[24px]',
  'w-[24px]',
  'shrink-0',
].join(' ');

export const textContentStyle = [
  'w-full',
  'overflow-hidden',
  'text-ellipsis',
].join(' ');

export const titleStyle = [
  'font-semibold',
  'overflow-hidden',
].join(' ');

export const titleThemeStyle: Record<Theme, string> = {
  [Theme.Light]: 'text-white',
  [Theme.Dark]: 'text-[#001E2B]',
};

export const descriptionStyle = 'overflow-hidden';

export const descriptionThemeStyle: Record<Theme, string> = {
  [Theme.Light]: 'text-[#E8EDEB]',
  [Theme.Dark]: 'text-[#3D4F58]',
};

const dismissButtonStyle = [
  'w-[24px]',
  'h-[24px]',
  '-m-[4px]',
  'self-start',
  'transition-colors',
  'duration-[var(--transition-duration-default)]',
  'ease-in-out',
  'focus-visible:outline-none',
].join(' ');

export const dismissButtonThemeStyle: Record<Theme, string> = {
  [Theme.Light]: 'text-[#889397]',
  [Theme.Dark]: [
    'text-[#3D4F58]',
    'hover:before:bg-[#C1C7C6]',
    'focus-visible:before:bg-[#C1C7C6]',
  ].join(' '),
};

const variantIconStyle: Record<Variant, Record<Theme, string>> = {
  [Variant.Success]: {
    [Theme.Light]: 'text-[#00ED64]',
    [Theme.Dark]: 'text-[#00A35C]',
  },
  [Variant.Note]: {
    [Theme.Light]: 'text-[#0498EC]',
    [Theme.Dark]: 'text-[#016BF8]',
  },
  [Variant.Warning]: {
    [Theme.Light]: 'text-[#FF6960]',
    [Theme.Dark]: 'text-[#DB3030]',
  },
  [Variant.Important]: {
    [Theme.Light]: 'text-[#FFC010]',
    [Theme.Dark]: 'text-[#944F01]',
  },
  [Variant.Progress]: {
    [Theme.Light]: 'text-[#E8EDEB]',
    [Theme.Dark]: 'text-[#3D4F58]',
  },
};

export const getIconStyle = ({
  variant,
  theme,
}: {
  variant: Variant;
  theme: Theme;
}) => {
  return cn(baseIconStyle, variantIconStyle[variant][theme]);
};

export const getDismissButtonStyle = ({ theme }: { theme: Theme }) => {
  return cn(dismissButtonStyle, dismissButtonThemeStyle[theme]);
};
