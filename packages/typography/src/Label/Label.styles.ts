import { Theme } from '@leafygreen-ui/lib';
import { BaseFontSize } from '@leafygreen-ui/tokens';

export const labelStyles: Record<Theme, string> = {
  [Theme.Light]:
    "text-[#001E2B] font-[\'Euclid_Circular_A\',\'Helvetica_Neue\',Helvetica,Arial,sans-serif] font-semibold",
  [Theme.Dark]:
    "text-[#E8EDEB] font-[\'Euclid_Circular_A\',\'Helvetica_Neue\',Helvetica,Arial,sans-serif] font-semibold",
};

export const disabledLabelColorStyles: Record<Theme, string> = {
  [Theme.Light]: 'text-[#889397]',
  [Theme.Dark]: 'text-[#5C6C75]',
};

export const labelTypeScaleStyles: Record<BaseFontSize, string> = {
  [BaseFontSize.Body1]: 'text-[13px] leading-[20px]',
  [BaseFontSize.Body2]: 'text-[16px] leading-[20px]',
};
