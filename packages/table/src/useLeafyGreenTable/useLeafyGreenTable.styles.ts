import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';

export const disabledTableRowCheckStyles: Record<Theme, string> = {
  [Theme.Light]: [
    `[&_input+div]:border-[${palette.gray.light1}]`,
    `[&_input+div]:bg-[${palette.gray.light2}]`,
    `[&_input[aria-checked='true']+div]:before:bg-[${palette.gray.light1}]`,
    `[&_input[aria-checked='true']+div_path]:stroke-[${palette.white}]`,
  ].join(' '),
  [Theme.Dark]: [
    `[&_input+div]:border-[${palette.gray.dark1}]`,
    `[&_input+div]:bg-[${palette.gray.dark2}]`,
    `[&_input[aria-checked='true']+div]:before:bg-[${palette.gray.dark1}]`,
    `[&_input[aria-checked='true']+div_path]:stroke-[${palette.gray.base}]`,
  ].join(' '),
};
