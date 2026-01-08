import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
<<<<<<< HEAD
=======
// import { componentTagger } from "lovable-tagger";
>>>>>>> 6c2492d (Deploy cosmic-canvas to Vercel as codofolio)

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
<<<<<<< HEAD
  plugins: [react()],
=======
  plugins: [react() /*, mode === "development" && componentTagger()*/].filter(Boolean),
>>>>>>> 6c2492d (Deploy cosmic-canvas to Vercel as codofolio)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
