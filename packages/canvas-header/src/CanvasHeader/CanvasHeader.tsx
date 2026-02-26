import React from 'react';

import LeafyGreenProvider, {
  useDarkMode,
} from '@leafygreen-ui/leafygreen-provider';
import { H2 } from '@leafygreen-ui/typography';

import { cn } from '../cn';
import { LGIDS } from '../constants';
import { Resource } from '../Resource';

import {
  actionsStyles,
  backLinkStyles,
  badgesStyles,
  canvasHeaderBaseStyles,
  canvasHeaderClassname,
  getTitleStyles,
  titleWrapperStyles,
} from './CanvasHeader.styles';
import { type CanvasHeaderProps } from './CanvasHeader.types';

export const CanvasHeader = React.forwardRef<HTMLDivElement, CanvasHeaderProps>(
  (
    {
      darkMode: darkModeProp,
      pageTitle,
      resourceIcon,
      resourceName,
      resourceBadges,
      actions,
      backLink,
      className,
      badges,
      ...rest
    }: CanvasHeaderProps,
    forwardRef,
  ) => {
    const { darkMode, theme } = useDarkMode(darkModeProp);
    const titleStyles = getTitleStyles(theme);
    return (
      <LeafyGreenProvider darkMode={darkMode}>
        <div
          data-testid={LGIDS.root}
          className={cn(
            canvasHeaderClassname,
            canvasHeaderBaseStyles,
            className,
          )}
          {...rest}
          ref={forwardRef}
        >
          {!!backLink && <div className={backLinkStyles}>{backLink}</div>}
          <div className={titleWrapperStyles}>
            <H2 data-testid={LGIDS.pageTitle} className={titleStyles.className} style={titleStyles.style}>
              {pageTitle}
            </H2>
            {!!badges && <div className={badgesStyles}>{badges}</div>}
            {!!actions && <div className={actionsStyles}>{actions}</div>}
          </div>
          {!!resourceName && (
            <Resource
              resourceName={resourceName}
              resourceIcon={resourceIcon}
              resourceBadges={resourceBadges}
            />
          )}
        </div>
      </LeafyGreenProvider>
    );
  },
);

CanvasHeader.displayName = 'CanvasHeader';
