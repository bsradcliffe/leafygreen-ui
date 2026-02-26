import React from 'react';

import { InputOption } from '@leafygreen-ui/input-option';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';

import {
  emptyOptionStyles,
  emptyOptionThemeStyles,
} from './EmptyOption.styles';

function cn(
  ...classes: Array<string | false | undefined | null>
): string {
  return classes.filter(Boolean).join(' ');
}

export const EmptyOption = () => {
  const { theme } = useDarkMode();

  return (
    <InputOption
      aria-label="No results found"
      isInteractive={false}
      className={cn(emptyOptionStyles, emptyOptionThemeStyles[theme])}
    >
      <span>No results found</span>
    </InputOption>
  );
};
