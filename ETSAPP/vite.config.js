import { defineConfig, resolveEnvPrefix } from 'vite'
import react from '@vitejs/plugin-react'
// import envCompatible from ' vite-plugin-env-compatible'

// https://vitejs.dev/config/\

// envPrefix : "REACT_APP"
export default defineConfig({
  plugins: [react(),
    // envCompatible(),
  ],
  
})
