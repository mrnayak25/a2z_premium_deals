import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Export Vite configuration
export default defineConfig({
  plugins: [react()],
  server: {

    open: true  // Automatically open the browser when the server starts
  }
});
