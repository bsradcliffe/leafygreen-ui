import { checkWrapperClassName } from '@leafygreen-ui/checkbox';
import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import {
  borderRadius,
  color,
  fontWeights,
  spacing,
  typeScales,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';

/**
 * Generates a CSS string for a scoped class. These styles use nested selectors
 * (`:hover`, `.${checkWrapperClassName}`, `::before`, `label`) which cannot be
 * expressed as Tailwind utility classes on a single element.
 */
export const getScopedCss = ({
  scopeClass,
  checkboxColor,
  theme,
  showFilled,
}: {
  scopeClass: string;
  checkboxColor?: string;
  theme: Theme;
  showFilled: boolean;
}) => {
  const defaultCheckboxColor =
    theme === 'dark' ? palette.blue.light1 : palette.blue.base;
  const resolvedColor = checkboxColor || defaultCheckboxColor;

  return `
.${scopeClass} {
  padding: 0 ${spacing[100]}px;
  border-radius: ${borderRadius[100]}px;
}
.${scopeClass}:hover {
  background-color: ${color[theme].background.secondary.hover};
}
.${scopeClass} .${checkWrapperClassName} {
  border-color: ${resolvedColor};
}
.${scopeClass} .${checkWrapperClassName}::before {
  background-color: ${resolvedColor};
}
${
  showFilled
    ? `.${scopeClass} .${checkWrapperClassName} {
  background-color: ${resolvedColor};
}`
    : ''
}
.${scopeClass} label {
  align-items: center;
  gap: ${spacing[100]}px;
  font-size: ${typeScales.disclaimer.fontSize}px;
  line-height: ${typeScales.disclaimer.lineHeight}px;
  font-weight: ${fontWeights.regular};
}
  `.trim();
};

export const getLegendCheckboxClassName = ({
  scopeClass,
  className,
}: {
  scopeClass: string;
  className?: string;
}) => cn(scopeClass, className);
