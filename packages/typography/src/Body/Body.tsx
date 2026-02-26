import React from 'react';

import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import {
  Polymorphic,
  PolymorphicAs,
  usePolymorphic,
} from '@leafygreen-ui/polymorphic';
import { FontWeight } from '@leafygreen-ui/tokens';

import {
  baseTypographyStyles,
  bodyTypeScaleStyles,
  defaultTextColor,
} from '../styles';
import { cn } from '../utils/cn';
import { useUpdatedBaseFontSize } from '../utils/useUpdatedBaseFontSize';

import { BaseBodyProps } from './Body.types';

const fontWeightStyles: Record<string, string> = {
  regular:
    'font-normal [&_strong]:font-semibold [&_b]:font-semibold',
  medium:
    'font-medium [&_strong]:font-semibold [&_b]:font-semibold',
  semiBold:
    'font-semibold [&_strong]:font-semibold [&_b]:font-semibold',
  bold:
    'font-bold [&_strong]:font-semibold [&_b]:font-semibold',
};

const Body = Polymorphic<BaseBodyProps>(
  ({
    baseFontSize: baseFontSizeOverride,
    darkMode: darkModeProp,
    className,
    weight = FontWeight.Regular,
    as = 'p' as PolymorphicAs,
    ...rest
  }) => {
    const { theme } = useDarkMode(darkModeProp);
    const baseFontSize = useUpdatedBaseFontSize(baseFontSizeOverride);
    const { Component } = usePolymorphic(as);

    return (
      <Component
        className={cn(
          baseTypographyStyles,
          bodyTypeScaleStyles[baseFontSize],
          defaultTextColor[theme],
          fontWeightStyles[weight],
          className,
        )}
        {...rest}
      />
    );
  },
);

Body.displayName = 'Body';

export default Body;
