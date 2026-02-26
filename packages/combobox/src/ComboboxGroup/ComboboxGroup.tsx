import React from 'react';

import { useIdAllocator } from '@leafygreen-ui/hooks';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';

import {
  comboboxGroupLabelClassName,
  comboboxGroupLabelStyle,
  comboboxGroupLabelThemeStyle,
  comboboxGroupStyle,
} from './ComboboxGroup.styles';
import { ComboboxGroupProps } from './ComboboxGroup.types';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * @internal
 */
export function InternalComboboxGroup({
  label,
  className,
  children,
}: ComboboxGroupProps): JSX.Element {
  const { theme } = useDarkMode();

  const groupId = useIdAllocator({ prefix: 'combobox-group' });
  const childCount = React.Children.count(children);

  return childCount > 0 ? (
    <div className={cn(className)} style={comboboxGroupStyle}>
      <div
        className={cn(comboboxGroupLabelClassName)}
        style={{
          ...comboboxGroupLabelStyle,
          ...comboboxGroupLabelThemeStyle[theme],
        }}
        id={groupId}
      >
        {label}
      </div>
      <div role="group" aria-labelledby={groupId}>
        {children}
      </div>
    </div>
  ) : (
    <></>
  );
}

ComboboxGroup.displayName = 'ComboboxGroup';

export function ComboboxGroup(_: ComboboxGroupProps): JSX.Element {
  throw Error('`ComboboxGroup` must be a child of a `Combobox` instance');
}
