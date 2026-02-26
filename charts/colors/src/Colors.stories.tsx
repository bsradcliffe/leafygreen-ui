import React, { CSSProperties } from 'react';

import { Theme } from '@leafygreen-ui/lib';
import { borderRadius, color, spacing } from '@leafygreen-ui/tokens';

import { colors } from './colors';

export default {
  title: 'Composition/Charts/Colors',
  component: null,
};

const COLOR_BOX_SIZE = 90;

const getColorGridStyles = (theme: Theme): CSSProperties => ({
  backgroundColor: color[theme].background.primary.default,
  padding: spacing[400],
});

const getHeaderStyles = (theme: Theme): CSSProperties => ({
  color: color[theme].text.primary.default,
});

const gridContainerStyles: CSSProperties = {
  display: 'grid',
  gridAutoFlow: 'column',
  gridTemplateColumns: `repeat(3, ${COLOR_BOX_SIZE}px)`,
  gridTemplateRows: `repeat(5, ${COLOR_BOX_SIZE}px)`,
  gap: spacing[400],
};

const getColorBoxStyles = (
  theme: Theme,
  bgColor: string,
): CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 24,
  color: color[theme].text.inversePrimary.default,
  borderRadius: borderRadius[200],
  backgroundColor: bgColor,
});

const ColorGrid = ({ theme }: { theme: Theme }) => {
  const isDarkMode = theme === Theme.Dark;
  const themeColors = colors[theme];

  return (
    <div style={getColorGridStyles(theme)}>
      <h2 style={getHeaderStyles(theme)}>
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </h2>
      <div style={gridContainerStyles}>
        {themeColors.map((color, index) => (
          <div key={index} style={getColorBoxStyles(theme, color)}>
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export const LiveExample = () => (
  <>
    <ColorGrid theme={Theme.Light} />
    <ColorGrid theme={Theme.Dark} />
  </>
);
