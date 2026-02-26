import { Size } from '../types';

// typeScales.body1.fontSize = 13px

// base styles
export const basePipelineStyles =
  'flex [counter-reset:hiddenCount] font-semibold';

export const basePipelineListStyles =
  'flex grow flex-wrap overflow-hidden list-none p-0 m-0 min-w-[74px]';

export const counterVisibleStyles = 'flex';

export const baseSizeStyles: Record<Size, string> = {
  [Size.XSmall]: 'text-[13px] h-[22px]',
  [Size.Small]: 'text-[13px] h-[28px]',
  [Size.Normal]: 'text-[13px] h-[36px]',
  [Size.Large]: 'text-[18px] h-[48px]',
};

export const tooltipStyles = 'max-w-[400px]';
