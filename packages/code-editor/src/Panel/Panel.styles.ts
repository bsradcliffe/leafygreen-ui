import React from 'react';

import { Theme } from '@leafygreen-ui/lib';
import {
  borderRadius,
  color,
  InteractionState,
  spacing,
  Variant,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';

/**
 * The Loading div is absolutely positioned inside the code editor. When the panel isn't rendered,
 * it renders at a `top: 0` position. When the panel is rendered, it needs to render at a
 * `top: ${PANEL_HEIGHT}px` position so it doesn't overlap with the panel. So this is exported.
 */
export const PANEL_HEIGHT = 36;

const MODAL_HEIGHT = 354;

const basePanelStyle = [
  `h-[${PANEL_HEIGHT}px]`,
  'flex',
  'items-center',
  'justify-between',
  `pl-[${spacing[300]}px]`,
  `pr-[${spacing[400]}px]`,
  'py-0',
  'border border-solid',
  'border-b-0',
  `rounded-tl-[${borderRadius[300]}px]`,
  `rounded-tr-[${borderRadius[300]}px]`,
  'grid',
  'grid-cols-[auto_1fr_auto]',
  "[grid-template-areas:'title_inner-content_buttons']",
  'w-full',
].join(' ');

const panelThemeStyles: Record<Theme, string> = {
  [Theme.Light]: `bg-[${color[Theme.Light].background[Variant.Secondary][InteractionState.Default]}] border-[${color[Theme.Light].border[Variant.Secondary][InteractionState.Default]}]`,
  [Theme.Dark]: `bg-[${color[Theme.Dark].background[Variant.Secondary][InteractionState.Default]}] border-[${color[Theme.Dark].border[Variant.Secondary][InteractionState.Default]}]`,
};

export const getPanelStyles = ({
  theme,
}: {
  theme: Theme;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
}) => cn(basePanelStyle, panelThemeStyles[theme]);

/**
 * Returns inline styles for the panel, handling dynamic dimension values.
 */
export const getPanelInlineStyles = ({
  width,
  minWidth,
  maxWidth,
}: {
  width?: string;
  minWidth?: string;
  maxWidth?: string;
}): React.CSSProperties => {
  const styles: React.CSSProperties = {};
  if (width) styles.width = width;
  if (minWidth) styles.minWidth = minWidth;
  if (maxWidth) styles.maxWidth = maxWidth;
  return styles;
};

const panelTitleThemeStyles: Record<Theme, string> = {
  [Theme.Light]: `text-[${color[Theme.Light].text[Variant.Secondary][InteractionState.Default]}]`,
  [Theme.Dark]: `text-[${color[Theme.Dark].text[Variant.Secondary][InteractionState.Default]}]`,
};

export const getPanelTitleStyles = (theme: Theme, baseFontSize: number) =>
  cn(
    '[grid-area:title]',
    `text-[${baseFontSize}px]`,
    panelTitleThemeStyles[theme],
  );

export const getPanelInnerContentStyles = () => '[grid-area:inner-content]';

export const getPanelButtonsStyles = () =>
  '[grid-area:buttons] flex justify-center';

export const ModalStyles = `h-[${MODAL_HEIGHT}px]`;
