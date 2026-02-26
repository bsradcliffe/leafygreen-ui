import React, {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  useState,
} from 'react';

import { useForwardedRef } from '@leafygreen-ui/hooks';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { keyMap } from '@leafygreen-ui/lib';

import {
  activeIndicatorBg,
  calendarCellClassName,
  calendarCellCurrentStyles,
  calendarCellHighlightIndicatorStyle,
  calendarCellHoverIndicatorBg,
  calendarCellHoverTextColor,
  calendarCellInlineStyle,
  calendarCellRangeElements,
  calendarCellRangeHoverIndicatorBg,
  calendarCellStateStyles,
  cellTextClassName,
  cellTextCurrentInlineStyle,
  cellTextCurrentUnderlineStyle,
  indicatorBaseClassName,
  indicatorBaseInlineStyle,
  indicatorClassName,
} from './CalendarCell.styles';
import {
  CalendarCellProps,
  CalendarCellRangeState,
  CalendarCellState,
} from './CalendarCell.types';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * A single calendar cell.
 *
 * Renders the appropriate styles based on
 * the provided state, current & highlight props
 */
export const CalendarCell = React.forwardRef<
  HTMLTableCellElement,
  CalendarCellProps
>(
  (
    {
      children,
      state = CalendarCellState.Default,
      rangeState = CalendarCellRangeState.None,
      isCurrent,
      isHighlighted,
      className,
      onClick,
      'aria-label': ariaLabel,
      ...rest
    }: CalendarCellProps,
    fwdRef,
  ) => {
    const ref = useForwardedRef(fwdRef, null);
    const { theme } = useDarkMode();

    const isDisabled = state === CalendarCellState.Disabled;
    const isFocusable = isHighlighted && !isDisabled;
    const isActive = state === CalendarCellState.Active;
    const isInRange = rangeState !== CalendarCellRangeState.None;

    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const handleClick: MouseEventHandler<HTMLTableCellElement> = e => {
      if (!isDisabled) {
        (onClick as MouseEventHandler<HTMLTableCellElement>)?.(e);
      }
    };

    // td does not trigger `onClick` on enter/space so we have to listen on key down
    const handleKeyDown: KeyboardEventHandler<HTMLTableCellElement> = e => {
      if (!isDisabled && (e.key === keyMap.Enter || e.key === keyMap.Space)) {
        (onClick as KeyboardEventHandler<HTMLTableCellElement>)?.(e);
      }
    };

    const handleFocusEvent: FocusEventHandler<HTMLTableCellElement> = e => {
      // not checking `isHighlighted` since this event is triggered
      // before the prop changes
      if (state === CalendarCellState.Disabled) {
        e.currentTarget.blur();
      }
      setIsFocused(true);
    };

    const handleBlur: FocusEventHandler<HTMLTableCellElement> = () => {
      setIsFocused(false);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // Compute range pseudo-element styles
    const rangeElements = !isDisabled
      ? calendarCellRangeElements[theme][rangeState]
      : {};

    // Compute the cell style by merging all states
    const cellStyle: React.CSSProperties = {
      ...calendarCellInlineStyle,
      ...calendarCellStateStyles[theme][state],
      ...(isCurrent ? calendarCellCurrentStyles[theme][state] : {}),
      ...('cellStyle' in rangeElements ? rangeElements.cellStyle : {}),
      // Hover styles
      ...(isHovered && !isDisabled
        ? {
            ...(calendarCellHoverTextColor[theme][state]
              ? { color: calendarCellHoverTextColor[theme][state] }
              : {}),
          }
        : {}),
    };

    // Highlight styles (focus outline on the cell)
    const highlightStyle: React.CSSProperties =
      isFocusable && (isFocused || isHighlighted)
        ? { outline: 'none', zIndex: 1 }
        : {};

    // Indicator styles
    const indicatorStyle: React.CSSProperties = {
      ...indicatorBaseInlineStyle,
      // Active indicator background
      ...(isActive ? { backgroundColor: activeIndicatorBg[theme] } : {}),
      // Highlight focus ring on indicator
      ...(isFocusable && (isFocused || isHighlighted)
        ? calendarCellHighlightIndicatorStyle[theme]
        : {}),
      // Hover background on indicator
      ...(isHovered && !isDisabled
        ? {
            backgroundColor:
              isInRange && !isActive
                ? calendarCellRangeHoverIndicatorBg[theme]
                : (calendarCellHoverIndicatorBg[theme][state] ?? undefined),
          }
        : {}),
    };

    return (
      <td
        ref={ref}
        role="gridcell"
        data-testid="lg-date_picker-calendar_cell"
        data-highlighted={isHighlighted}
        aria-label={ariaLabel}
        aria-current={isCurrent}
        aria-selected={isActive}
        aria-disabled={state === CalendarCellState.Disabled}
        tabIndex={isFocusable ? 0 : -1}
        className={cn(calendarCellClassName, className)}
        style={{ ...cellStyle, ...highlightStyle }}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onFocus={handleFocusEvent}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...rest}
      >
        {/* Range before pseudo-element */}
        {'before' in rangeElements && rangeElements.before && (
          <div style={rangeElements.before} />
        )}
        {/* Range after pseudo-element */}
        {'after' in rangeElements && rangeElements.after && (
          <div style={rangeElements.after} />
        )}
        <div
          className={cn(indicatorBaseClassName, indicatorClassName)}
          style={indicatorStyle}
        />
        <span
          aria-hidden={true} // hidden, since the `td` announces the value via `aria-label`
          className={cellTextClassName}
          style={{
            position: 'relative',
            ...(isCurrent ? cellTextCurrentInlineStyle : {}),
          }}
        >
          {children}
          {/* Current date underline indicator (replaces ::after) */}
          {isCurrent && <span style={cellTextCurrentUnderlineStyle} />}
        </span>
      </td>
    );
  },
);

CalendarCell.displayName = 'CalendarCell';
