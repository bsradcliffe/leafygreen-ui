import { Theme } from '@leafygreen-ui/lib';
import { BaseFontSize } from '@leafygreen-ui/tokens';

export const descriptionStyles: Record<Theme, string> = {
  [Theme.Light]:
    'text-[#5C6C75] font-[\'Euclid_Circular_A\',\'Helvetica_Neue\',Helvetica,Arial,sans-serif] font-normal mt-0 mb-0',
  [Theme.Dark]:
    'text-[#C1C7C6] font-[\'Euclid_Circular_A\',\'Helvetica_Neue\',Helvetica,Arial,sans-serif] font-normal mt-0 mb-0',
};

export const disabledDescriptionColorStyles: Record<Theme, string> = {
  [Theme.Light]: 'text-[#889397]',
  [Theme.Dark]: 'text-[#5C6C75]',
};

export const descriptionTypeScaleStyles: Record<BaseFontSize, string> = {
  [BaseFontSize.Body1]: 'text-[13px] leading-[20px]',
  [BaseFontSize.Body2]: 'text-[16px] leading-[20px]',
};
