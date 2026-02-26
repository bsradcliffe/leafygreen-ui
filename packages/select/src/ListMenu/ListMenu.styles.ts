import React from 'react';

import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';
import { boxShadows, color, Size, spacing } from '@leafygreen-ui/tokens';

import { sizeSets } from '../styleSets';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

export const popoverClassName = createUniqueClassName('select-popover');

export const maxMenuHeight = 274;
export const menuMargin = spacing[2];

export const baseMenuStyle =
  'relative text-left w-full rounded-[3px] leading-[16px] list-none m-0 p-0 overflow-auto';

export const autoWidthStyles = 'w-max';

export const getMenuStyles = (theme: Theme, size: Size) => {
  const sizeSet = sizeSets[size];

  return {
    className: cn('rounded-[12px] border border-solid py-[8px] px-0'),
    style: {
      minHeight: `${sizeSet.height}px`,
      boxShadow: boxShadows[theme][1],
      backgroundColor: color[theme].background.primary.default,
      borderColor: color[theme].border.secondary.default,
    } as React.CSSProperties,
  };
};
