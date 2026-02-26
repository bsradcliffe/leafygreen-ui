import { Theme } from '@leafygreen-ui/lib';
import { color } from '@leafygreen-ui/tokens';

function cn(
  ...classes: Array<string | false | undefined | null>
): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * borderRadius[300] = 12px
 * spacing[300] = 12px
 *
 * color.light.background.primary.default = #FFFFFF
 * color.light.border.secondary.default = #E8EDEB
 * color.dark.background.primary.default = #001E2B
 * color.dark.border.secondary.default = #3D4F58
 *
 * boxShadows.light[1] = 0px 2px 4px 1px color-mix(in srgb, #001E2B 15%, transparent)
 * boxShadows.dark[1] = unset
 */

const searchResultsMenuStyles = 'rounded-[12px]';

export const getSearchResultsMenuStyles = ({
  theme,
  menuWidth,
}: {
  theme: Theme;
  menuWidth: number;
}) =>
  cn(
    searchResultsMenuStyles,
    `w-[${menuWidth}px]`,
    `min-w-[${menuWidth}px]`,
    `bg-[${color[theme].background.primary.default}]`,
    `border border-solid border-[${color[theme].border.secondary.default}]`,
    theme === Theme.Light &&
      'shadow-[0px_2px_4px_1px_color-mix(in_srgb,#001E2B_15%,transparent)]',
    theme === Theme.Dark && 'shadow-none',
  );

const searchResultsListStyles = [
  'py-[12px]',
  'px-0',
  'm-0',
  'rounded-[12px]',
  'overflow-y-auto',
  'scroll-smooth',
].join(' ');

export const getSearchResultsListStyles = ({
  maxHeightValue,
}: {
  maxHeightValue: string;
}) =>
  cn(
    searchResultsListStyles,
    `max-h-[${maxHeightValue}]`,
  );
