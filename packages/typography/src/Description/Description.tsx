import React from 'react';

import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { Polymorphic, usePolymorphic } from '@leafygreen-ui/polymorphic';

import { cn } from '../utils/cn';
import { getLgIds } from '../utils';
import { useUpdatedBaseFontSize } from '../utils/useUpdatedBaseFontSize';

import {
  descriptionStyles,
  descriptionTypeScaleStyles,
  disabledDescriptionColorStyles,
} from './Description.styles';
import { DescriptionProps } from './Description.types';

export const Description = Polymorphic<DescriptionProps>(
  ({
    as: asProp,
    baseFontSize: baseFontSizeOverride,
    children,
    className,
    darkMode: darkModeProp,
    'data-lgid': dataLgId,
    disabled = false,
    ...rest
  }) => {
    const { theme } = useDarkMode(darkModeProp);
    const baseFontSize = useUpdatedBaseFontSize(baseFontSizeOverride);
    const asDerivedFromChildren = ['string', 'number'].includes(typeof children)
      ? 'p'
      : 'div';
    const as = asProp ?? asDerivedFromChildren;
    const { Component } = usePolymorphic(as);

    return (
      <Component
        data-lgid={getLgIds(dataLgId).description}
        data-testid={getLgIds(dataLgId).description}
        className={cn(
          descriptionStyles[theme],
          descriptionTypeScaleStyles[baseFontSize],
          disabled && disabledDescriptionColorStyles[theme],
          className,
        )}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);

Description.displayName = 'Description';

export default Description;
