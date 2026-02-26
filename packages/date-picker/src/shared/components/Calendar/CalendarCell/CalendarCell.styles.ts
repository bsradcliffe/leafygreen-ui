import React from 'react';

import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import {
  fontFamilies,
  fontWeights,
  spacing,
  transitionDuration,
} from '@leafygreen-ui/tokens';

import {
  CalendarCellRangeState,
  CalendarCellState,
} from './CalendarCell.types';

const CELL_SIZE = 28;
export const indicatorClassName = createUniqueClassName('calendar-cell');

const calendarCellFocusRing: Record<Theme, string> = {
  [Theme.Light]: `0 0 0 1px ${palette.white}, 0 0 0 3px ${palette.blue.light1}`,
  [Theme.Dark]: `0 0 0 1px ${palette.black}, 0 0 0 3px ${palette.blue.light1}`,
};

export const calendarCellClassName = 'relative cursor-pointer text-center p-0 z-0';

export const calendarCellInlineStyle: React.CSSProperties = {
  fontFamily: fontFamilies.default,
  fontSize: '13px', // typeScales.body1.fontSize
  fontVariant: 'tabular-nums',
  height: `${CELL_SIZE}px`,
  width: `${CELL_SIZE}px`,
  transition: `color ${transitionDuration.faster}ms ease-in-out`,
};

type ThemedStateStyles = Record<Theme, Record<CalendarCellState, React.CSSProperties>>;

/**
 * Base styles for each state
 */
export const calendarCellStateStyles: ThemedStateStyles = {
  [Theme.Light]: {
    [CalendarCellState.Default]: {
      color: palette.black,
    },
    [CalendarCellState.Disabled]: {
      color: palette.gray.light1,
      cursor: 'not-allowed',
    },
    [CalendarCellState.Active]: {
      color: palette.white,
    },
  },
  [Theme.Dark]: {
    [CalendarCellState.Default]: {
      color: palette.gray.light2,
    },
    [CalendarCellState.Disabled]: {
      color: palette.gray.dark1,
      cursor: 'not-allowed',
    },
    [CalendarCellState.Active]: {
      color: palette.black,
    },
  },
};

/**
 * Active state indicator background color (applied to the indicator child element)
 */
export const activeIndicatorBg: Record<Theme, string> = {
  [Theme.Light]: palette.blue.dark1,
  [Theme.Dark]: palette.blue.light1,
};

/**
 * Styles for the current date
 */
export const calendarCellCurrentStyles: Record<Theme, Record<CalendarCellState, React.CSSProperties>> = {
  [Theme.Light]: {
    [CalendarCellState.Default]: { color: palette.blue.base },
    [CalendarCellState.Active]: { color: palette.white },
    [CalendarCellState.Disabled]: {},
  },
  [Theme.Dark]: {
    [CalendarCellState.Default]: { color: palette.blue.light1 },
    [CalendarCellState.Active]: { color: palette.black },
    [CalendarCellState.Disabled]: {},
  },
};

/**
 * Range pseudo-element styles (applied as dedicated elements)
 */
const baseRangeStartStyle: React.CSSProperties = {
  content: '""',
  position: 'absolute',
  width: '50%',
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: 0,
};

const baseRangeEndStyle: React.CSSProperties = {
  content: '""',
  position: 'absolute',
  width: '50%',
  left: 0,
  top: 0,
  bottom: 0,
  zIndex: 0,
};

export const rangeAfterBg: Record<Theme, string> = {
  [Theme.Light]: palette.blue.light3,
  [Theme.Dark]: palette.blue.dark3,
};

export const calendarCellRangeElements: Record<
  Theme,
  Record<CalendarCellRangeState, { before?: React.CSSProperties; after?: React.CSSProperties; cellStyle?: React.CSSProperties }>
> = {
  [Theme.Light]: {
    [CalendarCellRangeState.Start]: {
      after: { ...baseRangeStartStyle, backgroundColor: palette.blue.light3 },
    },
    [CalendarCellRangeState.End]: {
      before: { ...baseRangeEndStyle, backgroundColor: palette.blue.light3 },
    },
    [CalendarCellRangeState.Range]: {
      before: { ...baseRangeEndStyle, backgroundColor: palette.blue.light3 },
      after: { ...baseRangeStartStyle, backgroundColor: palette.blue.light3 },
      cellStyle: { color: palette.black },
    },
    [CalendarCellRangeState.None]: {},
  },
  [Theme.Dark]: {
    [CalendarCellRangeState.Start]: {
      after: { ...baseRangeStartStyle, backgroundColor: palette.blue.dark3 },
    },
    [CalendarCellRangeState.End]: {
      before: { ...baseRangeEndStyle, backgroundColor: palette.blue.dark3 },
    },
    [CalendarCellRangeState.Range]: {
      before: { ...baseRangeEndStyle, backgroundColor: palette.blue.dark3 },
      after: { ...baseRangeStartStyle, backgroundColor: palette.blue.dark3 },
      cellStyle: { color: palette.blue.light3 },
    },
    [CalendarCellRangeState.None]: {},
  },
};

/**
 * Highlighted / Focus styles (applied to the indicator element)
 */
export const calendarCellHighlightIndicatorStyle: Record<Theme, React.CSSProperties> = {
  [Theme.Light]: {
    boxShadow: calendarCellFocusRing[Theme.Light],
  },
  [Theme.Dark]: {
    boxShadow: calendarCellFocusRing[Theme.Dark],
  },
};

/**
 * Hover indicator background colors
 */
export const calendarCellHoverIndicatorBg: Record<Theme, Record<CalendarCellState, string | undefined>> = {
  [Theme.Light]: {
    [CalendarCellState.Default]: palette.gray.light2,
    [CalendarCellState.Active]: palette.blue.dark2,
    [CalendarCellState.Disabled]: undefined,
  },
  [Theme.Dark]: {
    [CalendarCellState.Default]: palette.gray.dark2,
    [CalendarCellState.Active]: palette.blue.light2,
    [CalendarCellState.Disabled]: undefined,
  },
};

export const calendarCellHoverTextColor: Record<Theme, Record<CalendarCellState, string | undefined>> = {
  [Theme.Light]: {
    [CalendarCellState.Default]: palette.black,
    [CalendarCellState.Active]: undefined,
    [CalendarCellState.Disabled]: undefined,
  },
  [Theme.Dark]: {
    [CalendarCellState.Default]: palette.white,
    [CalendarCellState.Active]: undefined,
    [CalendarCellState.Disabled]: undefined,
  },
};

export const calendarCellRangeHoverIndicatorBg: Record<Theme, string> = {
  [Theme.Light]: palette.blue.light2,
  [Theme.Dark]: palette.blue.dark2,
};

export const indicatorBaseClassName = 'absolute rounded-full';

export const indicatorBaseInlineStyle: React.CSSProperties = {
  height: '100%',
  width: '100%',
  top: 0,
  left: 0,
  zIndex: 1,
  outlineOffset: '-1px',
  transition: `box-shadow ${transitionDuration.faster}ms ease-in-out, background-color ${transitionDuration.faster}ms ease-in-out`,
};

export const cellTextClassName = 'relative z-[1]';

export const cellTextCurrentInlineStyle: React.CSSProperties = {
  fontWeight: fontWeights.medium,
};

/**
 * The underline indicator for the current date.
 * Rendered as a dedicated element instead of ::after.
 */
export const cellTextCurrentUnderlineStyle: React.CSSProperties = {
  position: 'absolute',
  content: '""',
  bottom: 0,
  left: '50%',
  transform: 'translate(-50%)',
  height: '1px',
  width: `${spacing[2]}px`,
  backgroundColor: 'currentColor',
  borderRadius: '1px',
};
