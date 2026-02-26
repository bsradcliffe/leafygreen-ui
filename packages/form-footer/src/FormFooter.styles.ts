import { Theme } from '@leafygreen-ui/lib';
import { addOverflowShadow, Side, spacing } from '@leafygreen-ui/tokens';

const MIN_HEIGHT = 92;

const footerBaseStyle = 'w-full';

const footerThemeStyle: Record<Theme, string> = {
  [Theme.Light]: 'bg-[#FFFFFF]',
  [Theme.Dark]: 'bg-[#001E2B] border-t border-solid border-[#3D4F58]',
};

const innerContainerBaseStyle = [
  `min-h-[${MIN_HEIGHT}px]`,
  'w-full',
  `p-[${spacing[600]}px]`,
  'flex',
  'items-center',
  'bg-inherit',
  '[&_button]:whitespace-nowrap',
].join(' ');

const contentStyle = [
  'flex',
  'items-center',
  `gap-[${spacing[200]}px]`,
  'w-full',
].join(' ');

export const flexEndContent = [
  'ml-auto',
  'inline-flex',
  'items-center',
  'gap-[inherit]',
].join(' ');

export const bannerStyle = [
  'grow-0',
  'py-[7px]',
  'max-w-[700px]',
].join(' ');

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

export const getFormFooterStyles = ({
  theme,
  className,
}: {
  theme: Theme;
  className?: string;
}) => cn(footerBaseStyle, footerThemeStyle[theme], className);

export const getInnerContainerStyles = ({ theme }: { theme: Theme }) =>
  cn(
    innerContainerBaseStyle,
    addOverflowShadow({ side: Side.Top, theme, isInside: false }),
  );

export const getContentStyles = (contentClassName?: string) =>
  cn(contentStyle, contentClassName);
