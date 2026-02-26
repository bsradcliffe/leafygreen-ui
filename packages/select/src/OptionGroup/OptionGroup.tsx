import React from 'react';

import { useIdAllocator } from '@leafygreen-ui/hooks';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';

import { colorSets } from '../styleSets';

import { optionGroupLabelStyle, optionGroupStyle } from './OptionGroup.styles';
import { InternalOptionProps, OptionGroupProps } from './OptionGroup.types';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

export function InternalOptionGroup({
  className,
  label,
  children,
  ...rest
}: InternalOptionProps) {
  const { theme } = useDarkMode();
  const colorSet = colorSets[theme].option;

  const groupId = useIdAllocator({ prefix: 'select-option-group' });

  return (
    <div className={cn(optionGroupStyle, className)} {...rest}>
      <div
        id={groupId}
        className={optionGroupLabelStyle}
        style={{ color: colorSet.group.label }}
      >
        {label}
      </div>
      <div role="group" aria-labelledby={groupId}>
        {children}
      </div>
    </div>
  );
}

InternalOptionGroup.displayName = 'OptionGroup';

export function OptionGroup(_: OptionGroupProps): JSX.Element {
  throw Error('`OptionGroup` must be a child of a `Select` instance');
}

OptionGroup.displayName = 'OptionGroup';

export type OptionGroupElement = React.ReactComponentElement<
  typeof OptionGroup
>;
