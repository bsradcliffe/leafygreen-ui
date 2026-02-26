import React from 'react';

import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { BaseFontSize } from '@leafygreen-ui/tokens';
import { Body } from '@leafygreen-ui/typography';

import { cn } from '../cn';

import { getContainerStyles, titleStyles } from './ChartHeader.styles';
import { ChartHeaderProps } from './ChartHeader.types';

export function ChartHeader({
  title,
  titleIcon,
  showDivider,
  headerContent,
  className,
  ...rest
}: ChartHeaderProps) {
  const { theme } = useDarkMode();
  return (
    <div
      className={cn(getContainerStyles(theme, showDivider), className)}
      {...rest}
    >
      <div className={titleStyles}>
        <Body weight="regular" baseFontSize={BaseFontSize.Body1}>
          {title}
        </Body>
        {titleIcon && <div>{titleIcon}</div>}
      </div>
      <div>{headerContent}</div>
    </div>
  );
}
