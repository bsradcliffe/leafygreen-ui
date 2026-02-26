import { Theme } from '@leafygreen-ui/lib';

export const inlineKeyCodeStyles =
  "font-[\'Source_Code_Pro\',Menlo,monospace] border border-solid rounded-[3px] pl-[5px] pr-[5px]";

export const inlineKeyCodeColor: Record<Theme, string> = {
  [Theme.Light]: 'text-[#001E2B] border-[#1C2D38] bg-[#FFFFFF]',
  [Theme.Dark]: 'text-[#E8EDEB] border-[#889397] bg-[#1C2D38]',
};
