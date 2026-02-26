import { injectStyles, Theme } from '@leafygreen-ui/lib';
import { color } from '@leafygreen-ui/tokens';

import { cn } from '../cn';

/**
 * Base color style for the copy button when not disabled.
 * Uses `injectStyles` because the `[aria-disabled='false']` attribute
 * selector combined with a runtime color token cannot be expressed
 * statically in Tailwind.
 */
function getCopyButtonBaseColorStyle(theme: Theme): string {
  const id = `lg-code-copy-btn-base-color-${theme}`;

  injectStyles(
    id,
    `
    .${id}[aria-disabled='false'] {
      color: ${color[theme].icon.primary.default};
    }
  `,
  );

  return id;
}

export const getCopyButtonStyles = ({
  theme,
  copied,
  showPanel,
  className,
}: {
  theme: Theme;
  copied: boolean;
  showPanel: boolean;
  className?: string;
}) =>
  cn(
    'self-center',
    getCopyButtonBaseColorStyle(theme),
    // Transition on the button and nested SVG
    '[&]:transition-all [&]:duration-[150ms] [&]:ease-in-out',
    '[&>div>svg]:transition-all [&>div>svg]:duration-[150ms] [&>div>svg]:ease-in-out',
    // Tooltip SVG sizing
    '[&_div[role=tooltip]_svg]:w-[26px] [&_div[role=tooltip]_svg]:h-[26px]',
    copied && copiedThemeStyle[theme],
    !showPanel && minimalButtonThemeStyle[theme],
    className,
  );

export const copiedThemeStyle: Record<Theme, string> = {
  [Theme.Light]: cn(
    // palette.white on green.dark1
    '[&]:text-[#FFFFFF] [&>div>svg]:text-[#FFFFFF]',
    '[&:focus]:text-[#FFFFFF] [&:hover]:text-[#FFFFFF]',
    '[&>div>svg:focus]:text-[#FFFFFF] [&>div>svg:hover]:text-[#FFFFFF]',
    'bg-[#00A35C]',
    '[&:focus]:bg-[#00A35C] [&:hover]:bg-[#00A35C]',
    '[&:focus::before]:bg-[#00A35C] [&:hover::before]:bg-[#00A35C]',
  ),
  [Theme.Dark]: cn(
    // palette.gray.dark3 on green.base
    '[&]:text-[#1C2D38] [&>div>svg]:text-[#1C2D38]',
    '[&:focus]:text-[#1C2D38] [&:hover]:text-[#1C2D38]',
    '[&>div>svg:focus]:text-[#1C2D38] [&>div>svg:hover]:text-[#1C2D38]',
    'bg-[#00ED64]',
    '[&:focus]:bg-[#00ED64] [&:hover]:bg-[#00ED64]',
    '[&:focus::before]:bg-[#00ED64] [&:hover::before]:bg-[#00ED64]',
  ),
};

export const minimalButtonThemeStyle: Record<Theme, string> = {
  [Theme.Light]:
    // palette.gray.base
    'border-[#889397]',
  [Theme.Dark]:
    // palette.gray.light2
    'border-[#E8EDEB]',
};
