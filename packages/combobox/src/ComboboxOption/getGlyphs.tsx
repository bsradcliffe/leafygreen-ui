import React, { ReactElement } from 'react';

import { Checkbox } from '@leafygreen-ui/checkbox';
import { Icon, isComponentGlyph } from '@leafygreen-ui/icon';
import { Theme } from '@leafygreen-ui/lib';

import { ComboboxSize } from '../types';

import {
  checkBoxBaseClassName,
  checkBoxBaseStyle,
  checkMarkDisabledStyle,
  checkMarkSizeStyle,
  checkMarkThemeStyle,
  iconDisabledStyle,
  iconHighlightedStyle,
  iconThemeStyle,
} from './ComboboxOption.styles';

/**
 * Util that returns the leftGlyph and rightGlyph.
 */
export const getGlyphs = ({
  withIcons,
  isSelected,
  glyph,
  optionTextId,
  disabled,
  darkMode,
  size,
  multiselect,
  theme,
  isFocused,
}: {
  withIcons: boolean;
  isSelected: boolean;
  glyph?: ReactElement;
  optionTextId: string;
  disabled: boolean;
  darkMode: boolean;
  size: ComboboxSize;
  multiselect: boolean;
  theme: Theme;
  isFocused: boolean;
}) => {
  if (glyph && !isComponentGlyph(glyph)) {
    console.error(
      '`ComboboxOption` instance did not render icon because it is not a known glyph element.',
      glyph,
    );
  }

  const iconStyle: React.CSSProperties = {
    ...iconThemeStyle[theme],
    ...(isFocused ? iconHighlightedStyle[theme] : {}),
    ...(disabled ? iconDisabledStyle[theme] : {}),
  };

  const icon =
    glyph && isComponentGlyph(glyph) ? (
      React.cloneElement(glyph, {
        ...glyph.props,
        style: { ...iconStyle, ...(glyph.props.style || {}) },
      })
    ) : (
      <></>
    );

  const checkBox = (
    <Checkbox
      aria-labelledby={optionTextId}
      checked={isSelected}
      tabIndex={-1}
      disabled={disabled}
      darkMode={darkMode}
      className={checkBoxBaseClassName}
      style={checkBoxBaseStyle}
    />
  );

  const checkMarkStyle: React.CSSProperties = {
    ...checkMarkSizeStyle(size),
    ...checkMarkThemeStyle[theme],
    ...(disabled ? checkMarkDisabledStyle[theme] : {}),
  };

  const checkMark = (
    <Icon glyph="Checkmark" style={checkMarkStyle} />
  );

  const multiSelectLeftGlyph = withIcons ? icon : checkBox;
  const multiSelectRightGlyph = withIcons && checkBox;

  const singleSelectLeftGlyph = withIcons
    ? icon
    : isSelected
    ? checkMark
    : null;
  const singleSelectRightGlyph = withIcons && isSelected && checkMark;

  const leftGlyph = multiselect ? multiSelectLeftGlyph : singleSelectLeftGlyph;
  const rightGlyph = multiselect
    ? multiSelectRightGlyph
    : singleSelectRightGlyph;

  return {
    leftGlyph,
    rightGlyph,
  };
};
