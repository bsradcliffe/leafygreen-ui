import React from 'react';

import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import {
  Polymorphic,
  PolymorphicAs,
  usePolymorphic,
} from '@leafygreen-ui/polymorphic';

import { InputOptionContext } from '../InputOptionContext';

import {
  getInputOptionStyles,
  getInputOptionWedge,
  inputOptionClassName,
} from './InputOption.style';
import { InternalInputOptionProps } from './InputOption.types';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

export const InputOption = Polymorphic<InternalInputOptionProps>(
  (
    {
      as = 'li' as PolymorphicAs,
      children,
      disabled,
      highlighted,
      checked,
      darkMode: darkModeProp,
      showWedge = true,
      isInteractive = true,
      className,
      ...rest
    },
    ref,
  ) => {
    const { Component } = usePolymorphic(as);
    const { theme, darkMode } = useDarkMode(darkModeProp);
    return (
      <InputOptionContext.Provider
        value={{
          checked,
          darkMode,
          disabled,
          highlighted,
        }}
      >
        <Component
          ref={ref}
          role="option"
          aria-selected={highlighted}
          aria-checked={checked}
          aria-disabled={disabled}
          tabIndex={-1}
          className={cn(
            inputOptionClassName,
            getInputOptionStyles({
              theme,
              disabled,
              highlighted,
              isInteractive,
            }),
            showWedge &&
              getInputOptionWedge({
                theme,
                disabled,
                highlighted,
                isInteractive,
              }),
            className,
          )}
          {...rest}
        >
          {children}
        </Component>
      </InputOptionContext.Provider>
    );
  },
);

InputOption.displayName = 'InputOption';
