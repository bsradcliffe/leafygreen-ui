import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { color, InteractionState, Variant } from '@leafygreen-ui/tokens';

import { cn } from './cn';

/**
 * Off-palette value specific to primary button instances
 * @todo Consolidate usage of #00593F
 * @see https://jira.mongodb.org/browse/LG-5388
 *
 * @remarks This is a temporary duplicate to avoid importing the
 * `PRIMARY_BUTTON_INTERACTIVE_GREEN` constant from
 * `@leafygreen-ui/button/constants`. Consumers are blocked from upgrading
 * to the latest version of button package due to type issues from
 * `@leafygreen-ui/button@23.0.0` https://jira.mongodb.org/browse/LG-5462
 */
const PRIMARY_BUTTON_INTERACTIVE_GREEN = '#00593F';

const getBaseIconButtonStyles = ({ theme }: { theme: Theme }) => {
  const darkMode = theme === Theme.Dark;
  return [
    `bg-[${palette.green.dark2}]`,
    `border`,
    `border-[${palette.green[darkMode ? 'base' : 'dark2']}]`,
    `text-[${palette.white}]`,

    `active:bg-[${PRIMARY_BUTTON_INTERACTIVE_GREEN}]`,
    `hover:bg-[${PRIMARY_BUTTON_INTERACTIVE_GREEN}]`,
    `active:text-[${palette.white}]`,
    `hover:text-[${palette.white}]`,
    `hover:shadow-[0_0_0_3px_${palette.green[darkMode ? 'dark3' : 'light2']}]`,
    `active:shadow-[0_0_0_3px_${palette.green[darkMode ? 'dark3' : 'light2']}]`,

    `focus-visible:bg-[${PRIMARY_BUTTON_INTERACTIVE_GREEN}]`,
    `focus-visible:text-[${palette.white}]`,
  ].join(' ');
};

const getDisabledIconButtonStyles = (theme: Theme) =>
  [
    `bg-[${color[theme].background[Variant.Disabled][InteractionState.Default]}]`,
    `text-[${color[theme].icon[Variant.Disabled][InteractionState.Default]}]`,
    `border-[${color[theme].border[Variant.Disabled][InteractionState.Default]}]`,

    `active:bg-[${color[theme].background[Variant.Disabled][InteractionState.Default]}]`,
    `hover:bg-[${color[theme].background[Variant.Disabled][InteractionState.Default]}]`,
    `active:text-[${color[theme].icon[Variant.Disabled][InteractionState.Default]}]`,
    `hover:text-[${color[theme].icon[Variant.Disabled][InteractionState.Default]}]`,
    'hover:shadow-none',
    'active:shadow-none',

    `focus-visible:bg-[${color[theme].background[Variant.Disabled][InteractionState.Default]}]`,
    `focus-visible:text-[${color[theme].icon[Variant.Disabled][InteractionState.Default]}]`,
  ].join(' ');

export const getIconButtonStyles = ({
  disabled,
  theme,
}: {
  disabled: boolean;
  theme: Theme;
}) =>
  cn(getBaseIconButtonStyles({ theme }), {
    [getDisabledIconButtonStyles(theme)]: disabled,
  });
