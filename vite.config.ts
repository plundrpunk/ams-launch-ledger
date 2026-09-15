import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { preloadAssets } from "./preload-assets";

// BASE_PATH is set by deploy.sh to "/<repo>/" for GitHub Pages project sites.
export default defineConfig({
  base: process.env.BASE_PATH ?? "/",
  plugins: [
    react(),
    tailwindcss(),
    preloadAssets({
      fonts: [/newsreader-latin-opsz-normal.*\.woff2$/, /ibm-plex-mono-latin-400-normal.*\.woff2$/],
      image: {
        srcset: ["img/ledger-chart-900.webp 900w", "img/ledger-chart-1400.webp 1400w", "img/ledger-chart.webp 2000w"],
        sizes: "(min-width: 1320px) 1240px, calc(100vw - 48px)",
      },
    }),
  ],
  build: {
    target: "es2022",
    cssMinify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/gsap")) return "gsap";
          if (id.includes("node_modules/motion") || id.includes("node_modules/framer-motion")) return "motion";
        },
      },
    },
  },
});
