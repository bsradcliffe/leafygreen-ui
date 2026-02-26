import React, { useCallback, useContext } from 'react';
import isUndefined from 'lodash/isUndefined';

import { useAvailableSpace } from '@leafygreen-ui/hooks';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { Align, Justify, Popover } from '@leafygreen-ui/popover';

import { DropdownWidthBasis } from '../Select/Select.types';
import SelectContext from '../SelectContext';
import { mobileSizeSet } from '../styleSets';
import { MobileMediaQuery, useForwardedRef } from '../utils/utils';

import {
  autoWidthStyles,
  baseMenuStyle,
  getMenuStyles,
  maxMenuHeight,
  menuMargin,
  popoverClassName,
} from './ListMenu.styles';
import { ListMenuProps } from './ListMenu.types';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * @internal
 */
const ListMenu = React.forwardRef<HTMLUListElement, ListMenuProps>(
  function ListMenu(
    {
      children,
      id,
      referenceElement,
      className,
      labelId,
      dropdownWidthBasis,
      style: externalStyle,
      ...rest
    }: ListMenuProps,
    forwardedRef,
  ) {
    const { theme } = useDarkMode();
    const { size, disabled, open, lgIds } = useContext(SelectContext);

    const ref = useForwardedRef(forwardedRef, null);

    const availableSpace = useAvailableSpace(referenceElement, menuMargin);
    const maxHeightValue = !isUndefined(availableSpace)
      ? `${Math.min(availableSpace, maxMenuHeight)}px`
      : 'unset';

    const onClick = useCallback(
      (event: React.MouseEvent) => {
        if (ref.current) {
          ref.current.focus();
        }
        event.stopPropagation();
      },
      [ref],
    );

    const menuStyles = getMenuStyles(theme, size);

    /**
     * Mobile media query CSS for the list menu font size.
     * Cannot be expressed with inline styles, so injected via <style>.
     */
    const mobileCSS = `
      ${MobileMediaQuery} {
        .lg-select-list-menu-mobile {
          font-size: ${mobileSizeSet.option.text}px;
        }
      }
    `;

    return (
      <Popover
        active={open && !disabled}
        spacing={6}
        align={Align.Bottom}
        justify={Justify.Start}
        adjustOnMutation
        className={cn(
          popoverClassName,
          className,
          dropdownWidthBasis === DropdownWidthBasis.Option && autoWidthStyles,
        )}
        refEl={referenceElement}
      >
        <style>{mobileCSS}</style>
        {/* Keyboard events handled in Select component through event listener hook */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <ul
          data-lgid={lgIds.popover}
          data-testid={lgIds.popover}
          aria-labelledby={labelId}
          role="listbox"
          ref={ref}
          tabIndex={-1}
          onClick={onClick}
          className={cn(
            baseMenuStyle,
            menuStyles.className,
            'lg-select-list-menu-mobile',
          )}
          style={{
            ...menuStyles.style,
            maxHeight: maxHeightValue,
            ...externalStyle,
          }}
          id={id}
        >
          {children}
        </ul>
      </Popover>
    );
  },
);

ListMenu.displayName = 'ListMenu';

export default ListMenu;
