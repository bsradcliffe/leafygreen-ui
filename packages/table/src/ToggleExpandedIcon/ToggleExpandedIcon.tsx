import React from 'react';

import { Icon } from '@leafygreen-ui/icon';
import { IconButton } from '@leafygreen-ui/icon-button';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';

import { useTableContext } from '../TableContext';

import {
  iconButtonTransitionStyles,
  iconFills,
  rotatedStyles,
} from './ToggleExpandedIcon.styles';
import { type ToggleExpandedIconProps } from './ToggleExpandedIcon.types';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * @internal
 */
const ToggleExpandedIcon = ({
  isExpanded,
  toggleExpanded,
  disabled,
  ...rest
}: ToggleExpandedIconProps) => {
  const { theme } = useDarkMode();
  const { lgIds } = useTableContext();

  return (
    <IconButton
      aria-label={`${isExpanded ? 'Collapse' : 'Expand'} row`}
      disabled={disabled}
      onClick={toggleExpanded}
      className={cn(
        isExpanded && rotatedStyles,
        iconButtonTransitionStyles,
      )}
      data-lgid={lgIds.expandButton}
      data-testid={lgIds.expandButton}
      {...rest}
    >
      <Icon
        glyph="ChevronRight"
        role="presentation"
        fill={iconFills(theme, !!disabled)}
      />
    </IconButton>
  );
};

export default ToggleExpandedIcon;
