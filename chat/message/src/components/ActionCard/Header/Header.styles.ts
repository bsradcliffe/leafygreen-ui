import { Theme } from '@leafygreen-ui/lib';
import {
  color,
  InteractionState,
  spacing,
  Variant,
} from '@leafygreen-ui/tokens';

import { cn } from '../../../cn';

import { State } from '../shared.types';

export const getBaseContainerStyles = ({
  isErrorState,
  theme,
}: {
  isErrorState: boolean;
  theme: Theme;
}) =>
  [
    `bg-[${color[theme].background[isErrorState ? Variant.Error : Variant.Secondary][InteractionState.Default]}]`,
    `pt-[${spacing[200]}px]`,
    `pr-[${spacing[200]}px]`,
    `pb-[${spacing[300]}px]`,
    `pl-[${spacing[300]}px]`,
    'flex',
    'flex-col',
  ].join(' ');

export const getContainerStyles = ({
  className,
  isErrorState,
  theme,
}: {
  className?: string;
  isErrorState: boolean;
  theme: Theme;
}) => cn(getBaseContainerStyles({ isErrorState, theme }), className);

export const upperRowStyles = [
  'flex',
  'justify-between',
  'items-center',
  `gap-[${spacing[100]}px]`,
].join(' ');

export const titleContainerStyles = [
  'flex',
  'items-center',
  `gap-[${spacing[150]}px]`,
].join(' ');

const getCanceledTextStyles = (theme: Theme) =>
  `text-[${color[theme].text[Variant.Secondary][InteractionState.Default]}]`;

const getErrorTextStyles = (theme: Theme) =>
  `text-[${color[theme].text[Variant.OnError][InteractionState.Default]}]`;

const getDefaultTextStyles = (theme: Theme) =>
  `text-[${color[theme].text[Variant.Primary][InteractionState.Default]}]`;

export const getTextStyles = ({
  state,
  theme,
}: {
  state: State;
  theme: Theme;
}) => {
  switch (state) {
    case State.Canceled:
      return getCanceledTextStyles(theme);
    case State.Error:
      return getErrorTextStyles(theme);
    case State.Idle:
    case State.Running:
    case State.Success:
    default:
      return getDefaultTextStyles(theme);
  }
};

export const chipsContainerStyles = [
  `pt-[${spacing[200]}px]`,
  'flex',
  'flex-wrap',
  `gap-[${spacing[200]}px]`,
].join(' ');
