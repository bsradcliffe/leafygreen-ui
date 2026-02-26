import { injectStyles, Theme } from '@leafygreen-ui/lib';
import {
  borderRadius,
  color,
  fontWeights,
  spacing,
  typeScales,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';
import { TRANSITION_DURATION } from '../constants';

const BUTTON_HEIGHT = 24;

/**
 * Trigger button styles per theme.
 *
 * Uses injectStyles because the dynamic token colors are applied across
 * multiple pseudo-class selectors (:hover, :active, :focus-visible).
 */
function getTriggerClass(theme: Theme): string {
  const backgroundColor = color[theme].background.info.default;
  const textColor = color[theme].text.onInfo.default;

  const id = `lg-context-drawer-btn-trigger-${theme}`;
  injectStyles(
    id,
    `
    .${id} {
      height: ${BUTTON_HEIGHT}px;
      border: none;
      background-color: ${backgroundColor};
      color: ${textColor};
      border-radius: 0 0 ${borderRadius[400]}px ${borderRadius[400]}px;
      padding: 0 ${spacing[200]}px;
      font-size: ${typeScales.disclaimer.fontSize}px;
      font-weight: ${fontWeights.medium};
      line-height: ${typeScales.disclaimer.lineHeight}px;
      text-transform: none;
    }

    .${id}:focus-visible {
      background-color: ${backgroundColor};
      color: ${textColor};
      box-shadow: none;
    }

    .${id}:hover,
    .${id}:active {
      background-color: ${backgroundColor};
      color: ${textColor};
      box-shadow: none;
    }
  `,
  );
  return id;
}

/**
 * Glyph rotation styles with descendant SVG selector.
 *
 * Uses injectStyles because this targets a descendant SVG element
 * with a role attribute selector.
 */
function getGlyphClass(theme: Theme): string {
  const iconColor = color[theme].text.onInfo.default;

  const baseId = `lg-context-drawer-btn-glyph-${theme}`;
  injectStyles(
    baseId,
    `
    .${baseId} svg[role='presentation'] {
      color: ${iconColor};
      transition: transform ${TRANSITION_DURATION}ms ease-in-out;
      transform: rotate(0deg);
    }
  `,
  );
  return baseId;
}

const glyphOpenId = 'lg-context-drawer-btn-glyph-open';
injectStyles(
  glyphOpenId,
  `
  .${glyphOpenId} svg[role='presentation'] {
    transform: rotate(180deg);
  }
`,
);

export const getButtonStyles = ({
  className,
  isOpen,
  theme,
}: {
  className?: string;
  isOpen: boolean;
  theme: Theme;
}) =>
  cn(getTriggerClass(theme), getGlyphClass(theme), {
    [glyphOpenId]: isOpen,
  }, className);
