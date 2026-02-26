import { Theme } from '@leafygreen-ui/lib';
import { color } from '@leafygreen-ui/tokens';

import { menuColor } from '../styles';

export const getMenuGroupItemStyles = (theme: Theme) =>
  `cursor-default bg-[${menuColor[theme].background.default}]`;

export const getMenuGroupTitleStyles = (theme: Theme) =>
  `text-[${color[theme].text.secondary.default}]`;

export const menuGroupULStyles = 'm-0 p-0';
