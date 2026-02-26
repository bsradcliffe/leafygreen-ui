import { Theme } from '@leafygreen-ui/lib';
import {
  borderRadius,
  color,
  focusRing,
  hoverRing,
} from '@leafygreen-ui/tokens';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

const disabledStyles: Record<Theme, string> = {
  [Theme.Light]: [
    'pointer-events-none',
    `bg-[${color[Theme.Light].background.disabled.default}]`,
    `text-[${color[Theme.Light].text.disabled.default}]`,
  ].join(' '),
  [Theme.Dark]: [
    'pointer-events-none',
    `bg-[${color[Theme.Dark].background.disabled.default}]`,
    `text-[${color[Theme.Dark].text.disabled.default}]`,
  ].join(' '),
};

const clickableStyles: Record<Theme, string> = {
  [Theme.Light]: [
    `rounded-[${borderRadius[150]}px]`,
    'cursor-pointer',
    `[&:hover:not(:focus)]:outline-none`,
    `[&:hover:not(:focus)]:[box-shadow:inset_${hoverRing[Theme.Light].gray.replaceAll(' ', '_')}]`,
    `focus:outline-none`,
    `focus:[box-shadow:inset_${focusRing[Theme.Light].input.replaceAll(' ', '_')}]`,
    `focus-visible:outline-none`,
    `focus-visible:[box-shadow:inset_${focusRing[Theme.Light].input.replaceAll(' ', '_')}]`,
  ].join(' '),
  [Theme.Dark]: [
    `rounded-[${borderRadius[150]}px]`,
    'cursor-pointer',
    `[&:hover:not(:focus)]:outline-none`,
    `[&:hover:not(:focus)]:[box-shadow:inset_${hoverRing[Theme.Dark].gray.replaceAll(' ', '_')}]`,
    `focus:outline-none`,
    `focus:[box-shadow:inset_${focusRing[Theme.Dark].input.replaceAll(' ', '_')}]`,
    `focus-visible:outline-none`,
    `focus-visible:[box-shadow:inset_${focusRing[Theme.Dark].input.replaceAll(' ', '_')}]`,
  ].join(' '),
};

export const getRowBaseStyles = ({
  className,
  isClickable,
  isDisabled,
  theme,
}: {
  className?: string;
  isClickable: boolean;
  isDisabled: boolean;
  theme: Theme;
}) =>
  cn(
    isDisabled && disabledStyles[theme],
    isClickable && clickableStyles[theme],
    className,
  );

// applied directly to rows for VS
const grayZebraRowStyles: Record<Theme, string> = {
  [Theme.Light]: `bg-[${color[Theme.Light].background.secondary.default}]`,
  [Theme.Dark]: `bg-[${color[Theme.Dark].background.secondary.default}]`,
};

const zebraStyles: Record<Theme, string> = {
  [Theme.Light]: `even:bg-[${color[Theme.Light].background.secondary.default}]`,
  [Theme.Dark]: `even:bg-[${color[Theme.Dark].background.secondary.default}]`,
};

// applied directly to rows for VS
const selectedRowStyles: Record<Theme, string> = {
  [Theme.Light]: `bg-[${color[Theme.Light].background.secondary.focus}]`,
  [Theme.Dark]: `bg-[${color[Theme.Dark].background.secondary.focus}]`,
};

const expandedContentParentStyles: Record<Theme, string> = {
  [Theme.Light]: `bg-[${color[Theme.Light].background.secondary.default}]`,
  [Theme.Dark]: `bg-[${color[Theme.Dark].background.secondary.default}]`,
};

export const getRowWithRTStyles = ({
  className,
  isDisabled,
  isExpanded,
  isOddVSRow,
  isSelected,
  isVirtualRow,
  shouldAlternateRowColor,
  theme,
}: {
  className?: string;
  isDisabled: boolean;
  isExpanded: boolean;
  isOddVSRow: boolean;
  isSelected: boolean;
  isVirtualRow: boolean;
  shouldAlternateRowColor: boolean;
  theme: Theme;
}) =>
  cn(
    !isVirtualRow && shouldAlternateRowColor && !isSelected && zebraStyles[theme],
    isOddVSRow && shouldAlternateRowColor && !isSelected && grayZebraRowStyles[theme],
    isExpanded && !isSelected && expandedContentParentStyles[theme],
    isSelected && !isDisabled && selectedRowStyles[theme],
    className,
  );

export const getRowWithoutRTStyles = ({
  className,
  shouldAlternateRowColor,
  theme,
}: {
  className?: string;
  shouldAlternateRowColor?: boolean;
  theme: Theme;
}) =>
  cn(
    shouldAlternateRowColor && zebraStyles[theme],
    className,
  );
