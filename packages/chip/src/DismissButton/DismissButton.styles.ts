import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { transitionDuration } from '@leafygreen-ui/tokens';

import { variantColor as chipVariantColor } from '../Chip/Chip.styles';
import { Variant } from '../Chip/Chip.types';

export const variantColor: Record<
  Variant,
  Record<
    Theme,
    {
      color: string;
      focusBgColor: string;
      hoverBgColor: string;
      hoverFocusColor: string;
    }
  >
> = {
  [Variant.Blue]: {
    [Theme.Dark]: {
      color: palette.blue.light2,
      focusBgColor: chipVariantColor[Variant.Blue][Theme.Dark].background.focus,
      hoverBgColor: palette.blue.dark2,
      hoverFocusColor: palette.blue.light3,
    },
    [Theme.Light]: {
      color: palette.blue.dark3,
      focusBgColor:
        chipVariantColor[Variant.Blue][Theme.Light].background.focus,
      hoverBgColor: palette.blue.light2,
      hoverFocusColor: palette.blue.dark3,
    },
  },
  [Variant.Red]: {
    [Theme.Dark]: {
      color: palette.red.light2,
      focusBgColor: chipVariantColor[Variant.Red][Theme.Dark].background.focus,
      hoverBgColor: palette.red.dark2,
      hoverFocusColor: palette.red.light3,
    },
    [Theme.Light]: {
      color: palette.red.dark3,
      focusBgColor: chipVariantColor[Variant.Red][Theme.Light].background.focus,
      hoverBgColor: palette.red.light2,
      hoverFocusColor: palette.red.dark3,
    },
  },
  [Variant.Gray]: {
    [Theme.Dark]: {
      color: palette.gray.light1,
      focusBgColor: chipVariantColor[Variant.Gray][Theme.Dark].background.focus,
      hoverBgColor: palette.gray.dark1,
      hoverFocusColor: palette.gray.light3,
    },
    [Theme.Light]: {
      color: palette.gray.dark2,
      focusBgColor:
        chipVariantColor[Variant.Gray][Theme.Light].background.focus,
      hoverBgColor: palette.gray.light1,
      hoverFocusColor: palette.black,
    },
  },
  [Variant.Green]: {
    [Theme.Dark]: {
      color: palette.green.light2,
      focusBgColor:
        chipVariantColor[Variant.Green][Theme.Dark].background.focus,
      hoverBgColor: palette.green.dark2,
      hoverFocusColor: palette.green.light3,
    },
    [Theme.Light]: {
      color: palette.green.dark3,
      focusBgColor:
        chipVariantColor[Variant.Green][Theme.Light].background.focus,
      hoverBgColor: palette.green.light2,
      hoverFocusColor: palette.green.dark3,
    },
  },
  [Variant.Purple]: {
    [Theme.Dark]: {
      color: palette.purple.light2,
      focusBgColor:
        chipVariantColor[Variant.Purple][Theme.Dark].background.focus,
      hoverBgColor: palette.purple.dark2,
      hoverFocusColor: palette.purple.light3,
    },
    [Theme.Light]: {
      color: palette.purple.dark3,
      focusBgColor:
        chipVariantColor[Variant.Purple][Theme.Light].background.focus,
      hoverBgColor: palette.purple.light2,
      hoverFocusColor: palette.purple.dark3,
    },
  },
  [Variant.Yellow]: {
    [Theme.Dark]: {
      color: palette.yellow.light2,
      focusBgColor:
        chipVariantColor[Variant.Yellow][Theme.Dark].background.focus,
      hoverBgColor: palette.yellow.dark2,
      hoverFocusColor: palette.yellow.light3,
    },
    [Theme.Light]: {
      color: palette.yellow.dark3,
      focusBgColor:
        chipVariantColor[Variant.Yellow][Theme.Light].background.focus,
      hoverBgColor: palette.yellow.light2,
      hoverFocusColor: palette.yellow.dark3,
    },
  },
  [Variant.White]: {
    [Theme.Dark]: {
      color: palette.gray.light1,
      focusBgColor:
        chipVariantColor[Variant.White][Theme.Dark].background.focus,
      hoverBgColor: palette.gray.base,
      hoverFocusColor: palette.gray.light3,
    },
    [Theme.Light]: {
      color: palette.gray.dark2,
      focusBgColor:
        chipVariantColor[Variant.White][Theme.Light].background.focus,
      hoverBgColor: palette.gray.light2,
      hoverFocusColor: palette.black,
    },
  },
};

export const dismissButtonBaseStyle = [
  'relative',
  'flex',
  'items-center',
  'justify-center',
  'w-full',
  'outline-none',
  'border-none',
  'bg-transparent',
  'cursor-pointer',
  `[transition:background-color_${transitionDuration.faster}ms_ease-in-out]`,
  'px-[2px]',
  'py-0',
  'self-stretch',
].join(' ');

export const dismissButtonThemeStyle = (variant: Variant, theme: Theme) =>
  [
    `text-[${variantColor[variant][theme].color}]`,
    `[&:not(:disabled)]:hover:bg-[${variantColor[variant][theme].hoverBgColor}]`,
    `[&:not(:disabled)]:hover:text-[${variantColor[variant][theme].hoverFocusColor}]`,
    `focus-visible:text-[${variantColor[variant][theme].hoverFocusColor}]`,
    `focus-visible:bg-[${variantColor[variant][theme].focusBgColor}]`,
    `focus-visible:[&:not(:disabled)]:hover:bg-[${variantColor[variant][theme].hoverBgColor}]`,
  ].join(' ');

export const dismissButtonBaseDisabledStyles = [
  'disabled:cursor-not-allowed',
  'disabled:pointer-events-none',
].join(' ');

export const dismissButtonDisabledStyle: Record<Theme, string> = {
  [Theme.Light]: `disabled:text-[${palette.gray.light1}]`,
  [Theme.Dark]: `disabled:text-[${palette.gray.dark2}]`,
};
