import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';

export const anchorClassName = createUniqueClassName();

export const code =
  "inline transition-all duration-150 ease-in-out rounded-[3px] font-[\'Source_Code_Pro\',Menlo,monospace] leading-[20px] group-hover:no-underline";

export const codeModes: Record<Theme, string> = {
  [Theme.Light]:
    'bg-[#F9FBFA] border border-[#E8EDEB] text-[#1C2D38] group-hover:shadow-[0_0_0_3px_#E8EDEB] group-hover:border-[#C1C7C6]',
  [Theme.Dark]:
    'bg-[#112733] border border-[#3D4F58] text-[#C1C7C6] group-hover:shadow-[0_0_0_3px_#3D4F58] group-hover:border-[#5C6C75]',
};

export const codeFocusModes: Record<Theme, string> = {
  [Theme.Light]:
    'group-focus-visible:shadow-[0_0_0_2px_#FFFFFF,0_0_0_4px_#016BF8] group-focus-visible:border-[#016BF8]',
  [Theme.Dark]:
    'group-focus-visible:shadow-[0_0_0_2px_#001E2B,0_0_0_4px_#0498EC] group-focus-visible:border-[#016BF8]',
};

export const codeLinkStyleModes: Record<Theme, string> = {
  [Theme.Light]: 'text-[#016BF8]',
  [Theme.Dark]: 'text-[#0498EC]',
};

export const codeLinkWrapper =
  'no-underline m-0 p-0 leading-[20px] focus:outline-none';

export const nowrap = 'whitespace-nowrap';

export const normal = 'whitespace-normal';
