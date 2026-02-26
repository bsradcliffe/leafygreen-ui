import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import {
  borderRadius,
  color,
  InteractionState,
  spacing,
  Variant,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';

const BLOCKQUOTE_WEDGE_WIDTH = 3;
const LIST_INDENT_SPACING = spacing[400];
const VERTICAL_SPACING = spacing[200];

const getBaseStyles = (theme: Theme) =>
  [
    'flex',
    'flex-col',
    `gap-[${VERTICAL_SPACING}px]`,

    // blockquote
    `[&_blockquote]:relative`,
    `[&_blockquote]:m-0`,
    `[&_blockquote]:pl-[${spacing[300]}px]`,
    `[&_blockquote]:flex`,
    `[&_blockquote]:before:content-['']`,
    `[&_blockquote]:before:absolute`,
    `[&_blockquote]:before:bg-[${theme === Theme.Light ? palette.gray.light1 : palette.gray.dark1}]`,
    `[&_blockquote]:before:pointer-events-none`,
    `[&_blockquote]:before:top-0`,
    `[&_blockquote]:before:bottom-0`,
    `[&_blockquote]:before:left-0`,
    `[&_blockquote]:before:w-[${BLOCKQUOTE_WEDGE_WIDTH}px]`,
    `[&_blockquote]:before:rounded-[${borderRadius[400]}px]`,

    // hr
    `[&_hr]:m-0`,
    `[&_hr]:bg-[${color[theme].border[Variant.Secondary][InteractionState.Default]}]`,
    `[&_hr]:w-full`,
    `[&_hr]:h-px`,

    // li, ol, ul
    `[&_li]:whitespace-normal`,
    `[&_ol]:whitespace-normal`,
    `[&_ul]:whitespace-normal`,

    // ol, ul
    `[&_ol]:m-0`,
    `[&_ul]:m-0`,
    `[&_ol]:ps-[${LIST_INDENT_SPACING}px]`,
    `[&_ul]:ps-[${LIST_INDENT_SPACING}px]`,
    `[&_ol]:flex`,
    `[&_ul]:flex`,
    `[&_ol]:flex-col`,
    `[&_ul]:flex-col`,
    `[&_ol]:gap-[${VERTICAL_SPACING}px]`,
    `[&_ul]:gap-[${VERTICAL_SPACING}px]`,

    // code, pre
    `[&_code]:whitespace-pre-wrap`,
    `[&_pre]:whitespace-pre-wrap`,
  ].join(' ');

export const getWrapperStyles = ({
  className,
  theme,
}: {
  className?: string;
  theme: Theme;
}) => cn(getBaseStyles(theme), className);
