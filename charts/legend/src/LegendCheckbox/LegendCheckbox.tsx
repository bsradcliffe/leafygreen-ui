import React, { forwardRef, useId, useMemo } from 'react';
import { useSeriesContext } from '@lg-charts/series-provider';

import { Checkbox } from '@leafygreen-ui/checkbox';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';

import {
  getLegendCheckboxClassName,
  getScopedCss,
} from './LegendCheckbox.styles';
import { LegendCheckboxProps } from './LegendCheckbox.types';

export const LegendCheckbox = forwardRef<HTMLInputElement, LegendCheckboxProps>(
  ({ className, name, ...rest }, fwdRef) => {
    const { theme } = useDarkMode();
    const { getColor } = useSeriesContext();

    const checkboxColor = name ? getColor(name, theme) : undefined;
    const showFilled = !!(rest.checked || rest.indeterminate);

    const reactId = useId();
    const scopeClass = `lg-legend-cb-${reactId.replace(/:/g, '')}`;

    const cssText = useMemo(
      () =>
        getScopedCss({
          scopeClass,
          checkboxColor,
          theme,
          showFilled,
        }),
      [scopeClass, checkboxColor, theme, showFilled],
    );

    return (
      <>
        <style>{cssText}</style>
        <Checkbox
          {...rest}
          animate={false}
          className={getLegendCheckboxClassName({ scopeClass, className })}
          ref={fwdRef}
        />
      </>
    );
  },
);

LegendCheckbox.displayName = 'LegendCheckbox';
