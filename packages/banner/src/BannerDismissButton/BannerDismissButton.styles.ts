import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';

import { Variant } from '../shared.types';

export const baseStyles = [
  'w-[24px]',
  'h-[24px]',
  'absolute',
  'right-[8px]',
  'top-[8px]',
  'shrink-0',
  'cursor-pointer',
].join(' ');

const darkModeInfoStyles = [
  `text-[${palette.blue.light2}]`,
  `active:text-[${palette.blue.light2}]`,
  `hover:text-[${palette.blue.light2}]`,
  `focus-visible:text-[${palette.blue.light2}]`,
  `active:shadow-[0_0_0_2px_${palette.blue.dark3},0_0_0_4px_${palette.blue.light1}]`,
  `hover:shadow-[0_0_0_2px_${palette.blue.dark3},0_0_0_4px_${palette.blue.light1}]`,
  `focus-visible:shadow-[0_0_0_2px_${palette.blue.dark3},0_0_0_4px_${palette.blue.light1}]`,
  `active:before:bg-[${palette.blue.dark2}]`,
  `hover:before:bg-[${palette.blue.dark2}]`,
  `focus-visible:before:bg-[${palette.blue.dark2}]`,
].join(' ');

const darkModeWarningStyles = [
  `text-[${palette.yellow.light2}]`,
  `active:text-[${palette.yellow.light2}]`,
  `hover:text-[${palette.yellow.light2}]`,
  `focus-visible:text-[${palette.yellow.light2}]`,
  `active:shadow-[0_0_0_2px_${palette.yellow.dark3},0_0_0_4px_${palette.blue.light1}]`,
  `hover:shadow-[0_0_0_2px_${palette.yellow.dark3},0_0_0_4px_${palette.blue.light1}]`,
  `focus-visible:shadow-[0_0_0_2px_${palette.yellow.dark3},0_0_0_4px_${palette.blue.light1}]`,
  `active:before:bg-[${palette.yellow.dark2}]`,
  `hover:before:bg-[${palette.yellow.dark2}]`,
  `focus-visible:before:bg-[${palette.yellow.dark2}]`,
].join(' ');

const darkModeDangerStyles = [
  `text-[${palette.red.light2}]`,
  `active:text-[${palette.red.light2}]`,
  `hover:text-[${palette.red.light2}]`,
  `focus-visible:text-[${palette.red.light2}]`,
  `active:shadow-[0_0_0_2px_${palette.red.dark3},0_0_0_4px_${palette.blue.light1}]`,
  `hover:shadow-[0_0_0_2px_${palette.red.dark3},0_0_0_4px_${palette.blue.light1}]`,
  `focus-visible:shadow-[0_0_0_2px_${palette.red.dark3},0_0_0_4px_${palette.blue.light1}]`,
  `active:before:bg-[${palette.red.dark2}]`,
  `hover:before:bg-[${palette.red.dark2}]`,
  `focus-visible:before:bg-[${palette.red.dark2}]`,
].join(' ');

const darkModeSuccessStyles = [
  `text-[${palette.green.light2}]`,
  `active:text-[${palette.green.light2}]`,
  `hover:text-[${palette.green.light2}]`,
  `focus-visible:text-[${palette.green.light2}]`,
  `active:shadow-[0_0_0_2px_${palette.green.dark3},0_0_0_4px_${palette.blue.light1}]`,
  `hover:shadow-[0_0_0_2px_${palette.green.dark3},0_0_0_4px_${palette.blue.light1}]`,
  `focus-visible:shadow-[0_0_0_2px_${palette.green.dark3},0_0_0_4px_${palette.blue.light1}]`,
  `active:before:bg-[${palette.green.dark2}]`,
  `hover:before:bg-[${palette.green.dark2}]`,
  `focus-visible:before:bg-[${palette.green.dark2}]`,
].join(' ');

const lightModeInfoStyles = [
  `text-[${palette.blue.dark2}]`,
  `active:text-[${palette.blue.dark2}]`,
  `hover:text-[${palette.blue.dark2}]`,
  `focus-visible:text-[${palette.blue.dark2}]`,
  `active:before:bg-[${palette.blue.light2}]`,
  `hover:before:bg-[${palette.blue.light2}]`,
  `focus-visible:before:bg-[${palette.blue.light2}]`,
].join(' ');

const lightModeWarningStyles = [
  `text-[${palette.yellow.dark2}]`,
  `active:text-[${palette.yellow.dark2}]`,
  `hover:text-[${palette.yellow.dark2}]`,
  `focus-visible:text-[${palette.yellow.dark2}]`,
  `active:before:bg-[${palette.yellow.light2}]`,
  `hover:before:bg-[${palette.yellow.light2}]`,
  `focus-visible:before:bg-[${palette.yellow.light2}]`,
].join(' ');

const lightModeDangerStyles = [
  `text-[${palette.red.dark2}]`,
  `active:text-[${palette.red.dark2}]`,
  `hover:text-[${palette.red.dark2}]`,
  `focus-visible:text-[${palette.red.dark2}]`,
  `active:before:bg-[${palette.red.light2}]`,
  `hover:before:bg-[${palette.red.light2}]`,
  `focus-visible:before:bg-[${palette.red.light2}]`,
].join(' ');

const lightModeSuccessStyles = [
  `text-[${palette.green.dark2}]`,
  `active:text-[${palette.green.dark2}]`,
  `hover:text-[${palette.green.dark2}]`,
  `focus-visible:text-[${palette.green.dark2}]`,
  `active:before:bg-[${palette.green.light2}]`,
  `hover:before:bg-[${palette.green.light2}]`,
  `focus-visible:before:bg-[${palette.green.light2}]`,
].join(' ');

export const variantStyles: Record<Theme, Record<Variant, string>> = {
  [Theme.Dark]: {
    [Variant.Info]: darkModeInfoStyles,
    [Variant.Warning]: darkModeWarningStyles,
    [Variant.Danger]: darkModeDangerStyles,
    [Variant.Success]: darkModeSuccessStyles,
  },
  [Theme.Light]: {
    [Variant.Info]: lightModeInfoStyles,
    [Variant.Warning]: lightModeWarningStyles,
    [Variant.Danger]: lightModeDangerStyles,
    [Variant.Success]: lightModeSuccessStyles,
  },
};
