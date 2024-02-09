import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components/'),
      '@public': path.resolve(__dirname, './public'),
      '@contexts': path.resolve(__dirname, './src/contexts/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@interfaces': path.resolve(__dirname, './src/interfaces/'),
      '@requests': path.resolve(__dirname, './src/requests/'),
      '@responses': path.resolve(__dirname, './src/responses/'),
      '@services': path.resolve(__dirname, './src/services/'),
      '@constants': path.resolve(__dirname, './src/constants/'),
    },
  },
  server: {
    host: '0.0.0.0',
    watch: { usePolling: true },
  },
})
