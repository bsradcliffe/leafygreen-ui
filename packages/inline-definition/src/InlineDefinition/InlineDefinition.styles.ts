import { Theme } from '@leafygreen-ui/lib';

const triggerElementStyles = [
  'rounded-[2px]',
  'underline',
  'decoration-dotted',
  'decoration-2',
  'underline-offset-[0.125em]',
  // hover: remove Link underline styles
  '[&:hover_a>*::after]:h-0',
  // focus / focus-visible
  'focus:outline-[#0498EC]',
  'focus:outline-offset-[3px]',
  'focus:outline-solid',
  'focus:outline-2',
  'focus-visible:outline-[#0498EC]',
  'focus-visible:outline-offset-[3px]',
  'focus-visible:outline-solid',
  'focus-visible:outline-2',
].join(' ');

const triggerElementModeStyles: Record<Theme, string> = {
  [Theme.Light]: [
    'decoration-[#001E2B]',
    'hover:decoration-[#001E2B]',
    'focus:decoration-[#001E2B]',
    'focus-visible:decoration-[#001E2B]',
  ].join(' '),
  [Theme.Dark]: [
    'decoration-[#E8EDEB]',
    'hover:decoration-[#E8EDEB]',
    'focus:decoration-[#E8EDEB]',
    'focus-visible:decoration-[#E8EDEB]',
  ].join(' '),
};

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

export const getTriggerElementStyles = (theme: Theme, className?: string) =>
  cn(triggerElementStyles, triggerElementModeStyles[theme], className);
