import React, { forwardRef, PropsWithChildren } from 'react';

import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';

import { useTableContext } from '../../TableContext';

import { getBaseStyles } from './HeaderRow.styles';
import { HeaderRowProps } from './HeaderRow.types';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

const HeaderRow = forwardRef<HTMLTableRowElement, HeaderRowProps>(
  (
    { children, className, ...rest }: PropsWithChildren<HeaderRowProps>,
    fwdRef,
  ) => {
    const { theme } = useDarkMode();
    const { lgIds } = useTableContext();

    return (
      <tr
        ref={fwdRef}
        className={cn(getBaseStyles(theme), className)}
        data-lgid={lgIds.headerRow}
        data-testid={lgIds.headerRow}
        {...rest}
      >
        {children}
      </tr>
    );
  },
);

HeaderRow.displayName = 'HeaderRow';

export default HeaderRow;
