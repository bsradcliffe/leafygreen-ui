import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

const themeStyles: Record<Theme, string> = {
  [Theme.Light]: `[&:last-of-type]:[box-shadow:0_4px_${palette.gray.light2}]`,
  [Theme.Dark]: `[&:last-of-type]:[box-shadow:0_4px_${palette.gray.dark2}]`,
};

export const getBaseStyles = (theme: Theme) =>
  cn(
    'bg-inherit relative',
    themeStyles[theme],
  );
