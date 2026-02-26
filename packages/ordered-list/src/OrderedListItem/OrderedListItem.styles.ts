import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';

export const stepIconClassName = createUniqueClassName('step');

// spacing[200] = 8px, spacing[100] = 4px
// MARKER_SIZE = 20px
export const baseStyles =
  'flex gap-[8px] mb-[4px]';

export const contentStyles = 'w-full';

export const markerStyles =
  'rounded-full flex items-center justify-center border border-solid w-[20px] h-[20px] relative text-[12px] font-medium';

export const titleStyles = 'font-bold leading-[unset]';

// Light: color[light].text.primary.default = #001E2B, border.primary.default = #889397
// Dark:  color[dark].text.primary.default = #E8EDEB, border.primary.default = #889397
export const themedStateStyles: Record<Theme, string> = {
  [Theme.Light]:
    'text-[#001E2B] bg-[rgba(255,255,255,0)] border-[#889397]',
  [Theme.Dark]:
    'text-[#E8EDEB] bg-[rgba(255,255,255,0)] border-[#889397]',
};
