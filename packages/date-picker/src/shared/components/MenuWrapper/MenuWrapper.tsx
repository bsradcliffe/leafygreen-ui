import React, { forwardRef } from 'react';

import {
  PopoverProvider,
  useDarkMode,
} from '@leafygreen-ui/leafygreen-provider';
import {
  DismissMode,
  Popover,
  PopoverProps,
  RenderMode,
} from '@leafygreen-ui/popover';

import { menuInlineStyles } from './MenuWrapper.styles';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

export type MenuWrapperProps = Omit<
  PopoverProps,
  | 'dismissMode'
  | 'onToggle'
  | 'popoverZIndex'
  | 'portalClassName'
  | 'portalContainer'
  | 'portalRef'
  | 'renderMode'
  | 'scrollContainer'
> &
  React.ComponentPropsWithoutRef<'div'>;

/**
 * A simple styled popover component
 */
export const MenuWrapper = forwardRef<HTMLDivElement, MenuWrapperProps>(
  ({ className, children, style, ...props }: MenuWrapperProps, fwdRef) => {
    const { theme } = useDarkMode();

    return (
      <Popover
        ref={fwdRef}
        className={cn(className)}
        style={{ ...menuInlineStyles[theme], ...style }}
        {...props}
        dismissMode={DismissMode.Manual}
        renderMode={RenderMode.TopLayer}
      >
        {/*
         * Prevents the opening and closing state of a select dropdown from propagating up
         * to other PopoverProviders in parent components. E.g. Modal
         */}
        <PopoverProvider>{children}</PopoverProvider>
      </Popover>
    );
  },
);

MenuWrapper.displayName = 'MenuWrapper';
