module.exports = {
  productionSourceMap: false,
  css: {
    extract: true,
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/sass/all.sass";'
      },
      css: {}
    }
  }
};
