import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' //tsconfig.node.json 添加 "allowSyntheticDefaultImports":true

import viteCompression from 'vite-plugin-compression'
// import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression(),
    // eslintPlugin({
    //   include: ['src/**/*.vue', 'src/**/*.ts'], // 检查的文件
    // }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 配置路径别名
    },
  },
  css:{
    preprocessorOptions:{ //全局样式文件
      scss:{
        additionalData:'@import "@/assets/css/main.scss";',
      }
    }
  },
  server: {
    //启动服务配置
    "host": "0.0.0.0",
    port: 9000,
    open: false,
    https: false,
    proxy: {
      '/api': {
        target: 'http://47.108.185.157:9000',//dev 前台接口
        // target: 'http://10.10.0.93:9000',//杨航
        // target: 'http://10.10.0.124:9000',//包季鑫
        // target: 'http://10.10.0.138:9000',//陈战
        // target: 'http://10.10.0.123:9000',//杜飘
        // target: 'http://10.10.0.83:9000',//吴
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      },
      '/bgapi': {
        target: 'http://47.108.185.157:9090',//dev 后台接口
        // target: 'http://10.10.0.124:9090',//dev 包季鑫
        changeOrigin: true,
        rewrite: path => path.replace(/^\/bgapi/, '')
      }
    },
  },
  build: {
    assetsDir: './static',
    chunkSizeWarningLimit: 500,
    reportCompressedSize: false,
    minify: 'terser',
    cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
    terserOptions: {
      compress: {
        // warnings: false,
        drop_console: true, // 打包时删除console
        drop_debugger: true, // 打包时删除 debugger
        pure_funcs: ['console.log'],
      },
      output: {
        // 去掉注释内容
        comments: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // 拆分代码，这个就是分包，配置完后自动按需加载，现在还比不上webpack的splitchunk，不过也能用了。
          vue: ['vue', 'vue-router'],
          // vant: ['vant'],
          // echarts: ['echarts'],
        },
      },
    },
  },
})