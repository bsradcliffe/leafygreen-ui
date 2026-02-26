import React, { forwardRef } from 'react';

import { useTableContext } from '../TableContext';

import {
  cellInnerStyles,
  getBaseCellStyles,
  getCellContainerStyles,
} from './Cell.styles';
import { InternalCellProps } from './Cell.types';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * @internal
 */
const InternalCellBase = forwardRef<HTMLTableCellElement, InternalCellProps>(
  (
    {
      children,
      className,
      contentClassName,
      align,
      ...rest
    }: InternalCellProps,
    fwdRref,
  ) => {
    const { verticalAlignment, lgIds } = useTableContext();
    return (
      <td
        data-lgid={lgIds.cell}
        data-testid={lgIds.cell}
        className={cn(getBaseCellStyles(verticalAlignment), className)}
        ref={fwdRref}
        {...rest}
      >
        <div className={cn(getCellContainerStyles(align), contentClassName)}>
          <div className={cellInnerStyles}>{children}</div>
        </div>
      </td>
    );
  },
);

InternalCellBase.displayName = 'InternalCellBase';

export default InternalCellBase;
