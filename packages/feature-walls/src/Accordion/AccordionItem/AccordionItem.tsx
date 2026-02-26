import React, { forwardRef, useState } from 'react';

import { useDescendant } from '@leafygreen-ui/descendants';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';

import {
  AccordionDescendantsContext,
  AccordionItemContext,
  useAccordionContext,
} from '../context';

import { getStyles, getWedgeFocusStyle, getWedgeStyle } from './AccordionItem.styles';
import { AccordionItemProps } from './AccordionItem.types';

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, ...rest }, fwdRef) => {
    const { theme } = useDarkMode();

    const { id, index, ref } = useDescendant(
      AccordionDescendantsContext,
      fwdRef,
    );

    const { id: accordionId, selectedIndex } = useAccordionContext();

    const itemId = `${accordionId}-${id}`;
    const buttonId = `${itemId}-button`;
    const panelId = `${itemId}-panel`;

    const isExpanded = index === selectedIndex;

    const [hasFocusWithin, setHasFocusWithin] = useState(false);

    const contextValue = {
      buttonId,
      isExpanded,
      index,
      itemId,
      panelId,
    } as const;

    const { className: styleClassName, style } = getStyles(theme, isExpanded, className);

    const wedgeStyle = {
      ...getWedgeStyle(theme, isExpanded),
      ...(hasFocusWithin && !isExpanded ? getWedgeFocusStyle(theme) : {}),
    };

    return (
      <AccordionItemContext.Provider value={contextValue}>
        <div
          {...rest}
          className={styleClassName}
          style={style}
          ref={ref}
          onFocusCapture={() => setHasFocusWithin(true)}
          onBlurCapture={() => setHasFocusWithin(false)}
        >
          <span style={wedgeStyle} aria-hidden />
          {children}
        </div>
      </AccordionItemContext.Provider>
    );
  },
);

AccordionItem.displayName = 'AccordionItem';
