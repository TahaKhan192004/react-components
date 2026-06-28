import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib'

  return {
    plugins: [
      react(),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    ...(isLib ? {
      build: {
        lib: {
          entry: resolve(__dirname, 'src/components/index.ts'),
          name: 'YccUi',
          formats: ['es', 'cjs'],
          fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
        },
        rollupOptions: {
          external: ['react', 'react-dom', 'react/jsx-runtime', 'lucide-react'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
              'react/jsx-runtime': 'ReactJsxRuntime',
              'lucide-react': 'LucideReact',
            },
          },
        },
        copyPublicDir: false,
      },
    } : {}),
  }
})
