
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Server config only applies in development
  server: {
    host: "0.0.0.0",
    port: 8080,
    hmr: {
      port: 8080,
      host: "localhost",
    },
  },
  
  // Build configuration for production
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false, // Disable sourcemaps in production for security
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu']
        }
      }
    }
  },
  
  // Only include development plugins in development mode
  plugins: [
    react(),
    // Only include componentTagger in development
    ...(mode === 'development' ? [componentTagger()] : [])
  ],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // Ensure no dev dependencies leak into production
  define: {
    __DEV__: JSON.stringify(mode === 'development'),
  },
  
  // Preview server config for production testing
  preview: {
    port: 4173,
    host: "0.0.0.0",
  },
}));
