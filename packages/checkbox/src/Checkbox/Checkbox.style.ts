import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';

import { checkBoxSize } from '../constants';

export const checkWrapperClassName = createUniqueClassName('check-wrapper');
export const inputClassName = createUniqueClassName('input');

export const containerStyle = [
  'grid',
  `grid-cols-[${checkBoxSize}px_auto]`,
  `[grid-template-areas:'label_label'_'._description']`,
  'gap-x-2',
  'gap-y-0',
  'relative',
  'items-center',
  'justify-start',
  'z-0',
].join(' ');

export const disabledContainerStyle = 'cursor-not-allowed';

export const labelStyle = [
  '[grid-area:label]',
  'grid',
  `grid-cols-[${checkBoxSize}px_auto]`,
  `[grid-template-areas:'check_text']`,
  'gap-2',
  'justify-start',
  'items-baseline',
  'cursor-pointer',
].join(' ');

/**
 * Raw CSS box-shadow values for hover ring by theme.
 * Applied via a <style> tag since the selector references dynamic class names.
 */
export const labelHoverBoxShadow: Record<Theme, string> = {
  [Theme.Light]: '0 0 0 3px #E8EDEB',
  [Theme.Dark]: '0 0 0 3px #3D4F58',
};

export const disabledLabelStyle = 'cursor-not-allowed';

export const inputStyle = [
  'm-0',
  'absolute',
  'h-0',
  'w-0',
  'left-0',
  'top-0',
  'pointer-events-none',
  'opacity-0',
].join(' ');

/**
 * Raw CSS box-shadow values for focus ring by theme.
 * Applied via a <style> tag since the selector references dynamic class names.
 */
export const inputFocusBoxShadow: Record<Theme, string> = {
  [Theme.Light]: '0 0 0 2px #FFFFFF, 0 0 0 4px #016BF8',
  [Theme.Dark]: '0 0 0 2px #001E2B, 0 0 0 4px #0498EC',
};

export const labelTextStyle = 'self-baseline';

export const descriptionStyle = '[grid-area:description]';
