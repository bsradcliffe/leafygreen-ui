import React, { forwardRef, useState } from 'react';

import { useForwardedRef } from '@leafygreen-ui/hooks';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';

import { useAccordionContext, useAccordionItemContext } from '../context';

import { getFocusVisibleStyle, getHoverStyle, getStyles } from './AccordionButton.styles';
import { AccordionButtonProps } from './AccordionButton.types';

export const AccordionButton = forwardRef<
  HTMLButtonElement,
  AccordionButtonProps
>(({ children, className, onClick, onExpand, onKeyDown, ...rest }, fwdRef) => {
  const { theme } = useDarkMode();

  const { onSelectPanel } = useAccordionContext();
  const { buttonId, isExpanded, index, panelId } = useAccordionItemContext();

  const buttonRef = useForwardedRef(fwdRef, null);

  const [isHovered, setIsHovered] = useState(false);
  const [isFocusVisible, setIsFocusVisible] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!isExpanded) {
      onExpand?.();
    }

    onSelectPanel(index);
    onClick?.(e);
  };

  const handleFocus = () => {
    if (!isExpanded) {
      setIsFocusVisible(true);
    }
  };

  const handleBlur = () => {
    setIsFocusVisible(false);
  };

  const { className: styleClassName, style: baseStyle } = getStyles(theme, isExpanded, className);

  const interactionStyle = isFocusVisible && !isExpanded
    ? getFocusVisibleStyle(theme)
    : isHovered
    ? getHoverStyle(theme, isExpanded)
    : {};

  return (
    <button
      {...rest}
      type="button"
      ref={buttonRef}
      aria-controls={panelId}
      aria-expanded={isExpanded}
      className={styleClassName}
      style={{ ...baseStyle, ...interactionStyle }}
      id={buttonId}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
    >
      {children}
    </button>
  );
});

AccordionButton.displayName = 'AccordionButton';
