import { cn } from './cn';

describe('cn', () => {
  test('joins multiple strings', () => {
    expect(cn('foo', 'bar', 'baz')).toBe('foo bar baz');
  });

  test('filters out falsy values', () => {
    expect(cn('foo', false, undefined, null, 'bar')).toBe('foo bar');
  });

  test('supports boolean conditions', () => {
    const isActive = true;
    const isDisabled = false;
    expect(cn('base', isActive && 'active', isDisabled && 'disabled')).toBe(
      'base active',
    );
  });

  test('supports object syntax', () => {
    expect(cn('base', { active: true, disabled: false })).toBe('base active');
  });

  test('returns empty string for no arguments', () => {
    expect(cn()).toBe('');
  });

  test('returns empty string for all falsy arguments', () => {
    expect(cn(false, null, undefined)).toBe('');
  });

  test('handles mixed arguments', () => {
    expect(cn('foo', true && 'bar', { baz: true, qux: false })).toBe(
      'foo bar baz',
    );
  });
});
