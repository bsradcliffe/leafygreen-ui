import React from 'react';

import { useDescendant } from '@leafygreen-ui/descendants';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { Body, Description } from '@leafygreen-ui/typography';

import { OrderedListContext } from '../OrderedListContext/OrderedListContext';

import {
  baseStyles,
  contentStyles,
  markerStyles,
  stepIconClassName,
  themedStateStyles,
  titleStyles,
} from './OrderedListItem.styles';
import { OrderedListItemProps } from './OrderedListItem.types';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

const OrderedListItem = React.forwardRef(
  (
    { children, className, title, description, ...rest }: OrderedListItemProps,
    forwardRef: React.ForwardedRef<HTMLLIElement>,
  ) => {
    const { index, ref } = useDescendant(OrderedListContext, forwardRef);
    const { theme } = useDarkMode();

    return (
      <li ref={ref} className={cn(baseStyles, className)} {...rest}>
        <div className={stepIconClassName}>
          <div className={cn(markerStyles, themedStateStyles[theme])}>
            {index + 1}
          </div>
        </div>

        <div className={contentStyles}>
          <Body baseFontSize={16} className={titleStyles}>
            {title}
          </Body>
          <Description>{description}</Description>
        </div>
      </li>
    );
  },
);

OrderedListItem.displayName = 'OrderedListItem';

export { OrderedListItem };
