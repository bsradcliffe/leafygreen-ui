import React from 'react';

import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import {
  Polymorphic,
  PolymorphicAs,
  usePolymorphic,
} from '@leafygreen-ui/polymorphic';

import { cn } from '../utils/cn';
import { getLgIds } from '../utils';
import { useUpdatedBaseFontSize } from '../utils/useUpdatedBaseFontSize';

import {
  disabledLabelColorStyles,
  labelStyles,
  labelTypeScaleStyles,
} from './Label.styles';
import { BaseLabelProps } from './Label.types';

export const Label = Polymorphic<BaseLabelProps>(
  ({
    baseFontSize: baseFontSizeOverride,
    darkMode: darkModeProp,
    className,
    children,
    disabled = false,
    as = 'label' as PolymorphicAs,
    'data-lgid': dataLgId,
    ...rest
  }) => {
    const { theme } = useDarkMode(darkModeProp);
    const baseFontSize = useUpdatedBaseFontSize(baseFontSizeOverride);
    const { Component } = usePolymorphic(as);

    return (
      <Component
        data-lgid={getLgIds(dataLgId).label}
        data-testid={getLgIds(dataLgId).label}
        className={cn(
          labelStyles[theme],
          labelTypeScaleStyles[baseFontSize],
          disabled && disabledLabelColorStyles[theme],
          className,
        )}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);

Label.displayName = 'Label';

export default Label;
