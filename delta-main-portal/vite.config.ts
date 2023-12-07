import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    federation({
      name: 'delta-main-portal',
      filename: 'remoteEntry.js',
      remotes: {
        userManagementPortal: {
          external: 'http://localhost:8080/remoteEntry.js',
          format: 'var',
          from: 'webpack'
        },
        rolesManagementPortal: {
          external: 'http://localhost:4200/remoteEntry.js',
          format: 'var',
          from: 'webpack'
        }
      },
      ...require('./package.json').dependencies
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
