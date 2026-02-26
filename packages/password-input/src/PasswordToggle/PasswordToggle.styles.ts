import { Size } from '../PasswordInput/PasswordInput.types';

/**
 * Resolved token values:
 * spacing[200] = 8px
 * spacing[300] = 12px
 */

export const baseStyles = [
  'absolute',
  'top-1/2',
  '-translate-y-1/2',
].join(' ');

export const sizeStyles: Record<Size, string> = {
  [Size.XSmall]: 'right-[8px] w-[22px] h-[22px]',
  [Size.Small]: 'right-[8px] w-[22px] h-[22px]',
  [Size.Default]: 'right-[12px]',
  [Size.Large]: 'right-[12px]',
};
