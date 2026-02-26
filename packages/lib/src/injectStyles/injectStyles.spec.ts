import { injectStyles } from './injectStyles';

describe('injectStyles', () => {
  afterEach(() => {
    // Clean up injected style tags
    document.querySelectorAll('style[data-lg]').forEach(el => el.remove());
  });

  test('injects a <style> element into the document head', () => {
    injectStyles('test-component', '.foo { color: red; }');
    const style = document.querySelector('style[data-lg="test-component"]');
    expect(style).toBeInTheDocument();
    expect(style?.textContent).toBe('.foo { color: red; }');
  });

  test('deduplicates by id', () => {
    injectStyles('dedup-test', '.a { color: red; }');
    injectStyles('dedup-test', '.b { color: blue; }');
    const styles = document.querySelectorAll(
      'style[data-lg="dedup-test"]',
    );
    expect(styles).toHaveLength(1);
    expect(styles[0]?.textContent).toBe('.a { color: red; }');
  });

  test('allows different ids', () => {
    injectStyles('comp-a', '.a {}');
    injectStyles('comp-b', '.b {}');
    expect(
      document.querySelector('style[data-lg="comp-a"]'),
    ).toBeInTheDocument();
    expect(
      document.querySelector('style[data-lg="comp-b"]'),
    ).toBeInTheDocument();
  });
});
