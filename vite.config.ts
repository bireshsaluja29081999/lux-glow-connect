// @lovable.dev/vite-tanstack-config already includes the following - do NOT add them manually
// or the app will break with duplicate plugins:
// - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
// - componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
// - error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this - wrangler.jsonc main alone is insufficient.
export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "assets/[name]-[hash].js",
        },
      },
    },
    plugins: [
      {
        name: "static-prerender",
        apply: "build",
        closeBundle() {
          // After build, create index.html from shell.html if it exists
          // or create a minimal index.html for SPA fallback
        },
      },
    ],
  },
  tanstack: {
    prerender: {
      enabled: true,
      autoSubfolderIndex: true,
      autoStaticPathsDiscovery: true,
      failOnError: false,
    },
  },
});
