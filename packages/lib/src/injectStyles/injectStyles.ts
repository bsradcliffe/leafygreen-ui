const injectedSheets = new Set<string>();

/**
 * Injects a CSS string into the document head as a `<style>` element.
 *
 * Deduplicates by `id` — calling with the same `id` twice is a no-op.
 * SSR-safe: silently returns when `document` is undefined.
 *
 * @param id  Unique identifier for the stylesheet (used in `data-lg` attribute)
 * @param css The CSS string to inject
 */
export function injectStyles(id: string, css: string): void {
  if (injectedSheets.has(id) || typeof document === 'undefined') return;

  injectedSheets.add(id);
  const style = document.createElement('style');
  style.setAttribute('data-lg', id);
  style.textContent = css;
  document.head.appendChild(style);
}
