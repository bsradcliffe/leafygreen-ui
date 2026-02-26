import React from 'react';

import { spacing } from '@leafygreen-ui/tokens';

export const menuWrapperClassName = 'w-[244px]';

export const menuContentClassName = 'grid grid-flow-row items-center';

export const menuContentInlineStyle: React.CSSProperties = {
  gridTemplateAreas: "'header' 'calendar'",
};

export const menuHeaderClassName =
  'relative flex items-center justify-between w-full z-[1]';

export const menuHeaderInlineStyle: React.CSSProperties = {
  gridArea: 'header',
  paddingBottom: `${spacing[3]}px`,
};

export const menuHeaderSelectContainerClassName = 'flex items-center';

export const menuHeaderSelectContainerInlineStyle: React.CSSProperties = {
  gap: `${spacing[1]}px`,
};

export const menuCalendarGridClassName = 'm-auto';

export const menuCalendarGridInlineStyle: React.CSSProperties = {
  gridArea: 'calendar',
};

/**
 * The selectTruncateStyles targeted deeply nested divs inside a button.
 * This must be handled by overriding the Select component's internal overflow.
 */
export const selectTruncateInlineStyle: React.CSSProperties = {
  overflow: 'unset',
};

export const selectInputWidthClassName = 'w-[68px]';
