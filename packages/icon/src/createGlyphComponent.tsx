import React from 'react';

import { useIdAllocator } from '@leafygreen-ui/hooks';

import { cn } from './cn';
import { generateAccessibleProps, Size, sizeMap } from './glyphCommon';
import { LGGlyph, SVGR } from './types';

// This function will be updated and potentially deprecated in https://jira.mongodb.org/browse/LG-5680
/**
 * Returns a single glyph component.
 * Process custom glyphs to ensure consistent behavior between custom and built-in icons
 * This function is different from the `createIconComponent` function in that it returns a single glyph component instead of an icon component.
 * @param glyphName: string - the display name of the icon
 * @param Glyph: SVGR.Component - the SVG icon component
 * @returns LGGlyph.Component
 */
export function createGlyphComponent(
  glyphName: string,
  Glyph: SVGR.Component,
): LGGlyph.Component {
  const GlyphComponent: LGGlyph.Component = ({
    className,
    size = Size.Default,
    fill,
    title,
    'aria-labelledby': ariaLabelledby,
    'aria-label': ariaLabel,
    role = 'img',
    ...rest
  }: LGGlyph.ComponentProps) => {
    const titleId = useIdAllocator({ prefix: 'icon-title' });

    // Note: We do not currently support title prop for custom glyphs. TODO: LG-5828

    const renderedSize = typeof size === 'number' ? size : sizeMap[size];

    if (!(role === 'img' || role === 'presentation')) {
      console.warn(
        "Please provide a valid role to this component. Valid options are 'img' and 'presentation'. If you'd like the Icon to be accessible to screen readers please use 'img', otherwise set the role to 'presentation'.",
      );
    }

    return (
      <Glyph
        className={cn(className)}
        style={fill != null ? { color: fill } : undefined}
        height={renderedSize}
        width={renderedSize}
        role={role}
        {...generateAccessibleProps(role, glyphName, {
          title,
          titleId,
          ['aria-label']: ariaLabel,
          ['aria-labelledby']: ariaLabelledby,
        })}
        {...rest}
      ></Glyph>
    );
  };

  GlyphComponent.displayName = glyphName;

  GlyphComponent.isGlyph = true;

  return GlyphComponent;
}
