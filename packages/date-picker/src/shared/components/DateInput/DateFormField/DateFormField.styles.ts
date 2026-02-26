import React from 'react';

import { Size } from '@leafygreen-ui/tokens';

export const calendarButtonSize: Record<Size, number> = {
  [Size.XSmall]: 20,
  [Size.Small]: 22,
  [Size.Default]: 28,
  [Size.Large]: 28,
};

export const getCalendarButtonSizeStyle = (size: Size): React.CSSProperties => ({
  width: `${calendarButtonSize[size]}px`,
  height: `${calendarButtonSize[size]}px`,
});
