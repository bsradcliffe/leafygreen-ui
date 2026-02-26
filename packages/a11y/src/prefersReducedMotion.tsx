/**
 * Returns a CSS string containing a `prefers-reduced-motion` media query
 * wrapping the provided styles.
 *
 * Use this function to remove scale, size, and positional transitions
 * for users with that preference set.
 *
 * The returned string can be interpolated inside Emotion `css` template
 * literals or any other CSS-in-JS solution.
 *
 * @param styles String of styles to render within media query.
 */
export default function prefersReducedMotion(styles: string) {
  if (styles != null && typeof styles === 'string') {
    return `@media (prefers-reduced-motion: reduce) { ${styles} }`;
  }

  return '';
}
