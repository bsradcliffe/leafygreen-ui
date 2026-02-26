import React from 'react';

import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { Description } from '@leafygreen-ui/typography';

import {
  descriptionClassName,
  getContentWrapperStyles,
  getDescriptionStyles,
  getLeftGlyphStyles,
  getRightGlyphStyles,
  getTitleStyles,
  inputOptionContentClassName,
  leftGlyphClassName,
  textContainerStyles,
  titleClassName,
} from '../InputOptionContent/InputOptionContent.styles';
import { useInputOptionContext } from '../InputOptionContext';

import { InputOptionContentProps } from './InputOptionContent.types';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * @internal
 *
 * This is a temp workaround to add consistent option styles.
 * Once all components that use an input option are consistent
 * we can add this directly inside `InputOption`.
 */
export const InputOptionContent = ({
  children,
  description,
  leftGlyph,
  rightGlyph,
  preserveIconSpace = true,
  className,
  ...rest
}: InputOptionContentProps) => {
  const { disabled, highlighted, darkMode } = useInputOptionContext();
  const { theme } = useDarkMode(darkMode);
  return (
    <div
      className={cn(
        inputOptionContentClassName,
        getContentWrapperStyles({
          hasLeftGlyph: !!leftGlyph || preserveIconSpace,
          hasRightGlyph: !!rightGlyph,
        }),
        className,
      )}
      {...rest}
    >
      {leftGlyph && (
        <div
          className={cn(
            leftGlyphClassName,
            getLeftGlyphStyles({ theme, disabled, highlighted }),
          )}
        >
          {leftGlyph}
        </div>
      )}
      <div className={textContainerStyles}>
        <div
          className={cn(
            titleClassName,
            getTitleStyles({ theme, highlighted, disabled }),
          )}
        >
          {children}
        </div>
        {description && (
          <Description
            className={cn(descriptionClassName, getDescriptionStyles())}
            darkMode={darkMode}
            disabled={disabled}
          >
            {description}
          </Description>
        )}
      </div>
      {rightGlyph && (
        <div
          className={getRightGlyphStyles({
            theme,
            disabled,
          })}
        >
          {rightGlyph}
        </div>
      )}
    </div>
  );
};

InputOptionContent.displayName = 'InputOptionContent';
