module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  lintOnSave: 'error',
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
}
