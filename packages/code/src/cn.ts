/**
 * Joins class name strings, filtering out falsy values.
 * Replacement for Emotion's `cx()` for use with Tailwind utility classes.
 */
export function cn(
  ...classes: Array<string | false | undefined | null>
): string {
  return classes.filter(Boolean).join(' ');
}
