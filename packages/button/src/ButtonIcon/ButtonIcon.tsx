import React from 'react';

import { getTheme, Theme } from '@leafygreen-ui/lib';

import { ButtonProps, Size, Variant } from '../types';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

const baseIconColorClass: Record<Theme, Record<Variant, string>> = {
  [Theme.Light]: {
    [Variant.Default]: 'text-[#889397]',
    [Variant.Primary]: 'text-[#C0FAE6]',
    [Variant.PrimaryOutline]: 'text-[#00684A]',
    [Variant.Danger]: 'text-[#FFEAE5]',
    [Variant.DangerOutline]: 'text-[#FF6960]',
    [Variant.BaseGreen]: 'text-[#00684A]',
  },
  [Theme.Dark]: {
    [Variant.Default]: 'text-[#E8EDEB]',
    [Variant.Primary]: 'text-[#C0FAE6]',
    [Variant.PrimaryOutline]: 'text-[#00ED64]',
    [Variant.Danger]: 'text-[#FFCDC7]',
    [Variant.DangerOutline]: 'text-[#FF6960]',
    [Variant.BaseGreen]: 'text-[#00684A]',
  },
};

const onlyIconColorClass: Record<Theme, Record<Variant, string>> = {
  [Theme.Light]: {
    [Variant.Default]: 'text-[#001E2B]',
    [Variant.Primary]: 'text-white',
    [Variant.PrimaryOutline]: 'text-[#00684A]',
    [Variant.Danger]: 'text-white',
    [Variant.DangerOutline]: 'text-[#DB3030]',
    [Variant.BaseGreen]: 'text-[#023430]',
  },
  [Theme.Dark]: {
    [Variant.Default]: 'text-white',
    [Variant.Primary]: 'text-white',
    [Variant.PrimaryOutline]: 'text-[#00ED64]',
    [Variant.Danger]: 'text-white',
    [Variant.DangerOutline]: 'text-[#FF6960]',
    [Variant.BaseGreen]: 'text-[#023430]',
  },
};

const iconSizeClass: Record<Size, string> = {
  [Size.XSmall]: 'h-[14px] w-[14px]',
  [Size.Small]: 'h-[16px] w-[16px]',
  [Size.Default]: 'h-[16px] w-[16px]',
  [Size.Large]: 'h-[20px] w-[20px]',
};

const disabledIconClass: Record<Theme, string> = {
  [Theme.Light]: 'text-[#889397]',
  [Theme.Dark]: 'text-[#5C6C75]',
};

/**
 *
 * @internal
 */
function ButtonIcon({
  glyph,
  variant,
  size,
  darkMode,
  disabled,
  isIconOnlyButton,
  className,
}: Required<
  Pick<ButtonProps, 'variant' | 'size' | 'darkMode' | 'disabled' | 'className'>
> & {
  isIconOnlyButton: boolean;
  glyph: React.ReactElement;
}) {
  const accessibleIconProps = !isIconOnlyButton && {
    'aria-hidden': true,
    role: 'presentation',
  };

  const theme = getTheme(darkMode);
  const iconColorMap = isIconOnlyButton ? onlyIconColorClass : baseIconColorClass;

  return React.cloneElement(glyph, {
    className: cn(
      iconColorMap[theme][variant],
      iconSizeClass[size],
      disabled ? disabledIconClass[theme] : undefined,
      disabled && isIconOnlyButton && darkMode
        ? 'text-[#5C6C75]'
        : undefined,
      className,
    ),
    ...accessibleIconProps,
  });
}

ButtonIcon.displayName = 'ButtonIcon';

export default ButtonIcon;
