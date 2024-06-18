// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })




import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom'
  },
});