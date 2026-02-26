/**
* This is a generated file. Do not modify it manually.
*
* @script packages/icon/scripts/prebuild/index.ts
* @checksum e829167c1953740dcb6125ad8cd3c702
*/
import * as React from "react";
import { cn } from '../cn';
import { useIdAllocator } from '@leafygreen-ui/hooks';
import { generateAccessibleProps, sizeMap } from '../glyphCommon';
import { LGGlyph } from '../types';
export interface CircleProps extends LGGlyph.ComponentProps {}
const Circle = ({
  className,
  size = 16,
  title,
  ['aria-label']: ariaLabel,
  ['aria-labelledby']: ariaLabelledby,
  fill,
  role = 'img',
  ...props
}: CircleProps) => {
  const titleId = useIdAllocator({
    prefix: 'icon-title'
  });
  const accessibleProps = generateAccessibleProps(role, 'Circle', {
    title,
    titleId,
    ['aria-label']: ariaLabel,
    ['aria-labelledby']: ariaLabelledby
  });
  return <svg className={cn('shrink-0', className)} style={fill != null ? { color: fill } : undefined} height={typeof size === 'number' ? size : sizeMap[size]} width={typeof size === 'number' ? size : sizeMap[size]} role={role} {...accessibleProps} {...props} viewBox="0 0 16 16">{title && <title id={titleId}>{title}</title>}<circle cx={8} cy={8} r={7} fill={'currentColor'} /></svg>;
};
Circle.displayName = 'Circle';
Circle.isGlyph = true;
export default Circle;