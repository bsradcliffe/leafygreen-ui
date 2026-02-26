import { Theme } from '@leafygreen-ui/lib';
import {
  color,
  InteractionState,
  spacing,
  Variant,
} from '@leafygreen-ui/tokens';

const CLOSE_BUTTON_SIZE = 16;

export const getHeaderStyles = (theme: Theme) =>
  [
    `text-[${color[theme].text[Variant.InverseSecondary][InteractionState.Default]}]`,
    `mb-[${spacing[100]}px]`,
    `pt-[${spacing[150]}px] px-[${spacing[150]}px]`,
    'flex',
    'justify-between',
    'items-center',
  ].join(' ');

export const closeButtonStyles = [
  `h-[${CLOSE_BUTTON_SIZE}px]`,
  `w-[${CLOSE_BUTTON_SIZE}px]`,
].join(' ');

export const pinTooltipNoteStyles = [
  'flex',
  'items-center',
  `gap-[${spacing[50]}px]`,
].join(' ');
