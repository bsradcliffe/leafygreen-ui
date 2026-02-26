import React from 'react';

import { useIdAllocator } from '@leafygreen-ui/hooks';
import XIcon from '@leafygreen-ui/icon/dist/X';
import { IconButton } from '@leafygreen-ui/icon-button';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';

import { CloseIconColor } from '../shared.types';

import { getButtonStyles } from './CloseButton.styles';
import { CloseButtonProps } from './CloseButton.types';

export const CloseButton = ({
  className,
  closeIconColor = CloseIconColor.Default,
  ...rest
}: CloseButtonProps) => {
  const { theme } = useDarkMode();
  const closeId = useIdAllocator({ prefix: 'modal-close_button' });

  const { className: buttonClassName, style: buttonStyle } = getButtonStyles({
    className,
    customColor: closeIconColor,
    theme,
  });

  return (
    <IconButton
      aria-label="Close modal"
      {...rest}
      className={buttonClassName}
      style={buttonStyle}
      id={closeId}
    >
      <XIcon />
    </IconButton>
  );
};

CloseButton.displayName = 'CloseButton';
