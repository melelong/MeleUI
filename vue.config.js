const path = require('path');

module.exports = {
  pluginOptions: {
    jestSerializer: {
      functionMatch: true
    }
  },
  pages: {
    index: {
      // 修改项⽬⼊⼝⽂件
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  //  扩展webpack配置,使webpages加⼊编译
  chainWebpack: (config) => {
    // 配置 vue-loader
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => options);
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap((options) => options);
    config.resolve.alias.set('@ml', path.resolve(__dirname, 'examples/components/ml'));
  },
};
