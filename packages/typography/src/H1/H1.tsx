import React from 'react';

import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import {
  Polymorphic,
  PolymorphicAs,
  usePolymorphic,
} from '@leafygreen-ui/polymorphic';

import { baseTypographyStyles } from '../styles';
import { cn } from '../utils/cn';

import { h1Color, h1Styles } from './H1.styles';
import { BaseH1Props } from './H1.types';

const H1 = Polymorphic<BaseH1Props>(
  ({
    darkMode: darkModeProp,
    className,
    as = 'h1' as PolymorphicAs,
    ...rest
  }) => {
    const { theme } = useDarkMode(darkModeProp);
    const { Component } = usePolymorphic(as);

    return (
      <Component
        className={cn(
          baseTypographyStyles,
          h1Styles,
          h1Color[theme],
          className,
        )}
        {...rest}
      />
    );
  },
);

H1.displayName = 'H1';

export default H1;
