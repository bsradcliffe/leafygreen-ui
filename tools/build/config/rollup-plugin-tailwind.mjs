/**
 * Rollup plugin that processes Tailwind CSS for LeafyGreen UI packages.
 *
 * For each package build:
 * 1. Scans source files for Tailwind utility classes
 * 2. Runs PostCSS + Tailwind v4 to generate CSS
 * 3. Embeds the CSS string in the JS bundle
 * 4. Auto-injects the CSS into <head> on first import via injectStyles()
 */
import { createRequire } from 'node:module';
import { readFileSync, existsSync } from 'node:fs';
import path from 'path';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';

const require = createRequire(import.meta.url);

// Virtual module ID for the injected CSS side-effect
const VIRTUAL_CSS_MODULE_ID = '\0lg-tailwind-css';

/**
 * Find the tokens.css file by walking up from the package directory
 */
function findTokensCss(startDir) {
  let dir = startDir;
  const maxDepth = 10;
  for (let i = 0; i < maxDepth; i++) {
    const candidate = path.join(
      dir,
      'packages/tokens/src/tailwind/tokens.css',
    );
    if (existsSync(candidate)) return candidate;
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return null;
}

/**
 * @returns {import('rollup').Plugin}
 */
export default function lgTailwind() {
  const cwd = process.cwd();
  const pkgJsonPath = path.resolve(cwd, 'package.json');
  let pkgName = 'unknown';
  let pkgHasTailwind = false;

  try {
    const pkg = JSON.parse(readFileSync(pkgJsonPath, 'utf8'));
    pkgName = pkg.name || 'unknown';
  } catch {
    // ignore
  }

  // CSS ID used for deduplication in injectStyles()
  const cssId = pkgName.replace(/[@/]/g, '').replace(/\s+/g, '-');
  let generatedCss = '';

  return {
    name: 'lg-tailwind',

    async buildStart() {
      // Check if this package has any .tsx/.ts files with className containing Tailwind-like patterns
      // We check for the presence of `tv(` or tailwind utility classes
      const tokensCssPath = findTokensCss(cwd);
      if (!tokensCssPath) {
        pkgHasTailwind = false;
        return;
      }

      // Read the package's source files to scan for Tailwind usage
      const { glob } = await import('glob');
      const sourceFiles = await glob('src/**/*.{ts,tsx}', {
        cwd,
        absolute: true,
        ignore: ['**/*.spec.*', '**/*.stories.*', '**/*.test.*'],
      });

      let sourceContent = '';
      for (const file of sourceFiles) {
        try {
          sourceContent += readFileSync(file, 'utf8') + '\n';
        } catch {
          // ignore
        }
      }

      // Only process if we find tailwind-variants usage or explicit Tailwind classes
      if (
        !sourceContent.includes('tv(') &&
        !sourceContent.includes("from 'tailwind-variants'")
      ) {
        pkgHasTailwind = false;
        return;
      }

      pkgHasTailwind = true;

      // Create a virtual CSS input that imports the tokens and scans source content
      const inputCss = `@import "${tokensCssPath}";\n`;

      try {
        const result = await postcss([
          tailwindcss({
            // Tailwind v4 auto-detects content from @source directives
            // We point it at the package's source directory
            base: cwd,
          }),
        ]).process(inputCss, {
          from: path.join(cwd, 'src/tailwind-input.css'),
          to: path.join(cwd, 'dist/tailwind-output.css'),
        });

        generatedCss = result.css;
      } catch (err) {
        this.warn(`Tailwind CSS processing failed for ${pkgName}: ${err.message}`);
        pkgHasTailwind = false;
      }
    },

    resolveId(id) {
      if (id === VIRTUAL_CSS_MODULE_ID) {
        return id;
      }
      return null;
    },

    load(id) {
      if (id === VIRTUAL_CSS_MODULE_ID) {
        // Return the CSS injection module
        const escapedCss = generatedCss
          .replace(/\\/g, '\\\\')
          .replace(/`/g, '\\`')
          .replace(/\$/g, '\\$');

        return `
import { injectStyles } from '@leafygreen-ui/lib';
injectStyles("${cssId}", \`${escapedCss}\`);
`;
      }
      return null;
    },

    /**
     * For packages that use Tailwind, inject a CSS side-effect import
     * at the top of the entry module.
     */
    transform(code, id) {
      if (!pkgHasTailwind) return null;

      // Only inject into the package's main entry point
      const normalized = id.replace(/\\/g, '/');
      if (
        normalized.endsWith('src/index.ts') ||
        normalized.endsWith('src/index.tsx')
      ) {
        return {
          code: `import "${VIRTUAL_CSS_MODULE_ID}";\n${code}`,
          map: null,
        };
      }

      return null;
    },
  };
}
