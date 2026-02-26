import { createUniqueClassName, injectStyles, Theme } from '@leafygreen-ui/lib';
import {
  addOverflowShadow,
  color,
  fontWeights,
  Side,
  spacing,
  transitionDuration,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';
import {
  EMBEDDED_TOOLBAR_OVERFLOW_PADDING,
  HEADER_HEIGHT,
  MOBILE_BREAKPOINT,
  TRANSITION_DURATION,
  TRANSITION_TIMING_FUNCTION,
} from '../constants';

import { DisplayMode, Size } from './Drawer.types';
import { getDrawerWidth } from './Drawer.utils';

export const drawerClassName = createUniqueClassName('lg-drawer');

/**
 * Keyframe animations for overlay drawer open/close.
 */
injectStyles(
  'lg-drawer-keyframes',
  `
@keyframes lg-drawer-in {
  0% {
    transform: translate3d(0%, 0, 0);
    opacity: 0;
    visibility: hidden;
  }
  1% {
    transform: translate3d(100%, 0, 0);
    opacity: 1;
    visibility: visible;
  }
  100% {
    transform: translate3d(0%, 0, 0);
  }
}

@keyframes lg-drawer-out {
  0% {
    transform: translate3d(0%, 0, 0);
  }
  99% {
    transform: translate3d(100%, 0, 0);
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}
`,
);

/**
 * Base drawer styles per theme (background, border).
 */
function getBaseStylesClass(theme: Theme): string {
  const id = `lg-drawer-base-${theme}`;
  injectStyles(
    id,
    `
    .${id} {
      all: unset;
      background-color: ${color[theme].background.primary.default};
      border: 1px solid ${color[theme].border.secondary.default};
      max-width: 50vw;
      width: 100%;
      height: 100%;
      overflow: hidden;
      box-sizing: border-box;
      position: relative;
    }

    @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
      .${id} {
        width: auto;
        max-width: 100%;
        height: 50vh;
      }
    }
  `,
  );
  return id;
}

/**
 * Overlay open: animate in.
 */
const overlayOpenId = 'lg-drawer-overlay-open';
injectStyles(
  overlayOpenId,
  `
  .${overlayOpenId} {
    opacity: 1;
    animation-name: lg-drawer-in;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    .${overlayOpenId} {
      transform: none;
    }
  }
`,
);

/**
 * Overlay closed: animate out.
 */
const overlayClosedId = 'lg-drawer-overlay-closed';
injectStyles(
  overlayClosedId,
  `
  .${overlayClosedId} {
    pointer-events: none;
    animation-name: lg-drawer-out;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    .${overlayClosedId} {
      transform: translate3d(0, 100%, 0);
      opacity: 0;
    }
  }
`,
);

/**
 * Overlay positioning, animation, and responsive styles.
 * Parameterized by z-index, size, toolbar, and open state.
 */
function getOverlayClass({
  open,
  shouldAnimate,
  zIndex,
  hasToolbar,
  size,
}: {
  open: boolean;
  shouldAnimate: boolean;
  zIndex: number;
  hasToolbar: boolean;
  size: Size;
}): string {
  const maxWidth = hasToolbar
    ? getDrawerWidth({ size }).withToolbar
    : getDrawerWidth({ size }).default;
  const mobileTransitionDelay = open ? '0ms' : `${TRANSITION_DURATION}ms`;
  const id = `lg-drawer-overlay-${zIndex}-${maxWidth}-${open ? 'o' : 'c'}`;
  injectStyles(
    id,
    `
    .${id} {
      position: absolute;
      z-index: ${zIndex};
      top: 0;
      bottom: 0;
      right: 0;
      overflow: visible;
      max-width: ${maxWidth}px;
      transform: translate3d(100%, 0, 0);
      animation-timing-function: ${TRANSITION_TIMING_FUNCTION};
      animation-duration: ${TRANSITION_DURATION}ms;
      animation-fill-mode: forwards;
    }

    @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
      .${id} {
        top: unset;
        left: 0;
        animation: none;
        position: fixed;
        transform: translate3d(0, 100%, 0);
        transition-property: transform, opacity;
        transition-duration: ${TRANSITION_DURATION}ms;
        transition-timing-function: ${TRANSITION_TIMING_FUNCTION};
        transition-delay: 0ms, ${mobileTransitionDelay};
      }
    }
  `,
  );
  return cn(id, {
    [overlayOpenId]: open,
    [overlayClosedId]: !open && shouldAnimate,
  });
}

const getDisplayModeStyles = ({
  displayMode,
  open,
  shouldAnimate,
  zIndex,
  hasToolbar,
  size,
}: {
  displayMode: DisplayMode;
  open: boolean;
  shouldAnimate: boolean;
  zIndex: number;
  hasToolbar: boolean;
  size: Size;
}) =>
  cn({
    [getOverlayClass({ open, shouldAnimate, zIndex, hasToolbar, size })]:
      displayMode === DisplayMode.Overlay,
  });

export const getDrawerStyles = ({
  className,
  displayMode,
  open,
  shouldAnimate,
  theme,
  zIndex,
  hasToolbar = false,
  size,
}: {
  className?: string;
  displayMode: DisplayMode;
  open: boolean;
  shouldAnimate: boolean;
  theme: Theme;
  zIndex: number;
  hasToolbar?: boolean;
  size: Size;
}) =>
  cn(
    getBaseStylesClass(theme),
    getDisplayModeStyles({
      displayMode,
      open,
      shouldAnimate,
      zIndex,
      hasToolbar,
      size,
    }),
    className,
    drawerClassName,
  );

export const getResizerStyles = ({
  resizerClassName,
  hasToolbar = false,
}: {
  resizerClassName?: string;
  hasToolbar?: boolean;
}) =>
  cn(
    'absolute',
    hasToolbar
      ? `left-[${EMBEDDED_TOOLBAR_OVERFLOW_PADDING}px]`
      : 'left-0',
    resizerClassName,
  );

/**
 * Shadow styles for overlay drawer.
 * Composes addOverflowShadow classes with a theme-based background.
 *
 * On desktop, a left-side shadow is shown. On mobile, a top-side shadow
 * replaces it. Both use ::before, so a mobile media query override swaps
 * the positioning.
 */
export const getDrawerShadowStyles = ({
  theme,
  displayMode,
}: {
  theme: Theme;
  displayMode: DisplayMode;
}) => {
  const bgId = `lg-drawer-shadow-bg-${theme}`;
  injectStyles(
    bgId,
    `
    .${bgId} {
      height: 100%;
      background-color: ${color[theme].background.primary.default};
    }
  `,
  );

  // The left shadow class provides the desktop ::before pseudo-element.
  const leftShadow = addOverflowShadow({
    isInside: false,
    side: Side.Left,
    theme,
  });

  // We also need the top shadow's values on mobile.
  // Ensure the top shadow class is injected (for its positional styles), but
  // we only compose the left shadow class and override ::before on mobile.
  const topShadow = addOverflowShadow({
    isInside: false,
    side: Side.Top,
    theme,
  });

  // On mobile, swap from left shadow to top shadow by applying the top
  // shadow class and removing the left shadow class via specificity.
  const mobileOverrideId = `lg-drawer-shadow-mobile-${theme}`;
  injectStyles(
    mobileOverrideId,
    `
    @media only screen and (max-width: ${MOBILE_BREAKPOINT}px) {
      .${mobileOverrideId}.${leftShadow}::before {
        display: none;
      }
    }
  `,
  );

  return cn(bgId, {
    [cn(leftShadow, topShadow, mobileOverrideId)]:
      displayMode === DisplayMode.Overlay,
  });
};

/**
 * Inner container styles: background, opacity transition.
 */
function getBaseInnerContainerClass(theme: Theme): string {
  const id = `lg-drawer-inner-base-${theme}`;
  injectStyles(
    id,
    `
    .${id} {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      background-color: ${color[theme].background.primary.default};
      opacity: 0;
      transition-property: opacity;
      transition-duration: ${transitionDuration.faster}ms;
      transition-timing-function: ${TRANSITION_TIMING_FUNCTION};
    }
  `,
  );
  return id;
}

const innerOpenId = 'lg-drawer-inner-open';
injectStyles(
  innerOpenId,
  `
  .${innerOpenId} {
    transition-property: opacity;
    transition-duration: ${transitionDuration.slowest}ms;
    transition-timing-function: ${TRANSITION_TIMING_FUNCTION};
    transition-delay: ${transitionDuration.default}ms;
    opacity: 1;
  }
`,
);

export const getInnerContainerStyles = ({
  theme,
  open,
}: {
  theme: Theme;
  open: boolean;
}) =>
  cn(getBaseInnerContainerClass(theme), {
    [innerOpenId]: open,
  });

/**
 * Header styles: border, transition.
 */
export const getHeaderStyles = ({ theme }: { theme: Theme }): string => {
  const id = `lg-drawer-header-${theme}`;
  injectStyles(
    id,
    `
    .${id} {
      height: ${HEADER_HEIGHT}px;
      padding: ${spacing[400]}px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid ${color[theme].border.secondary.default};
      transition-property: box-shadow;
      transition-duration: ${transitionDuration.faster}ms;
      transition-timing-function: ${TRANSITION_TIMING_FUNCTION};
    }
  `,
  );
  return id;
};

export const titleStyles = [
  'grow',
  `font-[${fontWeights.semiBold}]`,
].join(' ');

const baseChildrenContainerStyles = 'h-full overflow-hidden';

export const getChildrenContainerStyles = ({
  hasShadowTop,
  theme,
}: {
  hasShadowTop: boolean;
  theme: Theme;
}) =>
  cn(baseChildrenContainerStyles, {
    [addOverflowShadow({ isInside: true, side: Side.Top, theme })]:
      hasShadowTop,
  });

export const getInnerChildrenContainerStyles = ({
  hasPadding,
  scrollable,
}: {
  hasPadding: boolean;
  scrollable: boolean;
}) =>
  cn({
    [`p-[${spacing[400]}px]`]: hasPadding,
    ['h-full overflow-y-auto overscroll-contain']: scrollable,
  });
