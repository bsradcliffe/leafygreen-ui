import React from 'react';

import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';

import { codeTypeScaleStyles } from '../styles';
import { cn } from '../utils/cn';
import { useUpdatedBaseFontSize } from '../utils/useUpdatedBaseFontSize';

import {
  inlineKeyCodeColor,
  inlineKeyCodeStyles,
} from './InlineKeyCode.styles';
import { InlineKeyCodeProps } from './InlineKeyCode.types';

function InlineKeyCode({
  baseFontSize: baseFontSizeOverride,
  darkMode: darkModeProp,
  children,
  className,
  ...rest
}: InlineKeyCodeProps) {
  const baseFontSize = useUpdatedBaseFontSize(baseFontSizeOverride);
  const { theme } = useDarkMode(darkModeProp);

  return (
    <code
      className={cn(
        inlineKeyCodeStyles,
        inlineKeyCodeColor[theme],
        codeTypeScaleStyles[baseFontSize],
        className,
      )}
      {...rest}
    >
      {children}
    </code>
  );
}

InlineKeyCode.displayName = 'InlineKeyCode';

export default InlineKeyCode;
