import { Theme } from '@leafygreen-ui/lib';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

export const rootStyles = 'p-[40px] flex gap-[16px] items-center justify-center';

export const textContainerStyles = 'max-w-[466px]';

export const getBadgeStyles = (className?: string) =>
  cn('mb-[12px]', className);

export const titleStyles = 'mb-[12px]';

export const descriptionThemeStyles: Record<Theme, string> = {
  [Theme.Light]: 'text-[#5C6C75]',
  [Theme.Dark]: 'text-[#C1C7C6]',
};

export const buttonContainerStyles = 'flex gap-[12px] mt-[24px]';

export const externalLinkStyles = 'mt-[12px]';
