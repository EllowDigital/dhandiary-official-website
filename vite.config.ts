import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  optimizeDeps: {
    esbuildOptions: {
      define: {
        "process.env.NODE_ENV": JSON.stringify(
          mode === "development" ? "development" : "production",
        ),
      },
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      mode === "development" ? "development" : "production",
    ),
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Lovable helper plugin; opt-in only because it can break some React dev builds.
    mode === "development" &&
    process.env.VITE_ENABLE_COMPONENT_TAGGER === "true"
      ? componentTagger()
      : false,
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
