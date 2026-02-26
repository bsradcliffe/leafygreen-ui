/**
 * @deprecated This package is deprecated. React Aria Components' collection
 * system replaces the descendants pattern. Use RAC's `<ListBox>`, `<Menu>`,
 * `<TabList>`, or other collection components instead.
 *
 * This package will be removed in a future major version.
 */

// Descendants
export {
  createDescendantsContext,
  type Descendant,
  type DescendantsContextProps,
  type DescendantsList,
  DescendantsProvider,
  type DescendantsProviderProps,
  getDescendantById,
  getDescendantByIndex,
  useDescendant,
  useDescendantsContext,
  useInitDescendants,
} from './Descendants';
// Highlight
export {
  createHighlightContext,
  Direction,
  type HighlightChangeHandler,
  type HighlightContextProps,
  type HighlightContextType,
  type HighlightHookReturnType,
  HighlightProvider,
  type Index,
  Position,
  useHighlight,
  useHighlightContext,
  type UseHighlightOptions,
} from './Highlight';
