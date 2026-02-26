import { Theme } from '@leafygreen-ui/lib';
import { injectStyles } from '@leafygreen-ui/lib';

import { Size } from './Skeleton.types';

/**
 * Inject the skeleton shimmer keyframe animation once at module load.
 */
injectStyles(
  'lg-skeleton-loader-keyframes',
  `
@keyframes SkeletonShimmer {
  to {
    background-position: 100vw 0;
  }
}
`,
);

/**
 * Base styles for all skeleton elements.
 * When animations are enabled, a shimmer keyframe runs on the background-position.
 */
export const skeletonBaseStyles =
  'w-full rounded-[6px] bg-[position:50vw_0]';

export const skeletonAnimationStyles =
  'animate-[SkeletonShimmer_1.5s_linear_infinite]';

/**
 * Returns the combined base + animation styles string.
 * Exported for use by IconSkeleton.
 */
export const getSkeletonBaseStyles = ({
  enableAnimations,
}: {
  enableAnimations: boolean;
}) =>
  enableAnimations
    ? `${skeletonBaseStyles} ${skeletonAnimationStyles}`
    : skeletonBaseStyles;

export const rootStyles = 'w-full rounded-[6px]';

export const sizeStyles: Record<Size, string> = {
  [Size.Small]: 'h-[16px]',
  [Size.Default]: 'h-[32px]',
  [Size.Large]: 'h-[48px]',
};

export const themeStyles: Record<Theme, string> = {
  [Theme.Dark]:
    '[background:linear-gradient(110deg,#3D4F58_35%,#5C6C75,#3D4F58_65%)_0_0/100vw_100%_fixed]',
  [Theme.Light]:
    '[background:linear-gradient(110deg,#E8EDEB_35%,#F9FBFA,#E8EDEB_65%)_0_0/100vw_100%_fixed]',
};
