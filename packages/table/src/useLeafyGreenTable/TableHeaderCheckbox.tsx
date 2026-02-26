import React from 'react';
import { Table } from '@tanstack/react-table';

import { Checkbox } from '@leafygreen-ui/checkbox';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';

import { useRowContext } from '../Row/RowContext';
import { useTableContext } from '../TableContext';

import { disabledTableRowCheckStyles } from './useLeafyGreenTable.styles';
import { LGRowData, LGTableDataType } from '.';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

export const TableHeaderCheckbox = <T extends LGRowData>({
  table,
}: {
  table: Table<LGTableDataType<T>>;
}) => {
  const { theme } = useDarkMode();
  const { disabled: rowIsDisabled } = useRowContext();
  const { lgIds } = useTableContext();
  return (
    <Checkbox
      className={cn(
        rowIsDisabled && disabledTableRowCheckStyles[theme],
      )}
      disabled={rowIsDisabled}
      checked={table.getIsAllRowsSelected()}
      indeterminate={table.getIsSomeRowsSelected()}
      onChange={table.getToggleAllRowsSelectedHandler()}
      aria-label="Select all rows"
      data-lgid={lgIds.selectAllCheckbox}
      data-testid={lgIds.selectAllCheckbox}
    />
  );
};
