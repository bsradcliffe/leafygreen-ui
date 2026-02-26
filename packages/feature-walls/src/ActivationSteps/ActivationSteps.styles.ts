import { CSSProperties } from 'react';

import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { color, spacing, transitionDuration } from '@leafygreen-ui/tokens';

import { cn } from '../cn';

const CARD_HORIZONTAL_SPACING = spacing[800];
const TRANSITION_DURATION = transitionDuration.slower;

export const cardStyles = [
  'overflow-hidden',
  `p-[${spacing[800]}px_${CARD_HORIZONTAL_SPACING}px_0_${CARD_HORIZONTAL_SPACING}px]`,
].join(' ');

export const verticalStepperStyles = `pb-[${spacing[400]}px]`;

export const childrenContainerStyles = [
  'h-full',
  'w-full',
  'flex',
  'flex-col',
  'justify-between',
  `gap-[${spacing[200]}px]`,
].join(' ');

const baseMessageContainerStyles = [
  'flex',
  'justify-center',
  'items-center',
  `gap-[${spacing[100]}px]`,
  `[transition-property:content-visibility,opacity,padding,transform]`,
  `[transition-duration:${TRANSITION_DURATION}ms]`,
  '[transition-timing-function:ease-in-out]',
  '[transition-behavior:allow-discrete]',
  '[content-visibility:hidden]',
  'opacity-0',
  'p-0',
  '[transform:scaleY(0)_translateY(100%)]',
].join(' ');

const visibleMessageContainerStyles = [
  '[content-visibility:visible]',
  'opacity-100',
  `py-[${spacing[100]}px]`,
  'px-0',
  '[transform:scaleY(1)_translateY(0)]',
].join(' ');

export const getMessageContainerStyles = (theme: Theme, showMessage: boolean): { className: string; style: CSSProperties } => ({
  className: cn(baseMessageContainerStyles, {
    [visibleMessageContainerStyles]: showMessage,
  }),
  style: {
    width: `calc(100% + 2 * ${CARD_HORIZONTAL_SPACING}px)`,
    margin: `0 -${CARD_HORIZONTAL_SPACING}px`,
    backgroundColor: color[theme].background.success.default,
  },
});

export const getIconFill = (theme: Theme) => color[theme].icon.success.default;

export const getMessageStyle = (theme: Theme): CSSProperties => ({
  color: palette.green[theme === Theme.Light ? 'dark2' : 'light2'],
});
