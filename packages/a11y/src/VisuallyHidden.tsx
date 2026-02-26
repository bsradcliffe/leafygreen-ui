import React from 'react';

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

const visuallyHiddenClassName =
  '[clip:rect(0,0,0,0)] [clip-path:inset(50%)] h-px w-px -m-px overflow-hidden p-0 absolute';

/**
 * @deprecated Use VisuallyHidden from react-aria instead.
 */
function VisuallyHidden({
  children,
  className,
  ...rest
}: React.ComponentProps<'div'>) {
  return (
    <div {...rest} className={cn(visuallyHiddenClassName, className)}>
      {children}
    </div>
  );
}

VisuallyHidden.displayName = 'VisuallyHidden';

export default VisuallyHidden;
