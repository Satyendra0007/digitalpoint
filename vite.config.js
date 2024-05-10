const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        script: 'script.js',
        homescript: 'homescript.js'
        // ...
        // List all files you want in your build
      }
    }
  }
})