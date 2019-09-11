module.exports = {
  css: {
    loaderOptions: {
      scss: {
        data: `
          @import "~@/assets/scss/variables.scss";
          @import "~@/assets/scss/main.scss";
        `
      }
    }
  }
};
