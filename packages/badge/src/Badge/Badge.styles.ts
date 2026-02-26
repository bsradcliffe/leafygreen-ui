import { Theme } from '@leafygreen-ui/lib';

import { Variant } from './Badge.types';

export const baseStyle = [
  "font-family-['Euclid_Circular_A','Helvetica_Neue',Helvetica,Arial,sans-serif]",
  'inline-flex',
  'items-center',
  'font-semibold',
  'text-[12px]',
  'leading-[16px]',
  'rounded-[24px]',
  'h-[18px]',
  'px-[6px]',
  'uppercase',
  'border',
  'border-solid',
  'tracking-[0.4px]',
].join(' ');

export const badgeVariants: Record<Theme, Record<Variant, string>> = {
  [Theme.Dark]: {
    [Variant.LightGray]: 'bg-[#1C2D38] border-[#3D4F58] text-[#E8EDEB]',
    [Variant.DarkGray]: 'bg-[#5C6C75] border-[#889397] text-[#F9FBFA]',
    [Variant.Red]: 'bg-[#5B0000] border-[#970606] text-[#FFCDC7]',
    [Variant.Yellow]: 'bg-[#4C2100] border-[#944F01] text-[#FFEC9E]',
    [Variant.Blue]: 'bg-[#083C90] border-[#1254B7] text-[#C3E7FE]',
    [Variant.Green]: 'bg-[#023430] border-[#00684A] text-[#71F6BA]',
    [Variant.Purple]: 'bg-[#5E0C9E] border-[#B45AF2] text-[#F1D4FD]',
  },
  [Theme.Light]: {
    [Variant.LightGray]: 'bg-[#F9FBFA] border-[#E8EDEB] text-[#5C6C75]',
    [Variant.DarkGray]: 'bg-[#3D4F58] border-[#1C2D38] text-[#FFFFFF]',
    [Variant.Red]: 'bg-[#FFEAE5] border-[#FFCDC7] text-[#970606]',
    [Variant.Yellow]: 'bg-[#FEF7DB] border-[#FFEC9E] text-[#944F01]',
    [Variant.Blue]: 'bg-[#E1F7FF] border-[#C3E7FE] text-[#1254B7]',
    [Variant.Green]: 'bg-[#E3FCF7] border-[#C0FAE6] text-[#00684A]',
    [Variant.Purple]: 'bg-[#F9EBFF] border-[#F1D4FD] text-[#5E0C9E]',
  },
} as const;
