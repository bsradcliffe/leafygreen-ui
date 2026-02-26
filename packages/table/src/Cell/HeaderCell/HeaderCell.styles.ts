import { spacing } from '@leafygreen-ui/tokens';

import {
  baseTableSidePadding,
  getBaseCellStyles,
  getCellContainerStyles,
} from '../Cell.styles';
import { Align } from '../Cell.types';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

const headerCellContentHeight = spacing[800] + spacing[200];

export const headerCellContentStyles = `h-[${headerCellContentHeight}px]`;

/**
 * Returns first-of-type padding classes for header cells.
 */
const getHeaderCellPaddingClasses = (isSelectable?: boolean) => {
  if (isSelectable) {
    return `[&:first-of-type]:pl-[${spacing[200]}px] [&:first-of-type]:pr-[${spacing[200]}px]`;
  }
  const pl = baseTableSidePadding + spacing[200];
  return `[&:first-of-type]:pl-[${pl}px]`;
};

export const getBaseHeaderCellStyles = (size: number, isSelectable?: boolean) =>
  cn(
    getBaseCellStyles(),
    getHeaderCellPaddingClasses(isSelectable),
    'leading-[16px]',
    size ? `w-[${size}px]` : '',
  );

export const getHeaderCellContentStyles = (align: Align) =>
  cn(getCellContainerStyles(align), headerCellContentStyles);
