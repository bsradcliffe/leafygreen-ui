import { injectStyles } from '@leafygreen-ui/lib';

import { cn } from '../../cn';
import { DRAWER_TOOLBAR_WIDTH, GRID_AREA } from '../../constants';

const drawerBaseId = 'lg-overlay-drawer-layout-base';
injectStyles(
  drawerBaseId,
  `
  .${drawerBaseId} {
    display: grid;
    grid-template-columns: auto 0px;
    grid-template-areas: '${GRID_AREA.content} ${GRID_AREA.drawer}';
    overflow: hidden;
  }
`,
);

const toolbarBaseId = 'lg-overlay-drawer-layout-toolbar';
injectStyles(
  toolbarBaseId,
  `
  .${toolbarBaseId} {
    display: grid;
    grid-template-columns: auto ${DRAWER_TOOLBAR_WIDTH}px;
    grid-template-areas: '${GRID_AREA.content} ${GRID_AREA.drawer}';
    height: 100%;
  }
`,
);

const baseStyles = ['w-full', 'relative', '[height:inherit]'].join(' ');

export const getOverlayDrawerLayoutStyles = ({
  className,
  hasToolbar = false,
}: {
  className?: string;
  hasToolbar?: boolean;
}) =>
  cn(
    baseStyles,
    {
      [toolbarBaseId]: hasToolbar,
      [drawerBaseId]: !hasToolbar,
    },
    className,
  );
