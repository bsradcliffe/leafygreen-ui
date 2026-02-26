/**
 * Simple class name join utility to replace Emotion's `cx`.
 * Joins class name strings, filtering out falsy values.
 */
export function cn(
  ...classes: Array<string | false | undefined | null>
): string {
  return classes.filter(Boolean).join(' ');
}
