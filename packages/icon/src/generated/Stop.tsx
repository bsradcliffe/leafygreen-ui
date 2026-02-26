/**
* This is a generated file. Do not modify it manually.
*
* @script packages/icon/scripts/prebuild/index.ts
* @checksum fc58d0b6198352ae94326cf8565e5aa1
*/
import * as React from "react";
import { cn } from '../cn';
import { useIdAllocator } from '@leafygreen-ui/hooks';
import { generateAccessibleProps, sizeMap } from '../glyphCommon';
import { LGGlyph } from '../types';
export interface StopProps extends LGGlyph.ComponentProps {}
const Stop = ({
  className,
  size = 16,
  title,
  ['aria-label']: ariaLabel,
  ['aria-labelledby']: ariaLabelledby,
  fill,
  role = 'img',
  ...props
}: StopProps) => {
  const titleId = useIdAllocator({
    prefix: 'icon-title'
  });
  const accessibleProps = generateAccessibleProps(role, 'Stop', {
    title,
    titleId,
    ['aria-label']: ariaLabel,
    ['aria-labelledby']: ariaLabelledby
  });
  return <svg className={cn('shrink-0', className)} style={fill != null ? { color: fill } : undefined} height={typeof size === 'number' ? size : sizeMap[size]} width={typeof size === 'number' ? size : sizeMap[size]} role={role} {...accessibleProps} {...props} viewBox="0 0 16 16">{title && <title id={titleId}>{title}</title>}<rect x={3} y={3} width={10} height={10} rx={1} fill={'currentColor'} /></svg>;
};
Stop.displayName = 'Stop';
Stop.isGlyph = true;
export default Stop;