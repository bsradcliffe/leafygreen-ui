import { tv } from 'tailwind-variants';

import { BaseFontSize } from '@leafygreen-ui/tokens';

import { Size, Variant } from '../types';

/**
 * Pre-computed transparent color values (replaces polished transparentize)
 */
const greenBase4 = 'rgba(0, 237, 100, 0.04)';
const redBase4 = 'rgba(219, 48, 48, 0.04)';

/**
 * Off-palette value specific to primary button instances
 */
const PRIMARY_INTERACTIVE_GREEN = '#00593F';
const DANGER_INTERACTIVE_RED = '#c82222';

/**
 * Mixed color: 96% green.base + 4% green.dark3
 */
const baseGreenHoverLight = '#02E35F';
/**
 * Mixed color: 96% green.base + 4% green.light3
 */
const baseGreenHoverDark = '#06ED68';

/**
 * Focus box-shadow definitions.
 * Light: 2px white + 4px blue.light1
 * Dark: 2px black + 4px blue.light1
 */
const focusBoxShadowLight = '0 0 0 2px #FFFFFF, 0 0 0 4px #0498EC';
const focusBoxShadowDark = '0 0 0 2px #001E2B, 0 0 0 4px #0498EC';

export const buttonStyles = tv({
  base: [
    'appearance-none',
    'p-0',
    'm-0',
    'bg-transparent',
    'border',
    'border-solid',
    'border-transparent',
    'inline-flex',
    'items-stretch',
    'relative',
    'no-underline',
    'cursor-pointer',
    'z-0',
    'rounded-[6px]',
    'transition-all',
    'duration-[var(--transition-duration-default)]',
    'ease-in-out',
    'font-[var(--font-family-default)]',
    'outline-none',
    'focus-visible:outline-none',
    'hover:no-underline',
    'active:no-underline',
  ],
  variants: {
    /** Visual variant */
    variant: {
      [Variant.Default]: '',
      [Variant.Primary]: '',
      [Variant.PrimaryOutline]: '',
      [Variant.Danger]: '',
      [Variant.DangerOutline]: '',
      [Variant.BaseGreen]: '',
    },
    /** Size */
    size: {
      [Size.XSmall]: 'h-[22px] uppercase text-[12px] leading-[1em] font-semibold tracking-[0.4px]',
      [Size.Small]: 'h-[28px]',
      [Size.Default]: 'h-[36px]',
      [Size.Large]: 'h-[48px] text-[18px] leading-[24px]',
    },
    /** Dark mode */
    isDarkMode: {
      true: '',
      false: '',
    },
    /** Disabled state */
    isDisabled: {
      true: 'cursor-not-allowed',
      false: '',
    },
    /** Base font size */
    baseFontSize: {
      [BaseFontSize.Body1 as number]: 'text-[13px] leading-[20px] font-medium',
      [BaseFontSize.Body2 as number]: 'text-[16px] leading-[28px] font-medium translate-y-px',
    },
  },
  compoundVariants: [
    // ========= LIGHT MODE — Default =========
    {
      variant: Variant.Default,
      isDarkMode: false,
      isDisabled: false,
      className: [
        'bg-[#F9FBFA]',
        'border-[#889397]',
        'text-[#001E2B]',
        'focus-visible:text-[#001E2B]',
        'hover:text-[#001E2B]',
        'hover:bg-[#FFFFFF]',
        'hover:shadow-[0_0_0_3px_#E8EDEB]',
        'active:text-[#001E2B]',
        'active:bg-[#FFFFFF]',
        'active:shadow-[0_0_0_3px_#E8EDEB]',
      ],
    },
    // ========= LIGHT MODE — Primary =========
    {
      variant: Variant.Primary,
      isDarkMode: false,
      isDisabled: false,
      className: [
        'bg-[#00684A]',
        'border-[#00684A]',
        'text-white',
        'focus-visible:text-white',
        'hover:text-white',
        `hover:bg-[${PRIMARY_INTERACTIVE_GREEN}]`,
        `hover:border-[${PRIMARY_INTERACTIVE_GREEN}]`,
        'hover:shadow-[0_0_0_3px_#C0FAE6]',
        'active:text-white',
        `active:bg-[${PRIMARY_INTERACTIVE_GREEN}]`,
        `active:border-[${PRIMARY_INTERACTIVE_GREEN}]`,
        'active:shadow-[0_0_0_3px_#C0FAE6]',
      ],
    },
    // ========= LIGHT MODE — PrimaryOutline =========
    {
      variant: Variant.PrimaryOutline,
      isDarkMode: false,
      isDisabled: false,
      className: [
        'bg-transparent',
        'border-[#00684A]',
        'text-[#00684A]',
        'focus-visible:text-[#00684A]',
        'hover:text-[#00684A]',
        `hover:bg-[${greenBase4}]`,
        'hover:shadow-[0_0_0_3px_#C0FAE6]',
        'active:text-[#00684A]',
        `active:bg-[${greenBase4}]`,
        'active:shadow-[0_0_0_3px_#C0FAE6]',
      ],
    },
    // ========= LIGHT MODE — Danger =========
    {
      variant: Variant.Danger,
      isDarkMode: false,
      isDisabled: false,
      className: [
        'bg-[#DB3030]',
        'border-[#DB3030]',
        'text-white',
        'focus-visible:text-white',
        'hover:text-white',
        `hover:bg-[${DANGER_INTERACTIVE_RED}]`,
        `hover:border-[${DANGER_INTERACTIVE_RED}]`,
        'hover:shadow-[0_0_0_3px_#FFEAE5]',
        'active:text-white',
        `active:bg-[${DANGER_INTERACTIVE_RED}]`,
        `active:border-[${DANGER_INTERACTIVE_RED}]`,
        'active:shadow-[0_0_0_3px_#FFEAE5]',
      ],
    },
    // ========= LIGHT MODE — DangerOutline =========
    {
      variant: Variant.DangerOutline,
      isDarkMode: false,
      isDisabled: false,
      className: [
        'bg-transparent',
        'border-[#FF6960]',
        'text-[#DB3030]',
        'focus-visible:text-[#DB3030]',
        'hover:text-[#970606]',
        `hover:bg-[${redBase4}]`,
        'hover:border-[#DB3030]',
        'hover:shadow-[0_0_0_3px_#FFEAE5]',
        'active:text-[#970606]',
        `active:bg-[${redBase4}]`,
        'active:border-[#DB3030]',
        'active:shadow-[0_0_0_3px_#FFEAE5]',
      ],
    },
    // ========= LIGHT MODE — BaseGreen =========
    {
      variant: Variant.BaseGreen,
      isDarkMode: false,
      isDisabled: false,
      className: [
        'bg-[#00ED64]',
        'border-[#00684A]',
        'text-[#023430]',
        'focus-visible:text-[#023430]',
        'hover:text-[#023430]',
        `hover:bg-[${baseGreenHoverLight}]`,
        'hover:shadow-[0_0_0_3px_#C0FAE6]',
        'active:text-[#023430]',
        `active:bg-[${baseGreenHoverLight}]`,
        'active:shadow-[0_0_0_3px_#C0FAE6]',
      ],
    },

    // ========= DARK MODE — Default =========
    {
      variant: Variant.Default,
      isDarkMode: true,
      isDisabled: false,
      className: [
        'bg-[#3D4F58]',
        'border-[#889397]',
        'text-white',
        'focus-visible:text-white',
        'hover:bg-[#5C6C75]',
        'hover:border-[#889397]',
        'hover:text-white',
        'hover:shadow-[0_0_0_3px_#3D4F58]',
        'active:bg-[#5C6C75]',
        'active:border-[#889397]',
        'active:text-white',
        'active:shadow-[0_0_0_3px_#3D4F58]',
      ],
    },
    // ========= DARK MODE — Primary =========
    {
      variant: Variant.Primary,
      isDarkMode: true,
      isDisabled: false,
      className: [
        'bg-[#00684A]',
        'border-[#00ED64]',
        'text-white',
        'focus-visible:text-white',
        'hover:text-white',
        `hover:bg-[${PRIMARY_INTERACTIVE_GREEN}]`,
        'hover:shadow-[0_0_0_3px_#023430]',
        'active:text-white',
        `active:bg-[${PRIMARY_INTERACTIVE_GREEN}]`,
        'active:shadow-[0_0_0_3px_#023430]',
      ],
    },
    // ========= DARK MODE — PrimaryOutline =========
    {
      variant: Variant.PrimaryOutline,
      isDarkMode: true,
      isDisabled: false,
      className: [
        'bg-transparent',
        'border-[#00ED64]',
        'text-[#00ED64]',
        'focus-visible:text-[#00ED64]',
        'hover:text-[#00ED64]',
        `hover:bg-[${greenBase4}]`,
        'hover:border-[#00ED64]',
        'hover:shadow-[0_0_0_3px_#023430]',
        'active:text-[#00ED64]',
        `active:bg-[${greenBase4}]`,
        'active:border-[#00ED64]',
        'active:shadow-[0_0_0_3px_#023430]',
      ],
    },
    // ========= DARK MODE — Danger =========
    {
      variant: Variant.Danger,
      isDarkMode: true,
      isDisabled: false,
      className: [
        'bg-[#DB3030]',
        'border-[#FF6960]',
        'text-white',
        'focus-visible:text-white',
        'hover:border-[#FF6960]',
        'hover:text-white',
        `hover:bg-[${DANGER_INTERACTIVE_RED}]`,
        'hover:shadow-[0_0_0_3px_#4C2100]',
        'active:border-[#FF6960]',
        'active:text-white',
        `active:bg-[${DANGER_INTERACTIVE_RED}]`,
        'active:shadow-[0_0_0_3px_#4C2100]',
      ],
    },
    // ========= DARK MODE — DangerOutline =========
    {
      variant: Variant.DangerOutline,
      isDarkMode: true,
      isDisabled: false,
      className: [
        'bg-transparent',
        'border-[#FF6960]',
        'text-[#FF6960]',
        'focus-visible:text-[#FF6960]',
        'hover:text-[#FF6960]',
        `hover:bg-[${redBase4}]`,
        'hover:shadow-[0_0_0_3px_#4C2100]',
        'active:text-[#FF6960]',
        `active:bg-[${redBase4}]`,
        'active:shadow-[0_0_0_3px_#4C2100]',
      ],
    },
    // ========= DARK MODE — BaseGreen =========
    {
      variant: Variant.BaseGreen,
      isDarkMode: true,
      isDisabled: false,
      className: [
        'bg-[#00ED64]',
        'border-[#00684A]',
        'text-[#023430]',
        'focus-visible:text-[#023430]',
        'hover:text-[#023430]',
        `hover:bg-[${baseGreenHoverDark}]`,
        'hover:border-[#00684A]',
        'hover:shadow-[0_0_0_3px_#023430]',
        'active:text-[#023430]',
        `active:bg-[${baseGreenHoverDark}]`,
        'active:border-[#00684A]',
        'active:shadow-[0_0_0_3px_#023430]',
      ],
    },

    // ========= FOCUS STYLES — LIGHT =========
    {
      variant: Variant.Default,
      isDarkMode: false,
      isDisabled: false,
      className: `focus-visible:bg-white focus-visible:shadow-[${focusBoxShadowLight}]`,
    },
    {
      variant: Variant.Primary,
      isDarkMode: false,
      isDisabled: false,
      className: `focus-visible:text-white focus-visible:bg-[${PRIMARY_INTERACTIVE_GREEN}] focus-visible:shadow-[${focusBoxShadowLight}]`,
    },
    {
      variant: Variant.PrimaryOutline,
      isDarkMode: false,
      isDisabled: false,
      className: `focus-visible:bg-[${greenBase4}] focus-visible:shadow-[${focusBoxShadowLight}]`,
    },
    {
      variant: Variant.Danger,
      isDarkMode: false,
      isDisabled: false,
      className: `focus-visible:text-white focus-visible:bg-[${DANGER_INTERACTIVE_RED}] focus-visible:shadow-[${focusBoxShadowLight}]`,
    },
    {
      variant: Variant.DangerOutline,
      isDarkMode: false,
      isDisabled: false,
      className: `focus-visible:text-[#970606] focus-visible:shadow-[${focusBoxShadowLight}]`,
    },
    {
      variant: Variant.BaseGreen,
      isDarkMode: false,
      isDisabled: false,
      className: `focus-visible:shadow-[${focusBoxShadowLight}]`,
    },

    // ========= FOCUS STYLES — DARK =========
    {
      variant: Variant.Default,
      isDarkMode: true,
      isDisabled: false,
      className: `focus-visible:bg-[#5C6C75] focus-visible:shadow-[${focusBoxShadowDark}]`,
    },
    {
      variant: Variant.Primary,
      isDarkMode: true,
      isDisabled: false,
      className: `focus-visible:bg-[${PRIMARY_INTERACTIVE_GREEN}] focus-visible:shadow-[${focusBoxShadowDark}]`,
    },
    {
      variant: Variant.PrimaryOutline,
      isDarkMode: true,
      isDisabled: false,
      className: `focus-visible:bg-[${greenBase4}] focus-visible:border-[#00ED64] focus-visible:shadow-[${focusBoxShadowDark}]`,
    },
    {
      variant: Variant.Danger,
      isDarkMode: true,
      isDisabled: false,
      className: `focus-visible:bg-[${DANGER_INTERACTIVE_RED}] focus-visible:shadow-[${focusBoxShadowDark}]`,
    },
    {
      variant: Variant.DangerOutline,
      isDarkMode: true,
      isDisabled: false,
      className: `focus-visible:bg-[${redBase4}] focus-visible:border-[#FF6960] focus-visible:shadow-[${focusBoxShadowDark}]`,
    },
    {
      variant: Variant.BaseGreen,
      isDarkMode: true,
      isDisabled: false,
      className: `focus-visible:bg-[#00ED64] focus-visible:shadow-[${focusBoxShadowDark}]`,
    },

    // ========= DISABLED — LIGHT =========
    {
      isDarkMode: false,
      isDisabled: true,
      className: [
        'bg-[#E8EDEB]',
        'border-[#C1C7C6]',
        'text-[#889397]',
        'shadow-none',
        'hover:bg-[#E8EDEB]',
        'hover:border-[#C1C7C6]',
        'hover:text-[#889397]',
        'hover:shadow-none',
        'active:bg-[#E8EDEB]',
        'active:border-[#C1C7C6]',
        'active:text-[#889397]',
        'active:shadow-none',
        `focus-visible:text-[#889397]`,
        `focus-visible:shadow-[${focusBoxShadowLight}]`,
      ],
    },
    // ========= DISABLED — DARK =========
    {
      isDarkMode: true,
      isDisabled: true,
      className: [
        'bg-[#1C2D38]',
        'border-[#3D4F58]',
        'text-[#5C6C75]',
        'shadow-none',
        'hover:bg-[#1C2D38]',
        'hover:border-[#3D4F58]',
        'hover:text-[#5C6C75]',
        'hover:shadow-none',
        'active:bg-[#1C2D38]',
        'active:border-[#3D4F58]',
        'active:text-[#5C6C75]',
        'active:shadow-none',
        `focus-visible:text-[#5C6C75]`,
        `focus-visible:shadow-[${focusBoxShadowDark}]`,
      ],
    },
  ],
  defaultVariants: {
    variant: Variant.Default,
    size: Size.Default,
    isDarkMode: false,
    isDisabled: false,
    baseFontSize: BaseFontSize.Body1,
  },
});
