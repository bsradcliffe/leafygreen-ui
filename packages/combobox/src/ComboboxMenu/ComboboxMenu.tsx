import React, { useContext, useMemo } from 'react';
import isUndefined from 'lodash/isUndefined';

import { useAvailableSpace, useForwardedRef } from '@leafygreen-ui/hooks';
import { Icon } from '@leafygreen-ui/icon';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { palette } from '@leafygreen-ui/palette';
import { Popover } from '@leafygreen-ui/popover';
import { Error } from '@leafygreen-ui/typography';

import { ComboboxProps } from '../Combobox';
import { ComboboxContext } from '../ComboboxContext';
import { DropdownWidthBasis } from '../types';

import {
  autoWidthStyle,
  getMenuThemeStyle,
  loadingIconClassName,
  menuBaseClassName,
  menuBaseStyle,
  menuListClassName,
  menuMessageBaseClassName,
  menuMessageBaseStyle,
  menuMessageSizeStyle,
  menuMessageThemeStyle,
  menuStyleTag,
  popoverClassName,
  popoverStyle,
  popoverThemeStyle,
} from './Menu.styles';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

type ComboboxMenuProps = {
  children?: React.ReactNode;
  refEl: React.RefObject<HTMLDivElement>;
  id: string;
  labelId: string;
  menuWidth: number;
  dropdownWidthBasis?: DropdownWidthBasis;
} & Pick<
  ComboboxProps<any>,
  'searchLoadingMessage' | 'searchErrorMessage' | 'searchEmptyMessage'
>;

export const ComboboxMenu = React.forwardRef<HTMLDivElement, ComboboxMenuProps>(
  (
    {
      children,
      id,
      refEl,
      labelId,
      menuWidth,
      searchLoadingMessage,
      searchErrorMessage,
      searchEmptyMessage,
      dropdownWidthBasis = DropdownWidthBasis.Trigger,
    }: ComboboxMenuProps,
    forwardedRef,
  ) => {
    const { darkMode, theme } = useDarkMode();
    const { disabled, size, isOpen, searchState } = useContext(ComboboxContext);
    const ref = useForwardedRef(forwardedRef, null);

    /** The max height of the menu element */
    const availableSpace = useAvailableSpace(refEl);
    const maxHeightValue = !isUndefined(availableSpace)
      ? `${Math.min(availableSpace, 256)}px`
      : 'unset';

    /**
     * The rendered menu JSX contents
     * Includes error, empty, search and default states
     */
    const renderedMenuContents = useMemo((): JSX.Element => {
      const messageStyle: React.CSSProperties = {
        ...menuMessageBaseStyle,
        ...menuMessageThemeStyle[theme],
        ...menuMessageSizeStyle(size),
      };

      const errorMessageStyle: React.CSSProperties = {
        ...menuMessageBaseStyle,
        ...menuMessageSizeStyle(size),
      };

      switch (searchState) {
        case 'loading': {
          return (
            <span
              className={cn(menuMessageBaseClassName)}
              style={messageStyle}
            >
              <style>{menuStyleTag}</style>
              <Icon
                glyph="Refresh"
                color={darkMode ? palette.blue.light1 : palette.blue.base}
                className={loadingIconClassName}
              />
              {searchLoadingMessage}
            </span>
          );
        }

        case 'error': {
          return (
            <Error
              className={cn(menuMessageBaseClassName)}
              style={errorMessageStyle}
            >
              <Icon
                glyph="Warning"
                color={darkMode ? palette.red.light1 : palette.red.base}
              />
              <span>{searchErrorMessage}</span>
            </Error>
          );
        }

        case 'unset':
        default: {
          if (
            children &&
            typeof children === 'object' &&
            'length' in children &&
            (children as Array<React.ReactNode>).length > 0
          ) {
            return <ul className={menuListClassName}>{children}</ul>;
          }

          return (
            <span
              className={cn(menuMessageBaseClassName)}
              style={messageStyle}
            >
              {searchEmptyMessage}
            </span>
          );
        }
      }
    }, [
      theme,
      size,
      searchState,
      darkMode,
      searchLoadingMessage,
      searchErrorMessage,
      children,
      searchEmptyMessage,
    ]);

    return (
      <Popover
        active={isOpen && !disabled}
        spacing={4}
        align="bottom"
        justify="middle"
        refEl={refEl}
        adjustOnMutation={true}
        className={cn(popoverClassName)}
        style={{
          ...popoverStyle(menuWidth),
          ...popoverThemeStyle[theme],
          ...(dropdownWidthBasis === DropdownWidthBasis.Option
            ? autoWidthStyle
            : {}),
        }}
      >
        <div
          ref={ref}
          id={id}
          role="listbox"
          aria-labelledby={labelId}
          aria-expanded={isOpen}
          className={cn(menuBaseClassName)}
          style={{
            ...menuBaseStyle,
            ...getMenuThemeStyle(theme),
            maxHeight: maxHeightValue,
          }}
          onMouseDownCapture={e => e.preventDefault()}
        >
          {renderedMenuContents}
        </div>
      </Popover>
    );
  },
);

ComboboxMenu.displayName = 'ComboboxMenu';
