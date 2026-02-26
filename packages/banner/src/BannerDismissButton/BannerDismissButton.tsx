import React from 'react';

import XIcon from '@leafygreen-ui/icon/dist/X';
import { IconButton } from '@leafygreen-ui/icon-button';

import { cn } from '../cn';

import { baseStyles, variantStyles } from './BannerDismissButton.styles';
import { BannerDismissButtonProps } from './BannerDismissButton.types';

/**
 * @internal
 */
const BannerDismissButton = ({
  onClose,
  darkMode,
  theme,
  variant,
}: BannerDismissButtonProps) => (
  <IconButton
    className={cn(baseStyles, variantStyles[theme][variant])}
    aria-label="Close Message"
    onClick={onClose}
    darkMode={darkMode}
  >
    <XIcon />
  </IconButton>
);

export default BannerDismissButton;
