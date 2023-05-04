import sidebarConfig from './sidebar.config.js'

export default {
  appearance: 'dark',
  base: '/',
  lang: 'en-US',
  title: 'Bees of Knowledge',
  titleTemplate: false,
  cleanUrls: true,
  description: 'An information side for Embers Adrift',
  head: [],
  markdown: {
    anchor:{}
  },
  async transformPageData(pageData, { siteConfig }) {
    if (!pageData.title && pageData.params.title) {
      pageData.title = pageData.params.title
    }
    pageData.frontmatter.prev = false
    pageData.frontmatter.next = false
  },
  srcExclude: [
    '**/professions',
    '**/classes',
    '**/drafts',
  ],
  vite: {
    ssr: {
      // Add npm packages containing invalid code here
      noExternal: ['vue-dataset']
    }
  },
  themeConfig: {
    aside: false,
    nav: [],
    outline: 'deep',
    sidebar: sidebarConfig,
    // search: {
    //   provider: 'local'
    // },
    // editLink: {
    //   pattern: 'https://github.com/beesofknowledge/bok-site/tree/main/docs/:path',
    //   text: 'Edit this page on GitHub',
    // },
  }
}

