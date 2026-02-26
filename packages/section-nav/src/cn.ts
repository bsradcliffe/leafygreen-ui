/**
 * Simple class name join utility to replace Emotion's `cx`.
 * Joins class name strings, filtering out falsy values.
 * Supports conditional class names via object syntax: `{ 'class-name': boolean }`.
 */
export function cn(
  ...classes: Array<string | false | undefined | null | Record<string, boolean>>
): string {
  const result: Array<string> = [];

  for (const cls of classes) {
    if (!cls) continue;

    if (typeof cls === 'string') {
      result.push(cls);
    } else if (typeof cls === 'object') {
      for (const [key, value] of Object.entries(cls)) {
        if (value) result.push(key);
      }
    }
  }

  return result.filter(Boolean).join(' ');
}
