import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { color, transitionDuration } from '@leafygreen-ui/tokens';

import { cn } from '../cn';

import {
  CodeEditorCopyButtonProps,
  CopyButtonVariant,
} from './CodeEditorCopyButton.types';

const baseStyle = [
  'self-center',
  `[&[aria-disabled='false']]:text-[--ce-icon-color]`,
  '[&_div[role=tooltip]_svg]:w-[26px]',
  '[&_div[role=tooltip]_svg]:h-[26px]',
  `[&]:transition-all [&]:duration-[${transitionDuration.default}ms] [&]:ease-in-out`,
  `[&>div>svg]:transition-all [&>div>svg]:duration-[${transitionDuration.default}ms] [&>div>svg]:ease-in-out`,
].join(' ');

/**
 * Theme-specific styles applied when the button is in the "copied" state.
 * Shows green background and white text to indicate successful copy operation.
 */
export const copiedThemeStyle: Record<Theme, string> = {
  [Theme.Light]: [
    `[&]:text-[${palette.white}] [&>div>svg]:text-[${palette.white}]`,
    `[&:focus]:text-[${palette.white}] [&:hover]:text-[${palette.white}]`,
    `[&>div>svg:focus]:text-[${palette.white}] [&>div>svg:hover]:text-[${palette.white}]`,
    `bg-[${palette.green.dark1}]`,
    `[&:focus]:text-[${palette.white}] [&:focus]:bg-[${palette.green.dark1}]`,
    `[&:hover]:text-[${palette.white}] [&:hover]:bg-[${palette.green.dark1}]`,
    `[&:focus]::before:bg-[${palette.green.dark1}]`,
    `[&:hover]::before:bg-[${palette.green.dark1}]`,
  ].join(' '),
  [Theme.Dark]: [
    `[&]:text-[${palette.gray.dark3}] [&>div>svg]:text-[${palette.gray.dark3}]`,
    `[&:focus]:text-[${palette.gray.dark3}] [&:hover]:text-[${palette.gray.dark3}]`,
    `[&>div>svg:focus]:text-[${palette.gray.dark3}] [&>div>svg:hover]:text-[${palette.gray.dark3}]`,
    `bg-[${palette.green.base}]`,
    `[&:focus]:text-[${palette.gray.dark3}] [&:focus]:bg-[${palette.green.base}]`,
    `[&:hover]:text-[${palette.gray.dark3}] [&:hover]:bg-[${palette.green.base}]`,
    `[&:focus]::before:bg-[${palette.green.base}]`,
    `[&:hover]::before:bg-[${palette.green.base}]`,
  ].join(' '),
};

/**
 * Generates styles for the minimal button variant when in copied state.
 * Used for minimal/hover copy buttons outside of panels.
 */
export const getMinimalButtonCopiedStyles = ({
  theme,
}: {
  theme: Theme;
}) => `border-[${color[theme].icon.primary.default}]`;

/**
 * Theme-specific styles for the minimal button variant.
 * Applied when the copy button is not in a panel (showPanel = false).
 */
export const minimalButtonThemeStyle: Record<Theme, string> = {
  [Theme.Light]: `border-[${palette.gray.base}]`,
  [Theme.Dark]: `border-[${palette.gray.light2}]`,
};

/**
 * Generates the CSS styles for the CodeEditorCopyButton component.
 * Handles theming, copy state visual feedback, and panel/minimal variants.
 *
 * @param theme - The current theme (light or dark)
 * @param copied - Whether the button is in the "copied" state
 * @param showPanel - Whether this is the panel variant (affects styling)
 * @param className - Additional CSS class names to apply
 * @returns Combined CSS class string
 */
export const getCopyButtonStyles = ({
  theme,
  copied,
  variant,
  className,
}: {
  theme: Theme;
  copied: boolean;
  variant: CodeEditorCopyButtonProps['variant'];
  className?: string;
}) =>
  cn(
    baseStyle,
    copied && copiedThemeStyle[theme],
    variant === CopyButtonVariant.Button && minimalButtonThemeStyle[theme],
    className,
  );
