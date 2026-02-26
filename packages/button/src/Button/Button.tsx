import React from 'react';

import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import {
  InferredPolymorphic,
  useInferredPolymorphic,
} from '@leafygreen-ui/polymorphic';
import { BaseFontSize } from '@leafygreen-ui/tokens';

import { ButtonContent } from '../ButtonContent/ButtonContent';
import { ButtonClassName } from '../styles';
import { getLgIds } from '../testing';
import { BaseButtonProps, Size, Variant } from '../types';

import { buttonStyles } from './Button.styles';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Buttons allow users to take actions, and make choices, with a single tap. Buttons are a type of call to action (CTA) the user can click or press.
 */
export const Button = InferredPolymorphic<BaseButtonProps, 'button'>(
  (
    {
      variant = Variant.Default,
      size = Size.Default,
      darkMode: darkModeProp,
      'data-lgid': dataLgId,
      baseFontSize = BaseFontSize.Body1,
      disabled = false,
      onClick,
      leftGlyph,
      rightGlyph,
      children,
      className,
      as,
      type,
      isLoading = false,
      loadingIndicator,
      loadingText,
      ...restProps
    },
    forwardRef,
  ) => {
    const { Component, rest } = useInferredPolymorphic(as, restProps, 'button');
    const { darkMode } = useDarkMode(darkModeProp);

    const isAnchor = Component === 'a';
    const isInteractive = !(disabled || isLoading);
    const lgIds = getLgIds(dataLgId);

    const tvClassName = buttonStyles({
      variant,
      size,
      isDarkMode: darkMode,
      isDisabled: !isInteractive,
      baseFontSize,
    });

    const buttonProps = {
      'data-lgid': lgIds.root,
      type: isAnchor ? undefined : type || 'button',
      className: cn(ButtonClassName, tvClassName, className),
      ref: forwardRef,
      'aria-disabled': !isInteractive,
      onClick: isInteractive
        ? onClick
        : (e: React.MouseEvent) => e.preventDefault(),
      ...rest,
      href: isInteractive ? rest.href : undefined,
    } as const;

    const contentProps = {
      rightGlyph,
      leftGlyph,
      darkMode,
      disabled,
      variant,
      size,
      isLoading,
      loadingIndicator,
      loadingText,
    } as const;

    return (
      <Component {...buttonProps}>
        <ButtonContent {...contentProps}>{children}</ButtonContent>
      </Component>
    );
  },
);

Button.displayName = 'Button';
