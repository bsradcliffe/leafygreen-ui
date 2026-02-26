import {
  BaseFontSize,
  Size,
  Variant,
} from '@leafygreen-ui/tokens';

import { FormFieldState } from './FormField.types';

export const getFontSizeStyles = ({
  baseFontSize,
  size,
}: {
  baseFontSize: BaseFontSize;
  size: Size;
}) => {
  if (size === Size.XSmall || size === Size.Small) {
    return 'text-[13px] leading-[20px]';
  }

  if (size === Size.Default) {
    return `text-[${baseFontSize}px] leading-[20px]`;
  }

  if (size === Size.Large) {
    return 'text-[18px] leading-[24px]';
  }
};

export const convertFormFieldStateToIconVariant = (state: FormFieldState) => {
  if (state === FormFieldState.Error) {
    return Variant.Error;
  }

  if (state === FormFieldState.Valid) {
    return Variant.Success;
  }

  return Variant.Primary;
};

export const textContainerStyle = 'flex flex-col';

export const marginBottom = 'mb-[4px]';
