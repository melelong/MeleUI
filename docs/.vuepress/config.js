module.exports = {
  base: '/MeleUI/',
  title: 'MeleUI',
  description: '仿elementUI风格的组件库',
  head: [
    // 浏览器标签页面图标
    ['link', { rel: 'icon', href: 'https://blog.melelong.com/static/upload/2023-4-30-14-59-24-427-472cf.webp' }],
    // 配置样式文件
    // ['link', { rel: 'stylesheet', href: './styles/index.css' }],
  ],
  // 主题配置
  themeConfig: {
    displayAllHeaders: true, // 默认值：false
    logo: 'https://blog.melelong.com/static/upload/2023-4-30-14-59-24-427-472cf.webp',
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/componentsDocs/' },
      { text: 'Gitee', link: 'https://gitee.com/mele-long/mele-ui' },
      { text: 'GitHub', link: 'https://github.com/melelong/MeleUI' },
      { text: 'Npm', link: 'https://www.npmjs.com/package/mele-ui' },
    ],
    sidebar: [
      {
        title: '指南',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/guide/',
          '/install/'
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/componentsDocs/Layout',
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true
  }
}