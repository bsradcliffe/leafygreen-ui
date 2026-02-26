import React from 'react';

export const containerStyles = 'contents';

/**
 * Returns inline styles for the menu container position.
 */
export const getMenuContainerInlineStyles = (position: {
  x: number;
  y: number;
}): React.CSSProperties => ({
  position: 'absolute',
  top: `${position.y}px`,
  left: `${position.x}px`,
});
