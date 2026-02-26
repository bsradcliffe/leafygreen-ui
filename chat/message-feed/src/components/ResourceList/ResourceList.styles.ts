import { spacing } from '@leafygreen-ui/tokens';

import { cn } from '../../cn';

export const getListStyles = ({ className }: { className?: string }) =>
  cn(
    [
      'flex',
      'flex-col',
      `gap-[${spacing[400]}px]`,
      'p-0',
      'm-0',
    ].join(' '),
    className,
  );
