import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const BASE_PATH = env.VITE_BASE_URL ? `/${env.VITE_BASE_URL}/` : "/";

  return {
    plugins: [react()],
    base: BASE_PATH,
    server: {
      port: 5173,
    },
  };
});
