import React, { useCallback, useEffect, useState } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';

import { useIdAllocator } from '@leafygreen-ui/hooks';
import ChevronRight from '@leafygreen-ui/icon/dist/ChevronRight';
import { useUsingKeyboardContext } from '@leafygreen-ui/leafygreen-provider';

import { cn } from '../cn';
import { ulStyleOverrides, useSideNavContext } from '../SideNav';
import {
  baseStyle,
  buttonClassName,
  indentedStyle,
  themeStyle,
} from '../SideNavGroup/SideNavGroup.styles';
import { SideNavGroupHeader } from '../SideNavGroupHeader';

import {
  collapsibleBaseStyle,
  collapsibleFocusThemeStyle,
  collapsibleGroupBaseStyles,
  collapsibleThemeStyle,
  expandIconStyle,
  openExpandIconStyle,
  transitionStyles,
  ulStyles,
  ulTransitionStyles,
} from './SideNavGroupCollapsed.styles';
import { SideNavGroupCollapsedProps } from './SideNavGroupCollapsed.types';

/**
 * @internal
 */
export function SideNavGroupCollapsed({
  groupHeaderProps,
  open,
  setOpen,
  menuGroupLabelId,
  indentLevel,
  children,
  isActiveGroup,
  accessibleGlyph,
  header,
}: SideNavGroupCollapsedProps) {
  const { width, theme, darkMode } = useSideNavContext();
  const { usingKeyboard } = useUsingKeyboardContext();

  const [ulHeight, setUlHeight] = useState(0);
  const [enteredStyle, setEnteredStyle] = useState('');

  const menuId = useIdAllocator({ prefix: 'menu' });

  const nodeRef = React.useRef(null);

  const ulRef = useCallback((node: HTMLUListElement) => {
    if (node !== null) {
      setUlHeight(node.getBoundingClientRect().height);
    }
  }, []);

  // compute the entered ul wrapper styles based on the ul height
  useEffect(() => {
    transitionStyles['entered'] = [
      'opacity-100',
      `!max-h-[${ulHeight + 1}px]`,
      darkMode
        ? 'border-b border-b-[#5C6C75]'
        : 'border-b border-b-[#E8EDEB]',
    ].join(' ');
    setEnteredStyle(transitionStyles['entered']);
  }, [open, ulHeight, darkMode]);

  return (
    <>
      <button
        {...groupHeaderProps}
        aria-controls={menuId}
        aria-expanded={open}
        className={cn(
          buttonClassName,
          baseStyle,
          themeStyle[theme],
          collapsibleBaseStyle,
          collapsibleThemeStyle[theme],
          {
            [collapsibleFocusThemeStyle[theme]]: usingKeyboard,
            [indentedStyle(indentLevel, darkMode)]: indentLevel > 1,
          },
        )}
        style={{ width: `${width}px` }}
        onClick={() => setOpen((curr: boolean) => !curr)}
      >
        <SideNavGroupHeader
          isActiveGroup={isActiveGroup}
          header={header}
          accessibleGlyph={accessibleGlyph}
        />
        <ChevronRight
          role="presentation"
          size={12}
          className={cn(expandIconStyle, {
            [openExpandIconStyle]: open,
          })}
        />
      </button>
      <Transition
        in={open}
        appear
        timeout={150}
        nodeRef={nodeRef}
        mountOnEnter
        unmountOnExit
      >
        {(state: TransitionStatus) => (
          <div
            ref={nodeRef}
            className={cn(collapsibleGroupBaseStyles, transitionStyles[state])}
          >
            <ul
              ref={ulRef}
              id={menuId}
              aria-labelledby={menuGroupLabelId}
              className={cn(ulStyleOverrides, ulStyles, {
                [ulTransitionStyles]: ['entering', 'entered'].includes(state),
              })}
            >
              {children}
            </ul>
          </div>
        )}
      </Transition>
    </>
  );
}
