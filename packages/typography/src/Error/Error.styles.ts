import { Theme } from '@leafygreen-ui/lib';
import { BaseFontSize } from '@leafygreen-ui/tokens';

const errorBaseStyles =
  "font-[\'Euclid_Circular_A\',\'Helvetica_Neue\',Helvetica,Arial,sans-serif] font-normal [margin-block-start:0] [margin-block-end:0]";

const errorColorStyles: Record<Theme, string> = {
  [Theme.Light]: 'text-[#DB3030]',
  [Theme.Dark]: 'text-[#FF6960]',
};

const errorTypeScaleStyles: Record<BaseFontSize, string> = {
  [BaseFontSize.Body1]: 'text-[13px] leading-[20px]',
  [BaseFontSize.Body2]: 'text-[16px] leading-[20px]',
};

export const getErrorMessageStyle = ({
  theme,
  baseFontSize,
}: {
  theme: Theme;
  baseFontSize: BaseFontSize;
}): string => {
  return `${errorBaseStyles} ${errorColorStyles[theme]} ${errorTypeScaleStyles[baseFontSize]}`;
};
