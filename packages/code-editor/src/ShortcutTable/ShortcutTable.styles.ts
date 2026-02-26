import { spacing } from '@leafygreen-ui/tokens';

const TABLE_WIDTH = '282px';
const ROW_PADDING = spacing[300];
const CONTAINER_MARGIN_TOP = spacing[1000] - ROW_PADDING; // Account for the padding on the first row

export const TableContainerStyles = [
  'flex',
  'flex-col',
  'items-center',
  'justify-center',
  `mt-[${CONTAINER_MARGIN_TOP}px]`,
].join(' ');

export const TableStyles = [
  `w-[${TABLE_WIDTH}]`,
  '[border-spacing:0]',
  `[&_tr+tr_td]:pt-[${ROW_PADDING}px]`,
  '[&_td]:align-top',
  '[&_td:first-child]:w-[60%]',
  '[&_td:last-child]:w-[40%]',
  '[&_td:last-child]:text-right',
].join(' ');

export const PlusSignStyles = `inline-block mx-[${spacing[100]}px] my-0`;
