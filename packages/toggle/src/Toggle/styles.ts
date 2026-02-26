import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import {
  focusRing,
  hoverRing,
  transitionDuration,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';

import { Size } from './types';

/**
 * The transition duration in ms used for toggle animations.
 */
const duration = transitionDuration.default;

/**
 * Converts a CSS box-shadow value to Tailwind arbitrary value syntax.
 * Replaces spaces with underscores within each shadow layer while
 * preserving comma separators between layers.
 */
const toTwShadow = (value: string): string =>
  value
    .split(',')
    .map(s => s.trim().replace(/ /g, '_'))
    .join(',');

// ── Button base styles ──────────────────────────────────────────────────

const buttonBase = [
  `transition-all`,
  `duration-[${duration}ms]`,
  'ease-in-out',
  'inline-block',
  'shrink-0',
  'relative',
  'p-0',
  'rounded-[50px]',
  'border',
  'border-solid',
  'cursor-pointer',

  // &:disabled
  'disabled:cursor-not-allowed',

  // &:focus
  'focus:outline-none',

  // Pseudo-element for the groove background animation.
  // In the unchecked state it is scaled down and transparent;
  // when checked it scales up to full size and becomes opaque.
  "before:content-['']",
  `before:transition-all`,
  `before:duration-[${duration}ms]`,
  'before:ease-in-out',
  'before:absolute',
  'before:inset-0',
  'before:rounded-[50px]',
  'before:opacity-0',
  'before:scale-[0.85]',
].join(' ');

/**
 * Styles applied to the button when `aria-checked="true"`.
 * The transition-delay and before pseudo-element transform are
 * activated when the toggle is in the checked state.
 */
const buttonCheckedBase = [
  `delay-[${duration}ms]`,
  'before:scale-100',
  'before:opacity-100',
].join(' ');

/**
 * When disabled + checked the ::before overlay should stay hidden.
 */
const buttonDisabledBefore = 'before:opacity-0';

// ── Button size styles ──────────────────────────────────────────────────

export const buttonSizeStyles: Record<Size, string> = {
  [Size.Default]: 'h-[32px] w-[56px]',
  [Size.Small]: 'h-[22px] w-[40px]',
  [Size.XSmall]: 'h-[14px] w-[24px]',
};

// ── Button theme styles ─────────────────────────────────────────────────

interface ButtonThemeStylesOptions {
  checked: boolean;
  disabled: boolean;
}

const buttonThemeLight = ({ checked, disabled }: ButtonThemeStylesOptions) =>
  cn(
    // ::before background (groove checked colour)
    `before:bg-[${palette.blue.base}]`,

    // hover ring
    `hover:enabled:shadow-[${toTwShadow(hoverRing.light.gray)}]`,

    // focus ring
    `focus-visible:enabled:shadow-[${toTwShadow(focusRing.light.default)}]`,

    // state-dependent colours
    !disabled &&
      !checked &&
      `bg-[${palette.gray.base}] border-[${palette.gray.base}]`,
    checked && `bg-[${palette.blue.base}] border-[${palette.blue.base}]`,
    disabled && `bg-[${palette.gray.light2}] border-[${palette.gray.light2}]`,
  );

const buttonThemeDark = ({ checked, disabled }: ButtonThemeStylesOptions) =>
  cn(
    `before:bg-[${palette.blue.light1}]`,

    `hover:enabled:shadow-[${toTwShadow(hoverRing.dark.gray)}]`,

    `focus-visible:enabled:shadow-[${toTwShadow(focusRing.dark.default)}]`,

    !disabled &&
      !checked &&
      `bg-[${palette.gray.dark1}] border-[${palette.gray.dark1}]`,
    checked && `bg-[${palette.blue.light1}] border-[${palette.blue.light1}]`,
    disabled && `bg-[${palette.gray.dark2}] border-[${palette.gray.dark2}]`,
  );

const buttonThemeStyles: Record<
  Theme,
  (opts: ButtonThemeStylesOptions) => string
> = {
  [Theme.Light]: buttonThemeLight,
  [Theme.Dark]: buttonThemeDark,
};

// ── Slider base styles ──────────────────────────────────────────────────

const sliderBase = [
  `transition-all`,
  `duration-[${duration}ms]`,
  'ease-in-out',
  'rounded-full',
  'absolute',
  'top-0',
  'bottom-0',
  'm-auto',
  'overflow-hidden',
  'translate-x-0',
  'translate-y-0',
  'flex',
  'justify-center',
  'items-center',

  // pseudo-elements for overlay effects
  "before:content-['']",
  'before:absolute',
  'before:inset-0',
  "after:content-['']",
  'after:absolute',
  'after:inset-0',
].join(' ');

/** When disabled, remove pseudo-element content from slider */
const sliderDisabledOverride = [
  'before:content-none',
  'after:content-none',
].join(' ');

// ── Slider size styles ──────────────────────────────────────────────────

interface SliderSizeStylesOptions {
  checked: boolean;
}

const sliderSizeDefault = ({ checked }: SliderSizeStylesOptions) =>
  cn(
    'h-[28px] w-[28px] left-[1px]',
    checked && 'translate-x-[24px]',
  );

const sliderSizeSmall = ({ checked }: SliderSizeStylesOptions) =>
  cn(
    'h-[18px] w-[18px] left-[1px]',
    checked && 'translate-x-[18px]',
  );

const sliderSizeXSmall = ({ checked }: SliderSizeStylesOptions) =>
  cn(
    'h-[12px] w-[12px]',
    checked && 'translate-x-[10px]',
  );

const sliderSizeStyles: Record<
  Size,
  (opts: SliderSizeStylesOptions) => string
> = {
  [Size.Default]: sliderSizeDefault,
  [Size.Small]: sliderSizeSmall,
  [Size.XSmall]: sliderSizeXSmall,
};

// ── Slider theme styles ─────────────────────────────────────────────────

interface SliderThemeStylesOptions {
  disabled: boolean;
}

const sliderThemeLight = ({ disabled }: SliderThemeStylesOptions) =>
  cn(
    !disabled && `bg-[${palette.white}]`,
    disabled && `bg-[${palette.gray.light3}]`,
  );

const sliderThemeDark = ({ disabled }: SliderThemeStylesOptions) =>
  cn(
    !disabled && `bg-[${palette.white}]`,
    disabled && `bg-[${palette.gray.dark1}]`,
  );

const sliderThemeStyles: Record<
  Theme,
  (opts: SliderThemeStylesOptions) => string
> = {
  [Theme.Light]: sliderThemeLight,
  [Theme.Dark]: sliderThemeDark,
};

// ── Checkmark styles ────────────────────────────────────────────────────

const checkmarkBase = [
  'flex',
  `transition-[color]`,
  `duration-[${duration}ms]`,
  'ease-in-out',
].join(' ');

interface CheckmarkThemeStylesOptions {
  checked: boolean;
  disabled: boolean;
}

const checkmarkThemeLight = ({
  checked,
  disabled,
}: CheckmarkThemeStylesOptions) =>
  cn(
    !disabled && checked && `text-[${palette.blue.base}]`,
    !disabled && !checked && `text-[${palette.white}]`,
    disabled && checked && `text-[${palette.gray.light1}]`,
    disabled && !checked && `text-[${palette.gray.light3}]`,
  );

const checkmarkThemeDark = ({
  checked,
  disabled,
}: CheckmarkThemeStylesOptions) =>
  cn(
    !disabled && checked && `text-[${palette.blue.light1}]`,
    !disabled && !checked && `text-[${palette.white}]`,
    disabled && checked && `text-[${palette.gray.dark2}]`,
    disabled && !checked && `text-[${palette.gray.dark1}]`,
  );

const checkmarkThemeStyles: Record<
  Theme,
  (opts: CheckmarkThemeStylesOptions) => string
> = {
  [Theme.Light]: checkmarkThemeLight,
  [Theme.Dark]: checkmarkThemeDark,
};

// ── Checkmark icon size ─────────────────────────────────────────────────

export const checkmarkSize: Omit<Record<Size, number>, 'xsmall'> = {
  [Size.Default]: 16,
  [Size.Small]: 14,
};

// ── Public getter functions ─────────────────────────────────────────────

interface ToggleState {
  checked: boolean;
  disabled: boolean;
}

export const getButtonStyles = ({
  className,
  size,
  theme,
  checked,
  disabled,
}: ToggleState & {
  className?: string;
  size: Size;
  theme: Theme;
}) =>
  cn(
    buttonBase,
    buttonSizeStyles[size],
    buttonThemeStyles[theme]({ checked, disabled }),
    checked && buttonCheckedBase,
    disabled && buttonDisabledBefore,
    className,
  );

export const getSliderStyles = ({
  size,
  theme,
  checked,
  disabled,
}: ToggleState & {
  size: Size;
  theme: Theme;
}) =>
  cn(
    sliderBase,
    sliderSizeStyles[size]({ checked }),
    sliderThemeStyles[theme]({ disabled }),
    disabled && sliderDisabledOverride,
  );

export const getCheckmarkStyles = ({
  theme,
  checked,
  disabled,
}: ToggleState & {
  theme: Theme;
}) =>
  cn(
    checkmarkBase,
    checkmarkThemeStyles[theme]({ checked, disabled }),
  );
