import React from 'react';

import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';

import { baseTypographyStyles } from '../styles';
import { cn } from '../utils/cn';

import { disclaimerStyles, disclaimerTextColor } from './Disclaimer.styles';
import { DisclaimerProps } from './Disclaimer.types';

export function Disclaimer({
  darkMode: darkModeProp,
  children,
  className,
  ...rest
}: DisclaimerProps) {
  const { theme } = useDarkMode(darkModeProp);

  return (
    <small
      {...rest}
      className={cn(
        baseTypographyStyles,
        disclaimerStyles,
        disclaimerTextColor[theme],
        className,
      )}
    >
      {children}
    </small>
  );
}

Disclaimer.displayName = 'Disclaimer';

export default Disclaimer;
