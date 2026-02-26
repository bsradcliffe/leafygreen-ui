import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';

import { cn } from '../cn';

export const bodyThemeStyles: Record<Theme, string> = {
  [Theme.Light]: `text-[${palette.gray.light1}]`,
  [Theme.Dark]: `text-[${palette.black}]`,
};

export const bodyTitleStyles = 'mb-[4px]';

export const buttonStyles = 'h-[28px]';

const closeStyles = [
  'absolute',
  'top-[10px]',
  'right-[10px]',
].join(' ');

const closeHoverStyles = [
  `text-[${palette.gray.dark2}]`,
  `hover:before:bg-[${palette.gray.light3}]`,
  `active:before:bg-[${palette.gray.light3}]`,
].join(' ');

export const getCloseButtonStyle = (isDarkMode?: boolean) =>
  cn(closeStyles, {
    [closeHoverStyles]: !!isDarkMode,
  });

export const contentStyles = 'mb-[16px]';

export const footerStyles = [
  'flex',
  'justify-end',
  'items-center',
  'gap-[16px]',
].join(' ');

export const stepStyles: Record<Theme, string> = {
  [Theme.Light]: `text-[${palette.gray.base}]`,
  [Theme.Dark]: `text-[${palette.gray.dark2}]`,
};

const tooltipMultiStepStyles = 'pt-[32px] px-[16px] pb-[16px]';

const tooltipStyles = 'cursor-auto';

export const getTooltipStyles = ({
  isStandalone,
  tooltipClassName,
}: {
  isStandalone?: boolean;
  tooltipClassName?: string;
}) =>
  cn(
    { [tooltipMultiStepStyles]: !isStandalone },
    tooltipStyles,
    tooltipClassName,
  );
