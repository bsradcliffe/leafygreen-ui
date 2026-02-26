import React, { useCallback, useContext, useMemo } from 'react';

import { Button, Size as ButtonSize, Variant } from '@leafygreen-ui/button';
import CaretDownIcon from '@leafygreen-ui/icon/dist/CaretDown';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { Theme } from '@leafygreen-ui/lib';

import { State } from '../Select/Select.types';
import SelectContext from '../SelectContext';
import { mobileSizeSet } from '../styleSets';
import { MobileMediaQuery, useForwardedRef } from '../utils/utils';

import {
  getMenuButtonClassNames,
  getMenuButtonCSS,
  menuButtonTextClassName,
  menuButtonTextStyle,
  menuButtonTextWrapperStyle,
} from './MenuButton.styles';
import { MenuButtonProps } from './MenuButton.types';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * @internal
 */
const MenuButton = React.forwardRef<HTMLButtonElement, MenuButtonProps>(
  function MenuButton(
    {
      children,
      value,
      text,
      name,
      deselected,
      onClose,
      onOpen,
      state,
      baseFontSize,
      __INTERNAL__menuButtonSlot__,
      __INTERNAL__menuButtonSlotProps__,
      ...rest
    }: MenuButtonProps,
    forwardedRef,
  ) {
    const { theme } = useDarkMode();
    const { open, size, disabled, lgIds } = useContext(SelectContext);

    const ref = useForwardedRef(forwardedRef, null);

    const onClick = useCallback(() => {
      if (open) {
        onClose();
      } else {
        onOpen();
      }
      ref.current!.focus();
    }, [onClose, onOpen, open, ref]);

    const Component = __INTERNAL__menuButtonSlot__
      ? __INTERNAL__menuButtonSlot__
      : Button;

    /**
     * Build the injected CSS and className for the button.
     * Memoize to avoid re-generating on every render.
     */
    const injectedCSS = useMemo(
      () => (__INTERNAL__menuButtonSlot__ ? '' : getMenuButtonCSS(theme, size)),
      [__INTERNAL__menuButtonSlot__, theme, size],
    );

    /**
     * Mobile media query CSS for the button.
     */
    const mobileCSS = useMemo(
      () =>
        __INTERNAL__menuButtonSlot__
          ? ''
          : `
        ${MobileMediaQuery} {
          .lg-select-mb {
            height: ${mobileSizeSet.height}px;
            font-size: ${mobileSizeSet.text}px;
          }
        }
      `,
      [__INTERNAL__menuButtonSlot__],
    );

    const buttonClassName = __INTERNAL__menuButtonSlot__
      ? ''
      : getMenuButtonClassNames({
          state: state || State.None,
          deselected: !!deselected,
          disabled: !!disabled,
          isXSmall: size === ButtonSize.XSmall,
        });

    const testId =
      (rest as any)['data-testid'] ?? 'leafygreen-ui-select-menubutton';

    /** Inline style for baseFontSize override when size is Default */
    const baseFontSizeStyle: React.CSSProperties | undefined =
      size === ButtonSize.Default && baseFontSize
        ? { fontSize: `${baseFontSize}px` }
        : undefined;

    return (
      <>
        {/* Inject structural + theme CSS for the button */}
        {injectedCSS && <style>{injectedCSS}</style>}
        {mobileCSS && <style>{mobileCSS}</style>}
        <Component
          {...rest}
          {...__INTERNAL__menuButtonSlotProps__}
          ref={ref}
          name={name}
          value={value}
          disabled={disabled}
          onClick={onClick}
          variant={Variant.Default}
          darkMode={theme === Theme.Dark}
          rightGlyph={<CaretDownIcon />}
          size={size}
          data-testid={testId}
          data-lgid={lgIds.trigger}
          className={cn(
            buttonClassName,
            __INTERNAL__menuButtonSlotProps__?.className,
          )}
          style={baseFontSizeStyle}
        >
          <div className={menuButtonTextWrapperStyle}>
            <div
              data-lgid={lgIds.buttonText}
              data-testid={lgIds.buttonText}
              className={cn(menuButtonTextClassName, menuButtonTextStyle)}
            >
              {text}
            </div>
          </div>
          {children}
        </Component>
      </>
    );
  },
);

MenuButton.displayName = 'MenuButton';

export default MenuButton;
