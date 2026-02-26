import { createUniqueClassName, injectStyles, Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import {
  color,
  fontFamilies,
  InteractionState,
  spacing,
  transitionDuration,
  typeScales,
} from '@leafygreen-ui/tokens';

import { leftGlyphClassName, titleClassName } from '../InputOptionContent';

export const inputOptionClassName = createUniqueClassName('input_option');

interface InputOptionStyleArgs {
  theme: Theme;
  disabled?: boolean;
  highlighted?: boolean;
  isInteractive?: boolean;
}

/**
 * Returns the class name for InputOption base + state styles.
 * Injects scoped CSS once per unique combination of theme, disabled,
 * highlighted, and isInteractive.
 */
export const getInputOptionStyles = ({
  theme,
  disabled,
  highlighted,
  isInteractive,
}: InputOptionStyleArgs): string => {
  const ixnState = highlighted
    ? InteractionState.Focus
    : InteractionState.Default;

  const key = `lg-input-option-${theme}-${disabled ? 'd' : 'e'}-${highlighted ? 'h' : 'n'}-${isInteractive ? 'i' : 's'}`;

  const textColor = disabled
    ? color[theme].text.disabled[ixnState]
    : color[theme].text.primary[ixnState];

  const bgColor = color[theme].background.primary[ixnState];

  const cursor = disabled ? 'not-allowed' : 'pointer';

  let hoverRules = '';
  if (isInteractive && !disabled) {
    hoverRules = `
.${key}:hover {
  outline: none;
  color: ${color[theme].text.primary.hover};
  background-color: ${color[theme].background.primary.hover};
}
.${key}:hover .${titleClassName} {
  color: ${color[theme].text.primary.hover};
}
.${key}:hover .${leftGlyphClassName} {
  color: ${color[theme].icon.primary.hover};
}
.${key}:focus {
  outline: none;
  border: unset;
}`;
  }

  injectStyles(
    key,
    `
.${key} {
  display: block;
  position: relative;
  list-style: none;
  outline: none;
  border: unset;
  margin: 0;
  text-align: left;
  text-decoration: none;
  cursor: ${cursor};
  font-size: ${typeScales.body1.fontSize}px;
  line-height: ${typeScales.body1.lineHeight}px;
  font-family: ${fontFamilies.default};
  padding: ${spacing[300]}px ${spacing[300]}px;
  transition: ${transitionDuration.default}ms ease-in-out;
  transition-property: background-color, color;
  color: ${textColor};
  background-color: ${bgColor};
}
${hoverRules}
`,
  );

  return key;
};

/** in px */
const wedgeWidth = spacing[100];
/** in px */
const wedgePaddingY = spacing[100];

/**
 * Returns the class name for the InputOption left wedge pseudo-element.
 * Injects scoped CSS once per unique combination of disabled and highlighted.
 */
export const getInputOptionWedge = ({
  disabled,
  highlighted,
}: InputOptionStyleArgs): string => {
  const key = `lg-input-option-wedge-${disabled ? 'd' : 'e'}-${highlighted ? 'h' : 'n'}`;

  let beforeContent = "content: '';";
  let beforeTransform = `transform: scale3d(0, 0.3, 0) translateY(-50%);`;
  let beforeBgColor = 'background-color: rgba(255, 255, 255, 0);';

  if (disabled) {
    beforeContent = 'content: unset;';
  }

  if (highlighted && !disabled) {
    beforeTransform = 'transform: scaleY(1) translateY(-50%);';
    beforeBgColor = `background-color: ${palette.blue.base};`;
  }

  injectStyles(
    key,
    `
.${key}::before {
  ${beforeContent}
  position: absolute;
  left: 0;
  top: 50%;
  width: ${wedgeWidth}px;
  height: calc(100% - ${2 * wedgePaddingY}px);
  min-height: ${spacing[600]}px;
  ${beforeBgColor}
  border-radius: 0 6px 6px 0;
  ${beforeTransform}
  transform-origin: 0%;
  transition: ${transitionDuration.default}ms ease-in-out;
  transition-property: transform, background-color;
}
`,
  );

  return key;
};
