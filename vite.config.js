import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pricing: resolve(__dirname, 'bang-gia.html'),
        guide: resolve(__dirname, 'huong-dan-file.html'),
        faq: resolve(__dirname, 'cau-hoi.html'),
        blog: resolve(__dirname, 'blog.html'),
        blogDetail: resolve(__dirname, 'blog-detail.html'),
        productDetail: resolve(__dirname, 'product-detail.html'),

        admin: resolve(__dirname, 'admin/index.html'),
        adminLogin: resolve(__dirname, 'admin/login.html'),
        adminContent: resolve(__dirname, 'admin/content.html'),
        adminEditor: resolve(__dirname, 'admin/editor.html'),
        adminSetup: resolve(__dirname, 'admin/setup.html'),
        adminOrders: resolve(__dirname, 'admin/orders.html'),
        adminPermissions: resolve(__dirname, 'admin/permissions.html'),
        adminPosts: resolve(__dirname, 'admin/posts.html'),
        adminProducts: resolve(__dirname, 'admin/products.html'),
        adminReports: resolve(__dirname, 'admin/reports.html'),
        adminSettings: resolve(__dirname, 'admin/settings.html'),
      },
    },
  },
})
