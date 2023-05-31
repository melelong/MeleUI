module.exports = {
  base: '/MeleUI/',
  title: 'MeleUI',
  description: '仿elementUI风格的组件库',
  head: [
    // 浏览器标签页面图标
    ['link', { rel: 'icon', href: 'https://blog.melelong.com/static/upload/2023-4-30-14-59-24-427-472cf.webp' }],
  ],
  plugins: ['@vuepress/back-to-top'],
  // 主题配置
  themeConfig: {
    backToTop: true,
    backToTopOptions: {
      visibilityHeight: 400,
      zIndex: 999,
      icon: "iconfont icon-arrow-up",
      right: "2rem",
      bottom: "2rem"
    },
    displayAllHeaders: true, // 默认值：false
    logo: 'https://blog.melelong.com/static/upload/2023-4-30-14-59-24-427-472cf.webp',
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/componentsDocs/' },
      { text: 'Gitee', link: 'https://gitee.com/mele-long/mele-ui' },
      { text: 'GitHub', link: 'https://github.com/melelong/MeleUI' },
      { text: 'Npm', link: 'https://www.npmjs.com/package/mele-ui' },
    ],
    sidebar: [
      {
        title: '指南',   // 必要的
        path: '/guide',
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/guide/introduce',
          '/guide/install',
          '/guide/styles',
        ]
      },
      {
        title: '组件',
        path: '/componentsDocs',
        collapsable: false,
        children: [
          '/componentsDocs/Layout',
          '/componentsDocs/Container',
          '/componentsDocs/Icon',
          '/componentsDocs/Button',
          '/componentsDocs/Link',
          '/componentsDocs/Radio',
          '/componentsDocs/Dialog',
          '/componentsDocs/Card',
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true
  }
}