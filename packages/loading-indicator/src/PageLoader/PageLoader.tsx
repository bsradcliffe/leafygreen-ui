import React from 'react';
import Lottie from 'react-lottie-player';

import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { Body, useUpdatedBaseFontSize } from '@leafygreen-ui/typography';

import { lottieRendererSettings } from '../constants';
import { descriptionThemeColor } from '../LoadingIndicator.styles';

import animationJson from './animation';
import { blobStyles, rootStyles } from './PageLoader.styles';
import { PageLoaderProps } from './PageLoader.types';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Displays an animation of various brand shapes morphing from one to another paired with description text
 */
const PageLoader = ({
  baseFontSize: baseFontSizeProp,
  description,
  darkMode: darkModeProp,
  className,
  ...rest
}: PageLoaderProps) => {
  const { theme } = useDarkMode(darkModeProp);
  const baseFontSize = useUpdatedBaseFontSize(baseFontSizeProp);

  return (
    <div className={cn(rootStyles, className)} {...rest}>
      <Lottie
        play
        loop
        animationData={animationJson}
        style={blobStyles}
        rendererSettings={lottieRendererSettings}
      />
      {description && (
        <Body
          className={descriptionThemeColor[theme]}
          baseFontSize={baseFontSize}
        >
          {description}
        </Body>
      )}
    </div>
  );
};

export default PageLoader;
