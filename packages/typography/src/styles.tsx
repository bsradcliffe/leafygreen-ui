import { Theme } from '@leafygreen-ui/lib';
import { BaseFontSize } from '@leafygreen-ui/tokens';

export const baseTypographyStyles =
  'm-[unset] font-[\'Euclid_Circular_A\',\'Helvetica_Neue\',Helvetica,Arial,sans-serif] text-[#001E2B]';

export const bodyTypeScaleStyles: Record<BaseFontSize, string> = {
  [BaseFontSize.Body1]: 'text-[13px] leading-[20px]',
  [BaseFontSize.Body2]: 'text-[16px] leading-[28px]',
} as const;

export const codeTypeScaleStyles: Record<BaseFontSize, string> = {
  [BaseFontSize.Body1]: 'text-[13px] leading-[20px]',
  [BaseFontSize.Body2]: 'text-[15px] leading-[24px]',
} as const;

export const defaultTextColor: Record<Theme, string> = {
  [Theme.Light]: 'text-[#001E2B]',
  [Theme.Dark]: 'text-[#E8EDEB]',
};
