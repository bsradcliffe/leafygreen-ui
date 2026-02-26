import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import {
  color,
  focusRing,
  fontWeights,
  hoverRing,
  Size,
  spacing,
  typeScales,
} from '@leafygreen-ui/tokens';

import { State } from '../Select/Select.types';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

export const menuButtonTextClassName = createUniqueClassName('select-menu');

/**
 * The nested selector overrides (> *:last-child, > *:last-child > svg, etc.)
 * cannot be expressed with Tailwind utility classes. We build a single
 * stylesheet string that is injected via a <style> element in MenuButton.
 *
 * A deterministic class prefix is used so that the rules are scoped.
 */
const SCOPE = 'lg-select-mb';

/**
 * Generates the full injected CSS for MenuButton given the current theme and size.
 */
export function getMenuButtonCSS(theme: Theme, size: Size): string {
  const lines: Array<string> = [];

  // --- structural overrides ---
  lines.push(`
    .${SCOPE} {
      font-weight: ${fontWeights.regular};
    }
    .${SCOPE} > *:last-child {
      grid-template-columns: 1fr 16px;
      justify-content: flex-start;
    }
    .${SCOPE} > *:last-child > svg {
      justify-self: right;
      width: 16px;
      height: 16px;
    }
  `);

  // --- size ---
  if (size === Size.Default || size === Size.Large) {
    lines.push(`
      .${SCOPE} > *:last-child {
        padding: 0 ${spacing[200]}px 0 ${spacing[300]}px;
      }
    `);
  } else if (size === Size.Small) {
    lines.push(`
      .${SCOPE} > *:last-child {
        padding: 0 ${spacing[100]}px 0 ${spacing[200]}px;
      }
    `);
  } else if (size === Size.XSmall) {
    lines.push(`
      .${SCOPE} {
        text-transform: none;
        font-size: ${typeScales.body1.fontSize}px;
        line-height: ${typeScales.body1.lineHeight}px;
      }
      .${SCOPE} > *:last-child {
        padding: 0 ${spacing[100]}px 0 ${spacing[200]}px;
      }
    `);
  }

  // --- theme / mode ---
  if (theme === Theme.Light) {
    lines.push(`
      .${SCOPE} {
        background-color: ${color.light.background.primary.default};
      }
      .${SCOPE} > *:last-child > svg {
        color: ${color.light.icon.primary.default};
      }
    `);
  } else {
    lines.push(`
      .${SCOPE} {
        border-color: ${color.dark.border.primary.default};
        background-color: ${palette.gray.dark4};
        color: ${color.dark.text.primary.default};
      }
      .${SCOPE} > *:last-child > svg {
        color: ${color.dark.icon.primary.default};
      }
      .${SCOPE}:hover,
      .${SCOPE}:active,
      .${SCOPE}:focus {
        background-color: ${palette.gray.dark4};
        color: ${color.dark.text.primary.hover};
      }
    `);
  }

  // --- focus ring ---
  if (theme === Theme.Light) {
    lines.push(`
      .${SCOPE}:focus-visible {
        box-shadow: ${focusRing.light.input};
        border-color: rgba(255, 255, 255, 0);
      }
    `);
  } else {
    lines.push(`
      .${SCOPE}:focus-visible {
        background-color: ${palette.gray.dark4};
        box-shadow: ${focusRing.dark.input};
        border-color: rgba(255, 255, 255, 0);
      }
    `);
  }

  // --- deselected ---
  if (theme === Theme.Light) {
    lines.push(`
      .${SCOPE}.${SCOPE}--deselected {
        color: ${palette.gray.base};
      }
    `);
  } else {
    lines.push(`
      .${SCOPE}.${SCOPE}--deselected {
        color: ${palette.gray.dark1};
      }
      .${SCOPE}.${SCOPE}--deselected:hover,
      .${SCOPE}.${SCOPE}--deselected:active,
      .${SCOPE}.${SCOPE}--deselected:focus {
        color: ${palette.gray.light1};
      }
    `);
  }

  // --- disabled ---
  lines.push(`
    .${SCOPE}.${SCOPE}--disabled {
      cursor: not-allowed;
      pointer-events: unset;
      box-shadow: unset;
    }
    .${SCOPE}.${SCOPE}--disabled:active {
      pointer-events: none;
    }
    .${SCOPE}.${SCOPE}--disabled[aria-disabled='true'] {
      background-color: ${color[theme].background.disabled.default};
      border-color: ${color[theme].border.disabled.default};
      color: ${color[theme].text.disabled.default};
    }
    .${SCOPE}.${SCOPE}--disabled[aria-disabled='true']:hover,
    .${SCOPE}.${SCOPE}--disabled[aria-disabled='true']:active {
      box-shadow: inherit;
    }
    .${SCOPE}.${SCOPE}--disabled[aria-disabled='true'] > *:last-child > svg {
      color: ${color[theme].icon.disabled.default};
    }
  `);

  // --- state: error ---
  lines.push(`
    .${SCOPE}.${SCOPE}--error {
      border-color: ${color[theme].border.error.default};
    }
    .${SCOPE}.${SCOPE}--error:hover,
    .${SCOPE}.${SCOPE}--error:active {
      border-color: ${color[theme].border.error.hover};
      box-shadow: ${hoverRing[theme].red};
    }
  `);

  // --- state: valid ---
  lines.push(`
    .${SCOPE}.${SCOPE}--valid {
      border-color: ${color[theme].border.success.default};
    }
    .${SCOPE}.${SCOPE}--valid:hover,
    .${SCOPE}.${SCOPE}--valid:active {
      border-color: ${color[theme].border.success.hover};
      box-shadow: ${hoverRing[theme].green};
    }
  `);

  return lines.join('\n');
}

/**
 * Scope class name for the menu button.
 */
export const menuButtonScopeClassName = SCOPE;

/**
 * Builds the composite className string for the MenuButton.
 */
export function getMenuButtonClassNames({
  state,
  deselected,
  disabled,
  isXSmall,
}: {
  state?: State;
  deselected: boolean;
  disabled: boolean;
  isXSmall: boolean;
}): string {
  return cn(
    SCOPE,
    'w-full',
    deselected && `${SCOPE}--deselected`,
    disabled && `${SCOPE}--disabled`,
    state === State.Error && `${SCOPE}--error`,
    state === State.Valid && `${SCOPE}--valid`,
    isXSmall && 'tracking-normal',
  );
}

/**
 * Text wrapper: flex row with space-between, vertical centering, overflow hidden.
 * gap = spacing[100] = 4px
 */
export const menuButtonTextWrapperStyle =
  'flex justify-between items-center grow gap-[4px] overflow-hidden';

/**
 * Text element: truncated single-line text.
 */
export const menuButtonTextStyle =
  'overflow-hidden whitespace-nowrap text-ellipsis max-w-full';
