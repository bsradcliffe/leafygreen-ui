import React from 'react';

export const skeletonListWrapperStyles = 'w-full p-0 m-0';

export const skeletonListItemBaseStyles = 'list-none my-[12px]';

const getWidth = (index = 0, bulletsOnly?: boolean) => {
  if (bulletsOnly) {
    return '16px';
  }

  /**
   * The first item will take up 100% of the available width.
   * Subsequent items will take up 1/4 less space,
   * until the item is 50% the available width.
   * Then repeat
   *
   * ----------
   * -------
   * -----
   * ----------
   * -------
   * ... etc
   */
  const offset = 25 * (index % 3);
  return 100 - offset + '%';
};

/**
 * Returns inline style object with dynamic width for a list item.
 */
export const getSkeletonListItemWidth = (
  index = 0,
  bulletsOnly?: boolean,
): React.CSSProperties => ({
  width: getWidth(index, bulletsOnly),
});
