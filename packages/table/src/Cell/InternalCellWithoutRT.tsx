import React, { forwardRef } from 'react';

import { useTableContext } from '../TableContext';

import { getCellEllipsisStyles, getCellStyles } from './Cell.styles';
import InternalCellBase from './InternalCellBase';
import { InternalCellProps } from '.';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * @internal
 */
const InternalCellWithoutRT = forwardRef<
  HTMLTableCellElement,
  InternalCellProps
>(({ children, className, ...rest }: InternalCellProps, fwdRef) => {
  const { shouldTruncate = true } = useTableContext();

  return (
    <InternalCellBase
      ref={fwdRef}
      className={cn(getCellStyles(), className)}
      {...rest}
    >
      <div className={getCellEllipsisStyles(shouldTruncate)}>{children}</div>
    </InternalCellBase>
  );
});

InternalCellWithoutRT.displayName = 'InternalCellWithoutRT';

export default InternalCellWithoutRT;
