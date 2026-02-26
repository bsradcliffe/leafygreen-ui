import React from 'react';

import { getNodeTextContent } from '@leafygreen-ui/lib';
import {
  Polymorph,
  PolymorphicAs,
  PolymorphicPropsWithRef,
} from '@leafygreen-ui/polymorphic';

import { CommonTypographyProps } from '../types';

import { cn } from './cn';

interface LocalProps extends CommonTypographyProps {
  /**
   * The maximum future weight of the text. Determines the width of the component.
   * @default 700
   */
  maxFontWeight?: React.CSSProperties['fontWeight'];
  /**
   * Defines the pseudo element used to force the element width
   */
  pseudoElement?: 'before' | 'after';
}

type StaticWidthTextProps<T extends PolymorphicAs> = PolymorphicPropsWithRef<
  T,
  LocalProps
>;

const staticWidthTextBaseStyles = [
  'font-[inherit] text-[inherit]',
  'whitespace-nowrap overflow-hidden text-ellipsis',
  'relative inline-flex flex-col items-start justify-center no-underline min-w-0 max-w-full',
].join(' ');

const pseudoBeforeStyles =
  'before:[content:attr(data-text)] before:h-0 before:invisible before:overflow-hidden before:select-none before:pointer-events-none';

const pseudoAfterStyles =
  'after:[content:attr(data-text)] after:h-0 after:invisible after:overflow-hidden after:select-none after:pointer-events-none';

const childWrapper =
  'flex-1 min-w-0 max-w-full [white-space:inherit] [overflow:inherit] [text-overflow:inherit]';

/**
 *
 * A wrapper component to ensure that updating the font weight does not affect the width of the element,
 * and prevents layout shift should the font weight change.
 *
 * Useful for showing a bold effect on hover, focus, or active (See `Tabs`, `MenuItem`).
 *
 * Will add an ellipsis if the text would extend beyond the parent,
 * or if the bold text is significantly larger than the regular text
 * (This is rare, and will only occur with _very_ long text)
 *
 * Note: does not support wrapped text (i.e. text within a paragraph)
 *
 * @internal
 *
 */
export function StaticWidthText<T extends PolymorphicAs = 'span'>({
  as,
  children,
  maxFontWeight = 700,
  pseudoElement = 'after',
  className,
  ...rest
}: StaticWidthTextProps<T>) {
  // calling getNodeTextContent in case a node gets passed in without TS
  const textContent = getNodeTextContent(children);

  const pseudoStyles =
    pseudoElement === 'before' ? pseudoBeforeStyles : pseudoAfterStyles;

  const pseudoWeightStyle =
    pseudoElement === 'before'
      ? `before:font-[${maxFontWeight}]`
      : `after:font-[${maxFontWeight}]`;

  return (
    <Polymorph
      className={cn(
        staticWidthTextBaseStyles,
        pseudoStyles,
        pseudoWeightStyle,
        className,
      )}
      as={as ?? ('span' as PolymorphicAs)}
      data-text={textContent}
      {...rest}
    >
      <span className={childWrapper}>{children}</span>
    </Polymorph>
  );
}
