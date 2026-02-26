import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { spacing, typeScales } from '@leafygreen-ui/tokens';

import { cn } from '../cn';

export const titleStyle = `mb-[${spacing[1]}px]`;

export const baseModalStyle = 'w-[600px] p-0 overflow-hidden';

export const wrapperStyle = [
  'text-center',
  'px-[20px]',
  'pb-[32px]',
  'pt-0',
  'max-w-[476px]',
  'mx-auto',
].join(' ');

const contentStyle = [
  `text-[${typeScales.body1.fontSize}px]`,
  `leading-[${typeScales.body1.lineHeight}px]`,
].join(' ');

const contentThemeStyle: Record<Theme, string> = {
  [Theme.Light]: `text-[${palette.black}]`,
  [Theme.Dark]: `text-[${palette.gray.light1}]`,
};

export const getContentStyles = (theme: Theme) =>
  cn(contentStyle, contentThemeStyle[theme]);

export const footerContentStyle = [
  'leading-[24px]',
  'pb-[40px]',
  'flex',
  'flex-col',
  'items-center',
  'justify-center',
].join(' ');

const baseButtonStyles = 'min-w-[200px]';

export const getButtonStyles = (className?: string) =>
  cn(baseButtonStyles, className);

export const linkStyle = `mt-[${spacing[3]}px]`;

export const disclaimerStyles = [
  `pt-[${spacing[5]}px]`,
  `px-[${spacing[5] + spacing[3]}px]`,
  'pb-0',
  `text-[${palette.gray.dark1}]`,
].join(' ');
