import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { BaseFontSize } from '@leafygreen-ui/tokens';
import { bodyTypeScaleStyles } from '@leafygreen-ui/typography';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

export const tableClassName = createUniqueClassName('lg-table');

export const baseStyles = [
  '[border-spacing:0]',
  'border-collapse',
  'w-full',
].join(' ');

export const themeStyles: Record<Theme, string> = {
  [Theme.Dark]: `text-[${palette.gray.light2}]`,
  [Theme.Light]: `text-[${palette.gray.dark3}]`,
};

export const getTableContainerStyles = (isVirtual = false) =>
  cn(
    'w-full relative',
    isVirtual && 'overflow-auto',
  );

export const getTableStyles = (
  theme: Theme,
  baseFontSize: BaseFontSize,
  isVirtual = false,
  shouldTruncate = false,
) =>
  cn(
    baseStyles,
    themeStyles[theme],
    bodyTypeScaleStyles[baseFontSize],
    //TODO: add to documentation
    // If this is a virtual table that does not truncate the table needs to have a fixed layout.
    // Without a fixed layout, column widths may change during scrolling, which can cause row heights to shift. This can lead to an infinite loop, ultimately crashing the application.
    // A fixed layout prevents this because it prevents columns widths from changing.
    isVirtual && !shouldTruncate && '[table-layout:fixed]',
  );
