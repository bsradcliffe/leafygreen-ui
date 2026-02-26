/**
 * Concatenates class name strings, filtering out falsy values.
 */
export function cn(
  ...classes: Array<string | false | undefined | null>
): string {
  return classes.filter(Boolean).join(' ');
}

/** Light mode background: white (#FFFFFF) */
const lightContainerStyles = 'bg-[#FFFFFF] p-200';

/** Dark mode background: black (#001E2B) */
const darkContainerStyles = 'bg-[#001E2B] p-200';

export const getContainerStyles = (darkMode: boolean): string =>
  darkMode ? darkContainerStyles : lightContainerStyles;

export const amountTextStyles = 'mb-400';
