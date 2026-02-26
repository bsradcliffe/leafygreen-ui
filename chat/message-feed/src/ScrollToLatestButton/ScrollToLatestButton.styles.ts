import { borderRadius, spacing } from '@leafygreen-ui/tokens';

export const scrollButtonContainerStyles = [
  'absolute',
  `bottom-[${spacing[400]}px]`,
].join(' ');

export const scrollButtonStyles = [
  `shadow-[0_${spacing[50]}px_${spacing[100]}px_rgba(0,0,0,0.2)]`,
  `rounded-[${borderRadius[400]}px]`,
].join(' ');
