import { injectStyles, Theme } from '@leafygreen-ui/lib';
import { addOverflowShadow, Side } from '@leafygreen-ui/tokens';
import { toolbarClassName } from '@leafygreen-ui/toolbar';

import { cn } from '../../cn';
import {
  DRAWER_TOOLBAR_WIDTH,
  EMBEDDED_TOOLBAR_OVERFLOW_PADDING,
  GRID_AREA,
  MOBILE_BREAKPOINT,
  TRANSITION_DURATION,
  TRANSITION_TIMING_FUNCTION,
} from '../../constants';
import { drawerClassName } from '../../Drawer/Drawer.styles';
import { DisplayMode, Size } from '../../Drawer/Drawer.types';
import { getDrawerWidth } from '../../Drawer/Drawer.utils';

const SHADOW_WIDTH = 36; // Width of the shadow padding on the left side

/**
 * Base grid styles with descendant selectors for toolbar and drawer class names.
 * Two variants: with and without toolbar.
 */
function getBaseStylesClass(hasToolbar: boolean): string {
  const variant = hasToolbar ? 'tb' : 'no';
  const id = `lg-panel-grid-base-${variant}`;
  injectStyles(
    id,
    `
    .${id} {
      display: grid;
      grid-template-columns: ${hasToolbar ? `${DRAWER_TOOLBAR_WIDTH}px 0px` : `0px`};
      grid-template-areas: ${hasToolbar ? `'${GRID_AREA.toolbar} ${GRID_AREA.innerDrawer}'` : `'${GRID_AREA.innerDrawer}'`};
      grid-area: ${GRID_AREA.drawer};
      justify-self: end;
      animation-timing-function: ${TRANSITION_TIMING_FUNCTION};
      animation-duration: ${TRANSITION_DURATION}ms;
      z-index: 0;
      height: 100%;
      overflow: hidden;
      position: relative;
      transition-property: grid-template-columns;
      transition-duration: ${TRANSITION_DURATION}ms;
      transition-timing-function: ${TRANSITION_TIMING_FUNCTION};
    }

    .${id} .${toolbarClassName} {
      grid-area: ${GRID_AREA.toolbar};
    }

    .${id} .${drawerClassName} {
      grid-area: ${GRID_AREA.innerDrawer};
      position: unset;
      transform: unset;
      overflow: hidden;
      opacity: 1;
      border-right: 0;
      height: 100%;
      animation: none;
      width: 100%;
      ${hasToolbar ? 'border-left: 0;' : ''}
    }

    .${id} .${drawerClassName} > div::before {
      box-shadow: unset;
    }
  `,
  );
  return id;
}

/**
 * Overlay open: grid-template-columns sized to the drawer.
 */
function getOpenOverlayClass(size: number, hasToolbar: boolean): string {
  const variant = hasToolbar ? 'tb' : 'no';
  const id = `lg-panel-grid-overlay-open-${variant}-${size}`;
  injectStyles(
    id,
    `
    .${id} {
      grid-template-columns: ${hasToolbar ? `${DRAWER_TOOLBAR_WIDTH}px ${size}px` : `${size}px`};
    }

    @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
      .${id} {
        grid-template-columns: ${hasToolbar ? `${DRAWER_TOOLBAR_WIDTH}px calc(100vw - ${DRAWER_TOOLBAR_WIDTH}px)` : `100vw`};
      }
    }
  `,
  );
  return id;
}

/**
 * Overlay closed: columns collapse to 0.
 */
function getClosedOverlayClass(hasToolbar: boolean): string {
  const variant = hasToolbar ? 'tb' : 'no';
  const id = `lg-panel-grid-overlay-closed-${variant}`;
  injectStyles(
    id,
    `
    .${id} {
      grid-template-columns: ${hasToolbar ? `${DRAWER_TOOLBAR_WIDTH}px 0px` : `0px`};
    }
  `,
  );
  return id;
}

/**
 * Embedded open: auto columns.
 */
function getOpenEmbeddedClass(hasToolbar: boolean): string {
  const variant = hasToolbar ? 'tb' : 'no';
  const id = `lg-panel-grid-embedded-open-${variant}`;
  injectStyles(
    id,
    `
    .${id} {
      grid-template-columns: ${hasToolbar ? `${DRAWER_TOOLBAR_WIDTH}px auto` : `auto`};
    }

    @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
      .${id} {
        width: auto;
        grid-template-columns: ${hasToolbar ? `${DRAWER_TOOLBAR_WIDTH}px calc(100vw - ${DRAWER_TOOLBAR_WIDTH}px)` : `100vw`};
      }
    }
  `,
  );
  return id;
}

/**
 * Embedded open padding: offset for focus outline with toolbar.
 */
const openEmbeddedPaddingId = 'lg-panel-grid-embedded-open-padding';
injectStyles(
  openEmbeddedPaddingId,
  `
  .${openEmbeddedPaddingId} {
    padding-left: ${EMBEDDED_TOOLBAR_OVERFLOW_PADDING}px;
    margin-left: -${EMBEDDED_TOOLBAR_OVERFLOW_PADDING}px;
  }
`,
);

/**
 * Embedded closed: mobile responsive.
 */
function getClosedEmbeddedClass(hasToolbar: boolean): string {
  const variant = hasToolbar ? 'tb' : 'no';
  const id = `lg-panel-grid-embedded-closed-${variant}`;
  injectStyles(
    id,
    `
    @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
      .${id} {
        grid-template-columns: ${hasToolbar ? `${DRAWER_TOOLBAR_WIDTH}px 0px` : `0px`};
      }
    }
  `,
  );
  return id;
}

const baseEmbeddedStyles = 'w-full';

/**
 * Overlay shadow: pseudo-element with transition.
 */
function getOverlayShadowClass(theme: Theme): string {
  const shadowClassName = addOverflowShadow({
    isInside: false,
    side: Side.Left,
    theme,
  });
  const id = `lg-panel-grid-overlay-shadow-${theme}`;
  injectStyles(
    id,
    `
    .${id} {
      padding-left: ${SHADOW_WIDTH}px;
    }

    .${id}::before {
      transition-property: opacity;
      transition-duration: ${TRANSITION_DURATION}ms;
      transition-timing-function: ${TRANSITION_TIMING_FUNCTION};
      opacity: 1;
      left: ${SHADOW_WIDTH}px;
    }
  `,
  );
  return cn(shadowClassName, id);
}

/**
 * Overlay closed shadow: collapse padding, hide pseudo-element.
 */
const closedOverlayShadowId = 'lg-panel-grid-overlay-shadow-closed';
injectStyles(
  closedOverlayShadowId,
  `
  .${closedOverlayShadowId} {
    padding-left: 0;
  }

  .${closedOverlayShadowId}::before {
    opacity: 0;
  }
`,
);

export const getEmbeddedStyles = ({
  hasToolbar,
  isDrawerOpen,
}: {
  hasToolbar: boolean;
  isDrawerOpen?: boolean;
}) =>
  cn(baseEmbeddedStyles, {
    [getOpenEmbeddedClass(hasToolbar)]: !!isDrawerOpen,
    [openEmbeddedPaddingId]: !!isDrawerOpen && hasToolbar,
    [getClosedEmbeddedClass(hasToolbar)]: !isDrawerOpen,
  });

export const getOverlayStyles = ({
  hasToolbar,
  isDrawerOpen,
  size,
  theme,
}: {
  hasToolbar: boolean;
  isDrawerOpen?: boolean;
  size: number;
  theme: Theme;
}) =>
  cn(getOverlayShadowClass(theme), {
    [cn(closedOverlayShadowId, getClosedOverlayClass(hasToolbar))]:
      !isDrawerOpen,
    [getOpenOverlayClass(size, hasToolbar)]: !!isDrawerOpen,
  });

export const getPanelGridStyles = ({
  className,
  isDrawerOpen,
  displayMode,
  theme,
  hasToolbar,
  size: sizeProp = Size.Default,
}: {
  className?: string;
  isDrawerOpen?: boolean;
  displayMode?: DisplayMode;
  theme: Theme;
  hasToolbar: boolean;
  size?: Size;
}) => {
  const isOverlay = displayMode === DisplayMode.Overlay;
  const isEmbedded = displayMode === DisplayMode.Embedded;
  const drawerWidth = getDrawerWidth({ size: sizeProp });
  const size = hasToolbar ? drawerWidth.withToolbar : drawerWidth.default;

  return cn(
    getBaseStylesClass(hasToolbar),
    {
      [getOverlayStyles({ hasToolbar, isDrawerOpen, size, theme })]: isOverlay,
      [getEmbeddedStyles({ hasToolbar, isDrawerOpen })]: isEmbedded,
    },
    className,
  );
};
