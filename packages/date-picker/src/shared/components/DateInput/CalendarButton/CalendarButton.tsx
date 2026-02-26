import React, { forwardRef } from 'react';

import { Icon } from '@leafygreen-ui/icon';
import { BaseIconButtonProps, IconButton } from '@leafygreen-ui/icon-button';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * The icon button on the right of the DatePicker form field
 */
export const CalendarButton = forwardRef<
  HTMLButtonElement,
  BaseIconButtonProps
>(({ className, ...rest }: BaseIconButtonProps, fwdRef) => {
  return (
    <IconButton
      ref={fwdRef}
      aria-label="Open calendar menu"
      type="button"
      className={cn(className)}
      data-testid="lg-date_picker-input-calendar_button"
      {...rest}
    >
      <Icon glyph="Calendar" />
    </IconButton>
  );
});

CalendarButton.displayName = 'CalendarButton';
