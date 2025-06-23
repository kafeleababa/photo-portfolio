// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Get the base path from an environment variable set during build
// process.env.VITE_BASE_URL will be 'photo-portfolio' when built by GitHub Actions
// It will be undefined during local development, so it defaults to '/'
const BASE_URL = process.env.VITE_BASE_URL
  ? `/${process.env.VITE_BASE_URL}/`
  : "/";

export default defineConfig({
  plugins: [react()],
  // Set the base path for your application's assets and routing
  base: BASE_URL,
  server: {
    port: 3000,
    // Add this to ensure local dev server works with base path if needed
    // Otherwise, you might see issues locally if your dev server doesn't use the base
    // However, Vite handles this reasonably well usually.
    // If you experience issues during local development after this,
    // you might need to adjust your local image paths to be relative,
    // or rely purely on absolute paths that are handled by Vite's base config.
  },
});
