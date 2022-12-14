// import { defineClientConfig} from '@vuepress'
// const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { defaultTheme } = require('@vuepress/theme-default')

const { searchPlugin } = require('@vuepress/plugin-search')
module.exports = {
  lang: 'zh-CN',
  title: 'Hello, VuePress!',
  description: 'This is my first VuePress site',
  base: '/translate-worker/',
  head: [
    // [
    //   "link", {
    //     rel: "icon",
    //     href: "/favicon.ico"
    //   }
    // ]
  ],
  // dest: '/docs-dist',
  plugins: [
    searchPlugin({
      // 配置项
    }),
  ],
  theme: defaultTheme({
    navbar: [
      {
        text: 'Docker 文档',
        link: '/docker/',
      },
      {
        text: 'Nginx 文档',
        link: '/nginx/',
      },
      {
        text: 'Sqlite 文档',
        link: '/sqlite/',
      },
      {
        text: 'MongoDB 文档',
        link: '/mongodb/',
      },
    ],
    sidebar: 'auto',
  }),
}
