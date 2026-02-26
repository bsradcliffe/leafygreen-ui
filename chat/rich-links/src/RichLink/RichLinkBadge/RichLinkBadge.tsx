import React from 'react';

import { Icon } from '@leafygreen-ui/icon';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { Body } from '@leafygreen-ui/typography';

import { cn } from '../../../cn';
import { badgeVariants, baseStyles } from './RichLinkBadge.styles';
import { type RichLinkBadgeProps } from './RichLinkBadge.types';

export const RichLinkBadge = ({
  darkMode: darkModeProp,
  glyph: glyphName,
  color = 'gray',
  label,
}: RichLinkBadgeProps) => {
  const { theme } = useDarkMode(darkModeProp);

  return (
    <div className={cn(baseStyles, badgeVariants[theme][color])}>
      {glyphName ? <Icon glyph={glyphName} /> : null}
      <Body>{label}</Body>
    </div>
  );
};
