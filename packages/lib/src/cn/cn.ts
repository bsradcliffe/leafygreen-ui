/**
 * Lightweight class name composition utility.
 * Replaces Emotion's `cx()` for joining CSS class strings.
 *
 * Accepts strings, falsy values, and objects with boolean values.
 * Filters out falsy entries and joins remaining class strings with spaces.
 *
 * @example
 * ```ts
 * cn('foo', isActive && 'active', 'bar')
 * // => 'foo active bar' (when isActive is true)
 * // => 'foo bar' (when isActive is false)
 *
 * cn('base', { 'is-open': isOpen, 'is-disabled': isDisabled })
 * // => 'base is-open' (when isOpen=true, isDisabled=false)
 * ```
 */
export function cn(
  ...classes: Array<string | false | undefined | null | Record<string, boolean>>
): string {
  const result: string[] = [];

  for (const cls of classes) {
    if (!cls) continue;
    if (typeof cls === 'string') {
      result.push(cls);
    } else if (typeof cls === 'object') {
      for (const key in cls) {
        if (cls[key]) result.push(key);
      }
    }
  }

  return result.join(' ');
}
