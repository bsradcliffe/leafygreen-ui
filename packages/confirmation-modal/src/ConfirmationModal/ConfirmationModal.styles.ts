import { Theme } from '@leafygreen-ui/lib';

import { Variant } from './ConfirmationModal.types';

export const titleStyle = 'leading-[32px] mb-[10px]';

export const baseModalStyle = 'w-[600px] p-0 tracking-[0px]';

/** font-size: 13px, line-height: 20px (body1 typeScale) */
export const contentStyle = 'text-[13px] leading-[20px]';

export const contentDarkModeStyles = 'text-[#C1C7C6]';

export const contentVariantStyles: Record<Variant, string> = {
  [Variant.Default]: 'pt-[40px] px-[36px] pb-0',
  [Variant.Danger]: 'pt-[40px] pr-[36px] pb-0 pl-[78px]',
};

/**
 * The nested label selector (`label { margin-bottom: 3px }`) is converted to
 * a Tailwind arbitrary variant on child `label` elements.
 */
export const textEntryInputStyle =
  'w-[300px] mt-[14px] [&_label]:mb-[3px]';

/** margin-left: 8px (spacing[200]) */
export const buttonStyle = 'ml-[8px]';

export const warningIconStyle = [
  'w-[32px]',
  'h-[32px]',
  'rounded-full',
  'flex',
  'items-center',
  'justify-center',
  'absolute',
  'left-[36px]',
  'top-[40px]',
  '[&_svg]:mt-[-3px]',
].join(' ');

export const warningIconThemeStyle: Record<Theme, string> = {
  [Theme.Light]: 'bg-[#FFEAE5]',
  [Theme.Dark]: 'bg-[#970606]',
};
