import React, { useEffect, useRef } from 'react';

import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { registerRipple } from '@leafygreen-ui/ripple';

import {
  buttonContentClassName,
  buttonContentSizeClassName,
  buttonSpinnerSize,
  centeredSpinnerClassName,
  centeredSpinnerContainerClassName,
  hiddenContentClassName,
  rippleClassName,
  rippleColors,
  spinnerColor,
} from './ButtonContent.styles';
import { ButtonContentProps } from './ButtonContent.types';
import DefaultContent from './DefaultContent';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Internal contents of a Button
 * @internal
 */
export const ButtonContent = (props: ButtonContentProps) => {
  const {
    darkMode: darkModeProp,
    disabled,
    variant,
    size,
    isLoading,
    loadingText,
    loadingIndicator,
    className,
  } = props;

  const { darkMode, theme } = useDarkMode(darkModeProp);
  const rippleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let unregisterRipple: (() => void) | undefined;
    const backgroundColor = rippleColors[theme][variant];

    if (rippleRef.current != null && !disabled) {
      unregisterRipple = registerRipple(rippleRef.current, {
        backgroundColor,
      });
    }

    return unregisterRipple;
  }, [rippleRef, variant, darkMode, disabled, theme]);

  const spinner =
    loadingIndicator &&
    React.cloneElement(loadingIndicator, {
      ...loadingIndicator.props,
      className: cn(
        !loadingText ? centeredSpinnerClassName : undefined,
        loadingIndicator.props?.className,
      ),
      sizeOverride: buttonSpinnerSize[size],
      colorOverride: spinnerColor[theme],
      ['data-testid']: 'lg-button-spinner',
    });

  if (isLoading) {
    return (
      <>
        <div
          className={cn(
            buttonContentClassName,
            buttonContentSizeClassName[size],
            !loadingText ? centeredSpinnerContainerClassName : undefined,
          )}
        >
          {spinner}

          {loadingText}
        </div>
        {!loadingText && (
          <DefaultContent
            {...props}
            className={cn(hiddenContentClassName, className)}
          />
        )}
      </>
    );
  }

  return (
    <>
      {/* Ripple cannot wrap children, otherwise components that rely on children to render dropdowns will not be rendered due to the overflow:hidden rule. */}
      <div className={rippleClassName} ref={rippleRef} />
      <DefaultContent {...props} />
    </>
  );
};
