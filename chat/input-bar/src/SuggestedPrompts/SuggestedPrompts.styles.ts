import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';

export const themeStyles: Record<Theme, string> = {
  [Theme.Light]: `[&+&]:border-t [&+&]:border-t-[${palette.gray.light2}]`,
  [Theme.Dark]: `[&+&]:border-t [&+&]:border-t-[${palette.gray.dark2}]`,
};

export const suggestedPromptsLabelWrapperStyle = 'pb-0';

export const suggestedPromptsLabelStyle: Record<Theme, string> = {
  [Theme.Light]: `text-[${palette.gray.dark1}]`,
  [Theme.Dark]: `text-[${palette.gray.base}]`,
};
