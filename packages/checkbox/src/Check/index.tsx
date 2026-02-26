import React, { useMemo, useRef } from 'react';
import { Transition } from 'react-transition-group';

import { usePrefersReducedMotion } from '@leafygreen-ui/a11y';
import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';

import { CheckProps } from '../Checkbox/Checkbox.types';
import { checkAnimationDuration } from '../constants';

import {
  checkIconClassName,
  checkIconTransitionStyles,
  disableAnimationStyle,
  rippleBaseClassName,
  rippleCheckedInlineStyle,
  rippleClassName,
  rippleThemeStyles,
  wrapperBaseClassName,
  wrapperBaseInlineStyle,
  wrapperBeforeBaseCSS,
  wrapperBeforeThemeCSS,
  wrapperCheckedBaseInlineStyle,
  wrapperCheckedBeforeCSS,
  wrapperCheckedDisabledBeforeCSS,
  wrapperCheckedDisabledStyle,
  wrapperCheckedThemeStyle,
  wrapperDisabledBeforeCSS,
  wrapperDisabledStyle,
  wrapperThemeStyle,
} from './Check.style';
import SvgCheck from './SvgCheck';
import SvgIndeterminate from './SvgIndeterminate';

function cn(
  ...classes: Array<string | false | undefined | null>
): string {
  return classes.filter(Boolean).join(' ');
}

const checkIconColor: Record<Theme, Record<'default' | 'disabled', string>> = {
  [Theme.Light]: {
    default: palette.white,
    disabled: palette.gray.light3,
  },
  [Theme.Dark]: {
    default: palette.black,
    disabled: palette.gray.dark1,
  },
};

/**
 * @internal
 * @returns JSX.Element
 */
export function Check({
  theme,
  isChecked,
  indeterminate,
  disabled,
  animate,
  selector,
}: CheckProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const CheckSVG = indeterminate ? SvgIndeterminate : SvgCheck;
  const showCheckIcon = indeterminate || isChecked;
  const shouldAnimate = animate && !indeterminate && !prefersReducedMotion;

  const transitionRef = useRef<HTMLElement | null>(null);

  // Unique ID for scoping the <style> tag
  const styleId = useMemo(
    () => `check-${Math.random().toString(36).slice(2, 9)}`,
    [],
  );

  // Build the ::before pseudo-element CSS
  const beforeCSS = useMemo(() => {
    let css = wrapperBeforeBaseCSS;
    css += wrapperBeforeThemeCSS[theme];

    if (showCheckIcon) {
      css += wrapperCheckedBeforeCSS;
    }

    if (disabled) {
      css += wrapperDisabledBeforeCSS[theme];
    }

    if (disabled && showCheckIcon) {
      css += wrapperCheckedDisabledBeforeCSS[theme];
    }

    if (!shouldAnimate) {
      css += `
        transition: unset;
        transition-delay: 0ms;
        transition-duration: 0ms;
      `;
    }

    return css;
  }, [theme, showCheckIcon, disabled, shouldAnimate]);

  // Build wrapper inline styles
  const wrapperInlineStyle: React.CSSProperties = useMemo(() => {
    const style: React.CSSProperties = { ...wrapperBaseInlineStyle };

    if (showCheckIcon) {
      Object.assign(style, wrapperCheckedBaseInlineStyle);
    }

    if (!shouldAnimate) {
      Object.assign(style, disableAnimationStyle);
    }

    return style;
  }, [showCheckIcon, shouldAnimate]);

  // Build ripple inline styles
  const rippleInlineStyle: React.CSSProperties = useMemo(() => {
    const style: React.CSSProperties = {};

    if (isChecked && shouldAnimate) {
      Object.assign(style, rippleCheckedInlineStyle);
    }

    if (!shouldAnimate) {
      Object.assign(style, disableAnimationStyle);
    }

    return style;
  }, [isChecked, shouldAnimate]);

  return (
    <>
      <style>{`[data-check-id="${styleId}"]::before { ${beforeCSS} }`}</style>
      <div
        data-check-id={styleId}
        className={cn(
          selector,
          wrapperBaseClassName,
          wrapperThemeStyle[theme],
          showCheckIcon && wrapperCheckedThemeStyle[theme],
          disabled && wrapperDisabledStyle[theme],
          disabled && showCheckIcon && wrapperCheckedDisabledStyle[theme],
        )}
        style={wrapperInlineStyle}
      >
        <Transition
          in={showCheckIcon}
          timeout={prefersReducedMotion ? 0 : checkAnimationDuration}
          enter={shouldAnimate}
          exit={shouldAnimate}
          nodeRef={transitionRef}
        >
          {state => (
            <CheckSVG
              stroke={
                disabled
                  ? checkIconColor[theme].disabled
                  : checkIconColor[theme].default
              }
              className={cn(
                checkIconClassName,
                checkIconTransitionStyles[state],
              )}
              style={!shouldAnimate ? disableAnimationStyle : undefined}
            />
          )}
        </Transition>
      </div>
      <div
        className={cn(
          rippleClassName,
          rippleBaseClassName,
          rippleThemeStyles[theme],
        )}
        style={rippleInlineStyle}
      />
    </>
  );
}
