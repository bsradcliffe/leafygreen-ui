import { palette } from '@leafygreen-ui/palette';

import { cn } from '../cn';

export const timeout1 = 400;
export const timeout2 = 100;

const size = 24;

/**
 * Returns Tailwind class strings for the beacon element.
 *
 * Due to the complexity of the multi-keyframe animation (pulse-outer, pulse-outer-2, pulse-inner),
 * the animated variant uses inline `style` objects instead of Tailwind utility classes.
 * Tailwind does not support defining or referencing custom @keyframes within utility classes.
 */
export const beaconStyles = (
  prefersReducedMotion: boolean,
  darkMode: boolean,
) => {
  const color = darkMode ? palette.blue.light2 : palette.blue.base;

  // Shared styles for the wrapper and inner div
  const sharedStyles = [
    'relative',
    `[&>div]:w-[${size}px]`,
    `[&>div]:h-[${size}px]`,
    '[&>div]:rounded-full',
    `[&>div]:bg-[${color}80]`, // 50% opacity hex
    '[&>div]:origin-center',
    '[&>div]:relative',
  ].join(' ');

  if (prefersReducedMotion) {
    return cn(
      sharedStyles,
      `[&>div]:shadow-[0px_0px_0px_4px_${color}2B]`, // ~17% opacity
    );
  }

  // For animation, we return just the shared styles.
  // The animation keyframes must be applied via inline styles or a global stylesheet,
  // since Tailwind does not support custom @keyframes definitions in utility classes.
  return sharedStyles;
};

/**
 * Inline style objects for the beacon animation.
 * These are needed because Tailwind cannot define custom @keyframes.
 */
export const getBeaconAnimationStyles = (darkMode: boolean) => {
  const color = darkMode ? palette.blue.light2 : palette.blue.base;

  const wrapperStyle: React.CSSProperties = {
    position: 'relative',
  };

  const innerDivStyle: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    backgroundColor: `${color}80`,
    transformOrigin: 'center',
    position: 'relative',
    animation: 'pulse-inner 2.3s infinite cubic-bezier(0.42, 0, 0.58, 0.72)',
  };

  const beforeStyle: React.CSSProperties = {
    content: '""',
    position: 'absolute',
    borderRadius: '50%',
    translate: '-50% -50%',
    top: '50%',
    left: '50%',
    scale: '0.9',
    opacity: 0,
    width: `${size}px`,
    height: `${size}px`,
    background: 'rgba(255, 255, 255, 0)',
    boxShadow: `0px 0px 0px 0px ${color}00`,
    animation: 'pulse-outer 2.3s infinite cubic-bezier(0.42, 0, 0.61, 0.69)',
  };

  const afterStyle: React.CSSProperties = {
    content: '""',
    position: 'absolute',
    borderRadius: '50%',
    translate: '-50% -50%',
    top: '50%',
    left: '50%',
    scale: '0.9',
    opacity: 0,
    width: `${size}px`,
    height: `${size}px`,
    background: 'rgba(255, 255, 255, 0)',
    boxShadow: `0px 0px 0px 0px ${color}00`,
    animation:
      'pulse-outer-2 2.3s infinite cubic-bezier(0.42, 0, 0.46, 0.72)',
  };

  const keyframes = `
    @keyframes pulse-outer {
      10% {
        box-shadow: 0px 0px 0px 0px ${color}0D;
        opacity: 1;
      }
      40%, 100% {
        scale: 1;
        box-shadow: 0px 0px 0px 15px ${color}4D;
        opacity: 0;
      }
    }
    @keyframes pulse-outer-2 {
      10% {
        box-shadow: 0px 0px 0px 0px ${color}0D;
        opacity: 1;
      }
      35%, 100% {
        scale: 1;
        box-shadow: 0px 0px 0px 18px ${color}4D;
        opacity: 0;
      }
    }
    @keyframes pulse-inner {
      40% {
        scale: 1.3;
      }
      73% {
        scale: 1;
      }
    }
  `;

  return {
    wrapperStyle,
    innerDivStyle,
    beforeStyle,
    afterStyle,
    keyframes,
  };
};
