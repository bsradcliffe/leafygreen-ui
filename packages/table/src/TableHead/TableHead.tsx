import React, { forwardRef, PropsWithChildren, useId } from 'react';

import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';

import { getBaseStyles, getStickyOverflowCss } from './TableHead.styles';
import { TableHeadProps } from './TableHead.types';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  (
    {
      children,
      isSticky,
      className,
      ...rest
    }: PropsWithChildren<TableHeadProps>,
    fwdRef,
  ) => {
    const { theme } = useDarkMode();
    const uniqueId = useId();
    const stickyClassName = `lg-table-head-${uniqueId.replace(/:/g, '')}`;

    return (
      <>
        {isSticky && (
          <style
            dangerouslySetInnerHTML={{
              __html: getStickyOverflowCss(stickyClassName, theme),
            }}
          />
        )}
        <thead
          ref={fwdRef}
          className={cn(
            getBaseStyles(isSticky, theme),
            isSticky && stickyClassName,
            className,
          )}
          {...rest}
        >
          {children}
        </thead>
      </>
    );
  },
);

TableHead.displayName = 'TableHead';

export default TableHead;
