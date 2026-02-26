import { TransitionStatus } from 'react-transition-group';

import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';

import { cn } from '../cn';

export const sideNavClassName = createUniqueClassName('side-nav');
export const sideNavItemSidePadding = 16;
export const sideNavWidth = 184;
export const collapseDuration = 200;

export const ulStyleOverrides = [
  '[margin-block-start:0px]',
  '[margin-block-end:0px]',
  '[padding-inline-start:0px]',
  'p-0',
  'list-none',
].join(' ');

export const getIndentLevelStyle = (indentLevel: number, darkMode: boolean) => {
  return [
    `border-l-[3px]`,
    darkMode ? 'border-l-[#3D4F58]' : 'border-l-[#C1C7C6]',
    `pl-[${8 + indentLevel * 8}px]`,
  ].join(' ');
};

export const outerContainerStyle = [
  'relative',
  'transition-[width]',
  'duration-[200ms]',
  'ease-in-out',
  'motion-reduce:transition-none',
].join(' ');

export const outerContainerCollapsedStyle = 'w-[48px]';

export const innerNavWrapperStyle = [
  'absolute',
  'top-0',
  'bottom-0',
  'left-0',
  'flex',
].join(' ');

export const navBaseStyles = [
  'relative',
  'font-[var(--font-family-default)]',
  'z-0',
  'transition-[box-shadow,border-color,width]',
  'duration-[200ms]',
  'ease-in-out',
  'motion-reduce:[transition-property:box-shadow,border-color]',
].join(' ');

export const navThemeStyles: Record<Theme, string> = {
  [Theme.Light]: 'bg-[#F9FBFA]',
  [Theme.Dark]: 'bg-[#112733]',
};

export const hoverNavStyles =
  'shadow-[2px_0_4px_rgba(0,30,43,0.1)]';

export const collapsedNavStyles = 'w-[48px]';

export const listWrapperStyle = [
  'absolute',
  'left-0',
  'right-0',
  'top-0',
  'bottom-0',
  'overflow-hidden',
  'transition-[opacity,transform]',
  'duration-[200ms]',
  'ease-in-out',
  'motion-reduce:[transition-property:opacity]',
].join(' ');

export const listStyles = [
  'absolute',
  'left-0',
  'right-0',
  'top-0',
  'bottom-0',
  'pt-[16px]',
  'pb-[16px]',
  'overflow-x-hidden',
  'overflow-y-auto',
].join(' ');

const expandedMenu_EnteredStyle = [
  'translate-y-[8px]',
  'opacity-0',
  'pointer-events-none',
].join(' ');

const expandedMenu_ExitedStyle = [
  'translate-y-0',
  'opacity-100',
].join(' ');

const collapsedMenu_EnteredStyle = [
  'translate-y-0',
  'opacity-100',
].join(' ');

const collapsedMenu_ExitedStyle = [
  'translate-y-[-8px]',
  'opacity-0',
  'pointer-events-none',
].join(' ');

export const expandedStateStyles: Partial<Record<TransitionStatus, string>> = {
  entering: expandedMenu_EnteredStyle,
  entered: expandedMenu_EnteredStyle,
  exiting: expandedMenu_ExitedStyle,
  exited: expandedMenu_ExitedStyle,
} as const;

export const collapsedStateStyles: Partial<Record<TransitionStatus, string>> = {
  entering: collapsedMenu_EnteredStyle,
  entered: collapsedMenu_EnteredStyle,
  exiting: collapsedMenu_ExitedStyle,
  exited: collapsedMenu_ExitedStyle,
} as const;

export const typographyStyle = {
  [13]: 'text-[13px] leading-[20px]',
  [16]: 'text-[16px] leading-[28px]',
} as const;
