import { Theme } from '@leafygreen-ui/lib';
import { color } from '@leafygreen-ui/tokens';

import { cn } from '../cn';

/**
 * Base panel styles with theme and layout variants.
 */
export const getBasePanelStyle = ({
  hasTitle,
  theme,
  className,
}: {
  hasTitle: boolean;
  theme: Theme;
  className?: string;
}) =>
  cn(
    // layout
    'flex items-center shrink-0 flex-row justify-between',
    // spacing
    'gap-[4px] pl-[16px] pr-[8px] h-[36px]',
    // stacking & grid
    'z-[2] [grid-area:panel]',
    // border
    'border-b border-solid border-b-[1px]',
    // svg sizing
    '[&_svg]:w-[16px] [&_svg]:h-[16px]',
    !hasTitle && 'justify-end',
    basePanelThemeStyle[theme],
    className,
  );

export const basePanelThemeStyle: Record<Theme, string> = {
  [Theme.Light]:
    // palette.white, palette.gray.light2
    'bg-[#FFFFFF] border-[#E8EDEB]',
  [Theme.Dark]:
    // palette.gray.dark2, palette.gray.dark1
    'bg-[#3D4F58] border-[#5C6C75]',
};

export const panelLeftStyles = 'flex items-center gap-[8px]';

export const panelIconsStyles = 'flex gap-[4px]';

export const getPanelTitleStyles = (theme: Theme) =>
  `text-[${color[theme].text.secondary.default}]`;
