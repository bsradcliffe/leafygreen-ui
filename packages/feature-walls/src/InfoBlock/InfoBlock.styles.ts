import { CSSProperties } from 'react';

import { Theme } from '@leafygreen-ui/lib';
import { borderRadius, color, spacing } from '@leafygreen-ui/tokens';

import { cn } from '../cn';

import { Variant } from './InfoBlock.types';

const cardVariantStyles = {
  textContainerMaxWidth: 280,
  contentContainerHorizontalPadding: spacing[800],
};

const DEFAULT_CONTAINER_MAX_WIDTH = 336;

const variantStyles = {
  [Variant.Card]: {
    containerMaxWidth:
      cardVariantStyles.textContainerMaxWidth +
      2 * cardVariantStyles.contentContainerHorizontalPadding,
    contentContainerPadding: `${spacing[600]}px ${cardVariantStyles.contentContainerHorizontalPadding}px ${spacing[800]}px`,
    contentContainerGap: spacing[200],
    textContainerMaxWidth: `${cardVariantStyles.textContainerMaxWidth}px`,
    textContainerGap: spacing[200],
  },
  [Variant.Icon]: {
    containerMaxWidth: DEFAULT_CONTAINER_MAX_WIDTH,
    contentContainerGap: spacing[200],
    textContainerMaxWidth: 'initial',
    textContainerGap: spacing[200],
  },
  [Variant.Image]: {
    containerMaxWidth: DEFAULT_CONTAINER_MAX_WIDTH,
    contentContainerGap: spacing[400],
    textContainerMaxWidth: 'initial',
    textContainerGap: 0,
  },
} as const;

const baseContainerStyles = [
  'h-full',
  'flex',
  'flex-col',
  'p-0',
].join(' ');

export const getContainerStyles = (variant: Variant, className?: string): { className: string; style: CSSProperties } => {
  const isCardVariant = variant === Variant.Card;

  return {
    className: cn(baseContainerStyles, className),
    style: {
      maxWidth: `${variantStyles[variant].containerMaxWidth}px`,
      overflow: isCardVariant ? 'hidden' : 'visible',
      gap: `${isCardVariant ? 0 : spacing[200]}px`,
    },
  };
};

export const getMediaContainerStyles = (theme: Theme, variant: Variant): { className: string; style: CSSProperties } => {
  const isImageVariant = variant === Variant.Image;
  const isCardVariant = variant === Variant.Card;

  const fullSizeImgClasses = '[&_img]:w-full [&_img]:h-full [&_img]:object-cover';

  if (isImageVariant) {
    return {
      className: cn(
        'flex justify-center items-center',
        `p-[${spacing[300]}px]`,
        fullSizeImgClasses,
      ),
      style: {
        background: color[theme].background.secondary.default,
        border: `1px solid ${color[theme].border.secondary.default}`,
        borderRadius: `${borderRadius[600]}px`,
      },
    };
  }

  if (isCardVariant) {
    return {
      className: fullSizeImgClasses,
      style: {},
    };
  }

  return {
    className: '',
    style: {},
  };
};

export const getContentContainerStyles = (
  variant: Variant,
  hasMedia: boolean,
): CSSProperties => {
  const isCardVariant = variant === Variant.Card;
  const cardVariantPaddingTop = hasMedia ? spacing[600] : spacing[800];
  const cardVariantPaddingValue = `${cardVariantPaddingTop}px ${cardVariantStyles.contentContainerHorizontalPadding}px ${spacing[800]}px`;

  return {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: isCardVariant ? cardVariantPaddingValue : '0',
    gap: `${variantStyles[variant].contentContainerGap}px`,
  };
};

export const getTextContainerStyles = (variant: Variant): CSSProperties => ({
  maxWidth: variantStyles[variant].textContainerMaxWidth,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: `${variantStyles[variant].textContainerGap}px`,
});

export const badgesContainerStyles = [
  `pt-[${spacing[100]}px]`,
  'flex',
  `gap-[${spacing[200]}px]`,
].join(' ');
