import React from 'react';

import ButtonIcon from '../ButtonIcon/ButtonIcon';

import {
  buttonContentClassName,
  buttonContentSizeClassName,
  leftGlyphClassName,
  rightGlyphClassName,
} from './ButtonContent.styles';
import { DefaultContentProps } from './ButtonContent.types';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Default internal contents of a Button
 * @internal
 */
const DefaultContent = ({
  leftGlyph,
  rightGlyph,
  className,
  children,
  variant,
  size,
  darkMode,
  disabled,
}: DefaultContentProps) => {
  const isIconOnlyButton = ((leftGlyph || rightGlyph) && !children) ?? false;
  const iconProps = { variant, size, darkMode, disabled, isIconOnlyButton };
  return (
    <div
      className={cn(
        buttonContentClassName,
        buttonContentSizeClassName[size],
        className,
      )}
    >
      {leftGlyph && (
        <ButtonIcon
          glyph={leftGlyph}
          className={leftGlyphClassName}
          {...iconProps}
        />
      )}

      {children}

      {rightGlyph && (
        <ButtonIcon
          glyph={rightGlyph}
          className={rightGlyphClassName}
          {...iconProps}
        />
      )}
    </div>
  );
};

export default DefaultContent;
