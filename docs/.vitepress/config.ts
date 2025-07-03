import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'zh-CN',
  title: '赛高の日语学习工具',
  description: '这里收集日语学习、工作和生活相关的网站、文章和工具。',
  ignoreDeadLinks: true,
  themeConfig: {
    search: {
      provider: 'local',
    },
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },

    nav: [
      { text: '教程', link: '/guide/README' },
      { text: '文章', link: '/share/README' },
      { text: '工具', link: '/tools/README' },
      { text: '网站', link: '/websites/README' },
      { text: '生存指南', link: '/universities/README' },
    ],

    // sidebar: [
    //   {
    //     // text: 'Guide',
    //     items: [
    //       { text: 'Example', link: '/example' },
    //       // ...
    //     ],
    //   },
    // ],
    footer: {
      message: '基于 CC-BY-NC-SA：署名-非商业性使用-相同方式共享许可发布',
      copyright: 'Copyright © 2019-present',
    },
  },
});
