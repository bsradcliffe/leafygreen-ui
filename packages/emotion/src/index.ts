/**
 * @deprecated This package is deprecated. LeafyGreen UI has migrated to
 * Tailwind CSS for styling. Use Tailwind utility classes and the `cn()` helper
 * from `@leafygreen-ui/lib` instead.
 *
 * This package will be removed in a future major version.
 */

import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';

import emotion from './emotion';

/** @deprecated Use Tailwind utility classes instead */
export const {
  flush,
  hydrate,
  cx,
  merge,
  getRegisteredStyles,
  injectGlobal,
  keyframes,
  css,
  sheet,
  cache,
} = emotion;

/** @deprecated */
export { CacheProvider };

/** @deprecated */
export const {
  extractCritical,
  renderStylesToString,
  renderStylesToNodeStream,
} = createEmotionServer(cache);

/** @deprecated */
export default emotion;
