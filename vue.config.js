module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/cbh-vue/'
    : '/',

  configureWebpack: {

    module: {
      rules: [
        {
          test: /\.csv$/,
          loader: 'csv-loader',
          options: {
            dynamicTyping: true,
            header: true,
            skipEmptyLines: true
          }
        }
      ]
    }


  }

}