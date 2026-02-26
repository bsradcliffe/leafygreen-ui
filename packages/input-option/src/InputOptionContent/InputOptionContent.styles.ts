import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';
import {
  color,
  spacing,
  State,
  transitionDuration,
  Variant,
} from '@leafygreen-ui/tokens';

export const inputOptionContentClassName = createUniqueClassName(
  'input_option-content',
);
export const titleClassName = createUniqueClassName('input_option-title');
export const descriptionClassName = createUniqueClassName(
  'input_option-description',
);
export const leftGlyphClassName = createUniqueClassName(
  'input_option-left-glyph',
);

export const getContentWrapperStyles = ({
  hasLeftGlyph,
  hasRightGlyph,
}: {
  hasLeftGlyph: boolean;
  hasRightGlyph: boolean;
}) => {
  const col1Name = hasLeftGlyph ? 'left-glyph' : 'text';
  const col3Name = hasRightGlyph ? 'right-glyph' : 'text';

  return [
    'grid',
    `grid-cols-[${spacing[400]}px_1fr_${spacing[400]}px]`,
    `[grid-template-areas:'${col1Name}_text_${col3Name}']`,
    `gap-[${spacing[200]}px]`,
    'items-center',
    'w-full',
  ].join(' ');
};

interface InputOptionStyleArgs {
  theme: Theme;
  disabled?: boolean;
  highlighted?: boolean;
}

export const getLeftGlyphStyles = ({
  theme,
  disabled,
  highlighted,
}: InputOptionStyleArgs) => {
  const variant = disabled ? Variant.Disabled : Variant.Primary;
  const interactionState = highlighted ? State.Focus : State.Default;

  return [
    '[grid-area:left-glyph]',
    'flex',
    'items-center',
    `text-[${color[theme].icon[variant][interactionState]}]`,
    `transition-[color]`,
    `duration-[${transitionDuration.default}ms]`,
    'ease-in-out',
  ].join(' ');
};

export const getRightGlyphStyles = ({
  theme,
  disabled,
}: InputOptionStyleArgs) => {
  const variant = disabled ? Variant.Disabled : Variant.Primary;

  return [
    '[grid-area:right-glyph]',
    'flex',
    'items-center',
    `text-[${color[theme].icon[variant].default}]`,
    `transition-[color]`,
    `duration-[${transitionDuration.default}ms]`,
    'ease-in-out',
  ].join(' ');
};

export const textContainerStyles = [
  '[grid-area:text]',
  `leading-[${spacing[400]}px]`,
].join(' ');

export const getTitleStyles = ({
  theme,
  highlighted,
  disabled,
}: InputOptionStyleArgs) => {
  const base = [
    '[overflow-wrap:anywhere]',
    'text-[length:inherit]',
    'leading-[inherit]',
    'font-normal',
    `transition-[color]`,
    `duration-[${transitionDuration.default}ms]`,
    'ease-in-out',
  ];

  if (highlighted && !disabled) {
    base.push(
      'font-bold',
      `text-[${color[theme].text.primary.focus}]`,
    );
  }

  return base.join(' ');
};

export const getDescriptionStyles = () => {
  return [
    `max-h-[${spacing[1200]}px]`,
    'overflow-hidden',
    'text-[length:inherit]',
    'leading-[inherit]',
    'text-ellipsis',
    `transition-[color]`,
    `duration-[${transitionDuration.default}ms]`,
    'ease-in-out',
  ].join(' ');
};
