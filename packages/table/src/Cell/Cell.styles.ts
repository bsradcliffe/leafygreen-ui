import { spacing } from '@leafygreen-ui/tokens';

import { VerticalAlignment } from '../Table/Table.types';

import { Align } from './Cell.types';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

/** The base left & right padding in the table */
export const baseTableSidePadding = spacing[600];

/** the default width of the expand icon */
const iconSize = 28;

/** the default height of a cell */
export const standardCellHeight = spacing[5] + spacing[2];

/**
 * Computes first-child padding classes for a cell based on depth, expandability, and selectability.
 * Returns Tailwind `first:` prefixed classes.
 */
export const getCellPaddingClasses = ({
  depth = 0,
  isExpandable,
  isSelectable,
}: {
  depth?: number;
  isExpandable?: boolean;
  isSelectable?: boolean;
}) => {
  if (depth === 0) {
    if (isSelectable) {
      return `first:pl-[${spacing[200]}px] first:pr-[${spacing[200]}px]`;
    } else {
      const pl = baseTableSidePadding + (isExpandable ? 0 : spacing[200]);
      return `first:pl-[${pl}px]`;
    }
  }

  const parentIconsPadding = 8 * (depth - 1); // how much space do parent icons take up
  const thisIconPadding = isExpandable ? spacing[200] : 0;
  const depthPadding =
    iconSize * depth - (parentIconsPadding + thisIconPadding);
  return `first:pl-[${baseTableSidePadding + depthPadding}px]`;
};

export const getCellStyles = (
  depth = 0,
  isExpandable = false,
  isSelectable = false,
) =>
  getCellPaddingClasses({
    depth,
    isExpandable,
    isSelectable,
  });

export const getCellContainerStyles = (align: Align = 'left') => {
  const alignStyles: Record<string, string> = {
    left: '[justify-content:left] text-left [&>div]:[justify-content:left]',
    center:
      '[justify-content:center] text-center [&>div]:[justify-content:center]',
    right: '[justify-content:right] text-right [&>div]:[justify-content:right]',
  };

  return cn(
    'flex items-center',
    `min-h-[${standardCellHeight}px]`,
    alignStyles[align] || alignStyles.left,
  );
};

export const getBaseCellStyles = (
  verticalAlignment: VerticalAlignment = VerticalAlignment.Top,
) => {
  const alignMap: Record<string, string> = {
    [VerticalAlignment.Top]: 'align-top',
    [VerticalAlignment.Middle]: 'align-middle',
    [VerticalAlignment.Bottom]: 'align-bottom',
  };

  return cn(
    `px-[${spacing[200]}px] py-0`,
    alignMap[verticalAlignment] || 'align-top',
    'focus-visible:[box-shadow:inset]',
    `last:pr-[${baseTableSidePadding}px]`,
  );
};

export const cellInnerStyles = 'flex items-center min-w-full';

export const getCellEllipsisStyles = (shouldTruncate: boolean) =>
  shouldTruncate
    ? `flex-1 overflow-hidden whitespace-nowrap text-ellipsis [contain:inline-size] -m-[${spacing[100]}px] p-[${spacing[100]}px]`
    : '';
