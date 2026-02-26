import { Theme } from '@leafygreen-ui/lib';

export const baseStyles = 'w-full table-fixed';

export const cellStyles = 'py-[10px] pr-[40px] pl-[8px]';

export const tableHeadStyles: Record<Theme, string> = {
  [Theme.Dark]: 'bg-[#001E2B] shadow-[0_3px_#3D4F58]',
  [Theme.Light]: 'bg-[#FFFFFF] shadow-[0_3px_#E8EDEB]',
};

// offsets box-shadow on thead
export const firstRowStyles = 'mt-[2px]';

export const headerCellStyles = 'text-left';

export const columnHeaderStyles = 'font-semibold';
