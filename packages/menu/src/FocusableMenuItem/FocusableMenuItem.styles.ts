import { Theme } from '@leafygreen-ui/lib';
import { spacing } from '@leafygreen-ui/tokens';

import { menuColor } from '../styles';

export const getFocusableMenuItemWrapperStyles = (theme: Theme) =>
  `p-[${spacing[100]}px] cursor-default bg-[${menuColor[theme].background.default}]`;
