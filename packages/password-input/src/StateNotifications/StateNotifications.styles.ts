import { Theme } from '@leafygreen-ui/lib';

import { State } from '../PasswordInput/PasswordInput.types';

/**
 * Resolved token values:
 * spacing[100] = 4px
 * spacing[50] = 2px
 * typeScales.body1.fontSize = 13px
 * typeScales.body1.lineHeight = 20px
 *
 * color.light.text.error.default = #DB3030
 * color.light.text.primary.default = #001E2B
 * color.light.text.secondary.default = #5C6C75
 * color.light.icon.error.default = #DB3030
 * color.light.icon.success.default = #00A35C
 * color.light.icon.disabled.default = #C1C7C6
 *
 * color.dark.text.error.default = #FF6960
 * color.dark.text.primary.default = #E8EDEB
 * color.dark.text.secondary.default = #C1C7C6
 * color.dark.icon.error.default = #FF6960
 * color.dark.icon.success.default = #00ED64
 * color.dark.icon.disabled.default = #5C6C75
 */

export const wrapperStyles = [
  'p-0',
  'm-0',
  'list-none',
  '[&_li:first-of-type]:mt-[4px]',
].join(' ');

export const baseStyles = [
  'text-[13px]',
  'leading-[20px]',
  'flex',
  'gap-[4px]',
].join(' ');

export const getStateStyles = (theme: Theme) => ({
  [State.Error]: theme === Theme.Light ? 'text-[#DB3030]' : 'text-[#FF6960]',
  [State.Warning]: theme === Theme.Light ? 'text-[#DB3030]' : 'text-[#FF6960]',
  [State.Valid]: theme === Theme.Light ? 'text-[#001E2B]' : 'text-[#E8EDEB]',
  [State.None]: theme === Theme.Light ? 'text-[#5C6C75]' : 'text-[#C1C7C6]',
});

export const iconBaseStyles = 'mt-[2px]';

export const getIconStateStyles = (theme: Theme) => ({
  [State.Error]: theme === Theme.Light ? 'text-[#DB3030]' : 'text-[#FF6960]',
  [State.Warning]: theme === Theme.Light ? 'text-[#DB3030]' : 'text-[#FF6960]',
  [State.Valid]: theme === Theme.Light ? 'text-[#00A35C]' : 'text-[#00ED64]',
  [State.None]: theme === Theme.Light ? 'text-[#C1C7C6]' : 'text-[#5C6C75]',
});
