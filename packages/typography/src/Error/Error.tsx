import React from 'react';

import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import {
  Polymorphic,
  PolymorphicAs,
  usePolymorphic,
} from '@leafygreen-ui/polymorphic';

import { cn } from '../utils/cn';
import { useUpdatedBaseFontSize } from '../utils/useUpdatedBaseFontSize';

import { getErrorMessageStyle } from './Error.styles';
import { BaseErrorProps } from './Error.types';

const Error = Polymorphic<BaseErrorProps>(
  ({
    as = 'p' as PolymorphicAs,
    darkMode: darkModeProp,
    children,
    className,
    ...rest
  }) => {
    const { theme } = useDarkMode(darkModeProp);
    const baseFontSize = useUpdatedBaseFontSize();
    const { Component } = usePolymorphic(as);

    return (
      <Component
        {...rest}
        className={cn(getErrorMessageStyle({ theme, baseFontSize }), className)}
      >
        {children}
      </Component>
    );
  },
);

export default Error;
