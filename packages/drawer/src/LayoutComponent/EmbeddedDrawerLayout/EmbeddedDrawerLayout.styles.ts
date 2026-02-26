import { injectStyles } from '@leafygreen-ui/lib';
import { breakpoints } from '@leafygreen-ui/tokens';

import { cn } from '../../cn';
import {
  DRAWER_TOOLBAR_WIDTH,
  GRID_AREA,
  MOBILE_BREAKPOINT,
  TRANSITION_DURATION,
  TRANSITION_TIMING_FUNCTION,
} from '../../constants';
import { Size } from '../../Drawer/Drawer.types';
import { getDrawerWidth } from '../../Drawer/Drawer.utils';

/**
 * Base layout styles injected once.
 */
const baseId = 'lg-embedded-drawer-layout-base';
injectStyles(
  baseId,
  `
  .${baseId} {
    width: 100%;
    display: grid;
    grid-template-columns: auto 0;
    grid-template-areas: '${GRID_AREA.content} ${GRID_AREA.drawer}';
    transition-property: grid-template-columns, grid-template-rows;
    transition-timing-function: ${TRANSITION_TIMING_FUNCTION};
    transition-duration: ${TRANSITION_DURATION}ms;
    overflow: hidden;
    position: relative;
    height: 100%;
  }
`,
);

/**
 * Dynamic drawer-width custom property.
 * Uses a function that returns an id per combination of arguments.
 */
function getDrawerDefaultWidthClass({
  isDrawerOpen,
  hasToolbar,
  size,
}: {
  isDrawerOpen?: boolean;
  hasToolbar: boolean;
  size: Size;
}): string {
  const widthVal = isDrawerOpen
    ? hasToolbar
      ? getDrawerWidth({ size }).withToolbar
      : getDrawerWidth({ size }).default
    : 0;
  const id = `lg-embedded-dw-${isDrawerOpen ? 'open' : 'closed'}-${hasToolbar ? 'tb' : 'no'}-${size}`;
  injectStyles(
    id,
    `
    .${id} {
      --drawer-width-default: ${widthVal};
      --drawer-width: var(--drawer-width-default);
    }
  `,
  );
  return id;
}

/**
 * Without-toolbar base: grid uses calc() on the custom property.
 */
const noToolbarBaseId = 'lg-embedded-no-toolbar-base';
injectStyles(
  noToolbarBaseId,
  `
  .${noToolbarBaseId} {
    grid-template-columns: auto min(
      50vw,
      calc(var(--drawer-width, var(--drawer-width-default)) * 1px)
    );
  }
`,
);

const noToolbarBaseMobilePanelId = 'lg-embedded-no-toolbar-base-mobile-panel';
injectStyles(
  noToolbarBaseMobilePanelId,
  `
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    .${noToolbarBaseMobilePanelId} {
      grid-template-columns: auto 0;
    }
  }
`,
);

const noToolbarBaseMobileNoPanelId =
  'lg-embedded-no-toolbar-base-mobile-no-panel';
injectStyles(
  noToolbarBaseMobileNoPanelId,
  `
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    .${noToolbarBaseMobileNoPanelId} {
      grid-template-columns: unset;
      grid-template-rows: 100% 0;
      grid-template-areas: unset;
    }
  }
`,
);

const getWithoutToolbarBaseStyles = ({
  hasPanelContentProp,
}: {
  hasPanelContentProp: boolean;
}) =>
  cn(noToolbarBaseId, {
    [noToolbarBaseMobilePanelId]: hasPanelContentProp,
    [noToolbarBaseMobileNoPanelId]: !hasPanelContentProp,
  });

/**
 * Without-toolbar open styles (mobile responsive).
 */
const noToolbarOpenMobilePanelId = 'lg-embedded-no-toolbar-open-mobile-panel';
injectStyles(
  noToolbarOpenMobilePanelId,
  `
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    .${noToolbarOpenMobilePanelId} {
      grid-template-columns: auto 0;
    }
  }
`,
);

const noToolbarOpenMobileNoPanelId =
  'lg-embedded-no-toolbar-open-mobile-no-panel';
injectStyles(
  noToolbarOpenMobileNoPanelId,
  `
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    .${noToolbarOpenMobileNoPanelId} {
      grid-template-rows: 50% 50%;
    }
  }
`,
);

const getWithoutToolbarOpenStyles = ({
  hasPanelContentProp,
}: {
  hasPanelContentProp: boolean;
}) =>
  cn({
    [noToolbarOpenMobilePanelId]: hasPanelContentProp,
    [noToolbarOpenMobileNoPanelId]: !hasPanelContentProp,
  });

/**
 * With-toolbar base styles.
 */
const withToolbarBaseId = 'lg-embedded-with-toolbar-base';
injectStyles(
  withToolbarBaseId,
  `
  .${withToolbarBaseId} {
    grid-template-areas: '${GRID_AREA.content} ${GRID_AREA.drawer}';
    grid-template-columns: auto min(
      50vw,
      calc(
        ${DRAWER_TOOLBAR_WIDTH}px +
          var(--drawer-width, var(--drawer-width-default)) * 1px
      )
    );
  }
`,
);

/**
 * With-toolbar open styles (tablet responsive).
 */
const withToolbarOpenId = 'lg-embedded-with-toolbar-open';
injectStyles(
  withToolbarOpenId,
  `
  @media only screen and (max-width: ${breakpoints.Tablet}px) {
    .${withToolbarOpenId} {
      grid-template-columns: auto ${DRAWER_TOOLBAR_WIDTH}px;
    }
  }
`,
);

const resizingStyles = '[transition:none]';

const getBaseStyles = ({
  isDrawerOpen,
  hasToolbar,
  size,
  hasPanelContentProp,
}: {
  isDrawerOpen?: boolean;
  hasToolbar: boolean;
  size: Size;
  hasPanelContentProp: boolean;
}) =>
  cn(
    baseId,
    getDrawerDefaultWidthClass({ isDrawerOpen, hasToolbar, size }),
    {
      [withToolbarBaseId]: hasToolbar,
      [getWithoutToolbarBaseStyles({ hasPanelContentProp })]: !hasToolbar,
    },
  );

export const getOpenStyles = ({
  hasToolbar,
  hasPanelContentProp = false,
}: {
  hasToolbar: boolean;
  hasPanelContentProp: boolean;
}) =>
  cn({
    [withToolbarOpenId]: hasToolbar,
    [getWithoutToolbarOpenStyles({ hasPanelContentProp })]: !hasToolbar,
  });

export const getEmbeddedDrawerLayoutStyles = ({
  className,
  isDrawerOpen,
  hasToolbar = false,
  isDrawerResizing = false,
  size = Size.Default,
  hasPanelContentProp = true,
}: {
  className?: string;
  isDrawerOpen?: boolean;
  hasToolbar?: boolean;
  isDrawerResizing?: boolean;
  size?: Size;
  hasPanelContentProp?: boolean;
}) =>
  cn(
    getBaseStyles({ isDrawerOpen, hasToolbar, size, hasPanelContentProp }),
    {
      [resizingStyles]: isDrawerResizing,
      [getOpenStyles({ hasToolbar, hasPanelContentProp })]: !!isDrawerOpen,
    },
    className,
  );
