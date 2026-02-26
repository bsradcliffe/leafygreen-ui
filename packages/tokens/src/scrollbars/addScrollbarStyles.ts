import { injectStyles, Theme } from '@leafygreen-ui/lib';

import { Variant } from '../color';

import { scrollbarColor, ScrollbarVariant } from './scrollbarColor';

const STYLE_ID = 'lg-tokens-scrollbar';
let isInjected = false;

const classNameMap: Record<string, string> = {};

function getClassName(theme: Theme, variant: ScrollbarVariant): string {
  return `lg-scrollbar-${theme}-${variant}`;
}

function ensureInjected(): void {
  if (isInjected) return;
  isInjected = true;

  const rules: Array<string> = [];

  for (const theme of Object.values(Theme)) {
    for (const variant of [Variant.Primary, Variant.Secondary] as const) {
      const thumbColor = scrollbarColor[theme].thumb[variant].default;
      const trackColor = scrollbarColor[theme].track[variant].default;
      const cls = getClassName(theme, variant);
      classNameMap[`${theme}-${variant}`] = cls;

      rules.push(
        `.${cls} {
  scrollbar-color: ${thumbColor} ${trackColor};
}
.${cls}::-webkit-scrollbar-thumb {
  background-color: ${thumbColor};
}
.${cls}::-webkit-scrollbar-track {
  background-color: ${trackColor};
}`,
      );
    }
  }

  injectStyles(STYLE_ID, rules.join('\n'));
}

export const addScrollbarStyles = ({
  theme,
  variant = Variant.Primary,
}: {
  theme: Theme;
  variant: ScrollbarVariant;
}): string => {
  ensureInjected();
  return classNameMap[`${theme}-${variant}`];
};
