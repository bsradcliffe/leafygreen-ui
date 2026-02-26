import { Theme } from '@leafygreen-ui/lib';
import { color, fontWeights, spacing } from '@leafygreen-ui/tokens';

export const navStyles = '';

export const getOrderedListStyles = ({
  theme = Theme.Light,
}: {
  theme: Theme;
}) =>
  [
    'p-0',
    'm-0',
    'border-l',
    'border-solid',
    `border-[${color[theme].border.secondary.default}]`,
  ].join(' ');

export const getTitleStyles = ({
  theme = Theme.Light,
}: {
  theme: Theme;
}) =>
  [
    `text-[${color[theme].text.secondary.default}]`,
    `font-[${fontWeights.semiBold}]`,
    `mb-[${spacing[200]}px]`,
  ].join(' ');
