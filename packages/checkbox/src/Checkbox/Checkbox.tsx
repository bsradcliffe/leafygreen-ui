import React, { useMemo } from 'react';

import { useIdAllocator } from '@leafygreen-ui/hooks';
import LeafyGreenProvider, {
  useDarkMode,
} from '@leafygreen-ui/leafygreen-provider';
import {
  Description,
  Label,
  useUpdatedBaseFontSize,
} from '@leafygreen-ui/typography';

import { Check } from '../Check';
import { getLgIds } from '../utils/getLgIds';

import {
  checkWrapperClassName,
  containerStyle,
  descriptionStyle,
  disabledContainerStyle,
  disabledLabelStyle,
  inputClassName,
  inputFocusBoxShadow,
  inputStyle,
  labelHoverBoxShadow,
  labelStyle,
  labelTextStyle,
} from './Checkbox.style';
import { CheckboxProps } from './Checkbox.types';

function cn(
  ...classes: Array<string | false | undefined | null>
): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Checkboxes should be used whenever a user has an option they'd like to opt in or out of.
 *
 * Unlike toggles, checkboxes are used for actions, or features, that don't immediately turn on or off. Checkboxes are usually found in forms as opposed to config pages.
 */
const Checkbox = React.forwardRef(
  (
    {
      animate = true,
      'aria-label': ariaLabel = 'checkbox',
      baseFontSize: baseFontSizeProp,
      bold: boldProp,
      checked: checkedProp,
      className,
      darkMode: darkModeProp,
      'data-lgid': dataLgId,
      description,
      disabled = false,
      id: idProp,
      indeterminate: indeterminateProp,
      label = '',
      defaultChecked = false,
      onClick: onClickProp,
      onChange: onChangeProp,
      name,
      style,
      ...rest
    }: CheckboxProps,
    forwardRef: React.ForwardedRef<HTMLInputElement>,
  ) => {
    const { darkMode, theme } = useDarkMode(darkModeProp);
    const baseFontSize = useUpdatedBaseFontSize(baseFontSizeProp);

    const lgIds = getLgIds(dataLgId);

    const [checked, setChecked] = React.useState(defaultChecked);
    const isChecked = React.useMemo(
      () => (checkedProp != null ? checkedProp : checked),
      [checkedProp, checked],
    );

    const checkboxId = useIdAllocator({ prefix: 'checkbox', id: idProp });
    const labelId = `${checkboxId}-label`;

    // If a prop is passed, use the prop
    // otherwise default bold if there's a description
    const bold = boldProp ?? !!description;

    // Unique scope ID for the <style> tag targeting dynamic class names
    const scopeId = useMemo(
      () => `cb-${Math.random().toString(36).slice(2, 9)}`,
      [],
    );

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // Don't fire events if disabled
      if (disabled) {
        return;
      }

      if (onChangeProp) {
        onChangeProp(e);
      }

      if (checkedProp == null) {
        setChecked(e.target.checked);
      }
    };

    const onClick = (
      e: React.MouseEvent<HTMLInputElement> & { target: HTMLInputElement },
    ) => {
      // Don't fire events if disabled
      if (disabled) {
        return;
      }

      if (onClickProp) {
        onClickProp(e);
      }

      // For Microsoft Edge and IE, when checkbox is indeterminate, change event does not fire when clicked.
      // Explicitly call onChange for this case
      if (indeterminateProp) {
        onChange(e);
        e.stopPropagation();
      }
    };

    /**
     * Dynamic CSS for hover and focus-visible styles.
     * These selectors reference dynamically-generated class names from
     * createUniqueClassName, which cannot be expressed as Tailwind utility classes.
     */
    const dynamicCSS = useMemo(
      () => `
      [data-checkbox-scope="${scopeId}"]:hover:not(:focus-within) > .${inputClassName}:not([disabled]) + .${checkWrapperClassName} {
        box-shadow: ${labelHoverBoxShadow[theme]};
      }
      [data-checkbox-scope="${scopeId}"] > .${inputClassName}:focus-visible + .${checkWrapperClassName} {
        box-shadow: ${inputFocusBoxShadow[theme]};
      }
    `,
      [scopeId, theme],
    );

    return (
      <LeafyGreenProvider
        baseFontSize={baseFontSize === 16 ? baseFontSize : 14}
        darkMode={darkMode}
      >
        <style>{dynamicCSS}</style>
        <div
          className={cn(
            containerStyle,
            disabled && disabledContainerStyle,
            className,
          )}
          data-lgid={lgIds.root}
          data-testid={lgIds.root}
          style={style}
        >
          <Label
            id={labelId}
            htmlFor={checkboxId}
            disabled={disabled}
            className={cn(
              labelStyle,
              disabled && disabledLabelStyle,
            )}
            data-lgid={lgIds.root}
            data-testid={lgIds.root}
            data-checkbox-scope={scopeId}
          >
            <input
              {...rest}
              id={checkboxId}
              className={cn(
                inputClassName,
                inputStyle,
              )}
              type="checkbox"
              name={name}
              checked={isChecked}
              aria-label={ariaLabel}
              aria-disabled={disabled}
              aria-checked={indeterminateProp ? 'mixed' : isChecked}
              aria-labelledby={labelId}
              onClick={onClick}
              onChange={onChange}
              ref={forwardRef}
            />

            <Check
              theme={theme}
              isChecked={isChecked}
              indeterminate={indeterminateProp}
              disabled={disabled}
              animate={animate}
              selector={checkWrapperClassName}
            />

            {label && (
              <span
                className={cn(
                  labelTextStyle,
                  !bold && 'font-normal',
                )}
              >
                {label}
              </span>
            )}
          </Label>

          {description && (
            <Description
              className={descriptionStyle}
              disabled={disabled}
              data-lgid={lgIds.root}
              data-testid={lgIds.root}
            >
              {description}
            </Description>
          )}
        </div>
      </LeafyGreenProvider>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
