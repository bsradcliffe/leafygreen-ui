import React from 'react';

import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { boxShadows } from '@leafygreen-ui/tokens';

import { cn } from '../cn';

import { ModalSize } from './Modal.types';

const LARGE_SIZE_BREAKPOINT = '1025px';
const TRANSITION_DURATION = '150ms';

/**
 * Returns the backdrop background-color for the given theme.
 *
 * Light: palette.black (#001E2B) at 60% opacity
 * Dark: palette.gray.dark2 (#3D4F58) at 60% opacity
 */
const backdropColor: Record<Theme, string> = {
  [Theme.Light]: 'rgba(0, 30, 43, 0.6)',
  [Theme.Dark]: 'rgba(61, 79, 88, 0.6)',
};

/**
 * Generates a `<style>` CSS string for the `::backdrop` pseudo-element
 * and `@starting-style` animations that cannot be expressed as Tailwind
 * utilities or inline styles.
 */
export const getDialogTransitionCss = ({
  dialogId,
  theme,
}: {
  dialogId: string;
  theme: Theme;
}) => `
  #${dialogId}::backdrop {
    background-color: ${backdropColor[theme]};
    transition: opacity ${TRANSITION_DURATION} ease-in-out;
    opacity: 0;
  }

  #${dialogId}[open]::backdrop {
    opacity: 1;
  }

  @starting-style {
    #${dialogId}[open]::backdrop {
      opacity: 0;
    }
  }

  #${dialogId} {
    transition: opacity ${TRANSITION_DURATION} ease-in-out,
      overlay ${TRANSITION_DURATION} allow-discrete,
      display ${TRANSITION_DURATION} allow-discrete;
    opacity: 0;
  }

  #${dialogId}[open] {
    opacity: 1;
  }

  @starting-style {
    #${dialogId}[open] {
      opacity: 0;
    }
  }
`;

/**
 * Base dialog Tailwind classes. Theme-dependent values (background-color, color,
 * box-shadow) are applied via inline styles.
 */
const baseDialogStyles = [
  'border-none',
  'rounded-[24px]',
  'mx-auto',
  'my-auto',
  'p-[40px_36px]',
  "font-[family-name:'Euclid_Circular_A','Helvetica_Neue',Helvetica,Arial,sans-serif]",
  'focus:outline-none',
  'open:fixed',
].join(' ');

const dialogSizeStyles: Record<ModalSize, string> = {
  [ModalSize.Small]: 'w-[400px]',
  [ModalSize.Default]: 'w-[600px]',
  [ModalSize.Large]: `w-[720px] min-[${LARGE_SIZE_BREAKPOINT}]:w-[960px]`,
};

/**
 * Returns inline styles for the dialog element containing theme-dependent values.
 */
export const getDialogInlineStyles = (
  theme: Theme,
): React.CSSProperties => ({
  backgroundColor: theme === Theme.Light ? palette.white : palette.black,
  color: theme === Theme.Light ? palette.black : palette.gray.light2,
  boxShadow: boxShadows[theme][3],
});

export const getDialogClassName = ({
  className,
  size,
}: {
  className?: string;
  size: ModalSize;
}) => cn(baseDialogStyles, dialogSizeStyles[size], className);

export const portalContainerStyles = [
  'fixed',
  'top-0',
  'left-0',
  'right-0',
  'bottom-0',
  'pointer-events-none',
  'z-[1]',
].join(' ');
