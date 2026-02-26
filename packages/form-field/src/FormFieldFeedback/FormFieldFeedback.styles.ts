import { Size } from '@leafygreen-ui/tokens';

export const containerStyles = 'flex gap-[4px]';

export const spacingTop = 'pt-[4px]';

export const hideContainerStyle = 'opacity-0';

export const iconWrapperStyles = 'flex justify-center items-center';

export const getIconWrapperHeight = (size: Size) => {
  return size === Size.Large ? 'h-[24px]' : 'h-[20px]';
};
