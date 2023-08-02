import sidebarConfig from './sidebar.config.js'

// for sitemap
//import { createWriteStream } from 'node:fs'
//import { resolve } from 'node:path'
//import { SitemapStream } from 'sitemap'
//import { defineConfig } from 'vitepress'
//const links = []

const domain = 'beesofknowledge.com'

export default {
  appearance: 'dark',
  base: '/',
  lang: 'en-US',
  title: 'Bees of Knowledge',
  titleTemplate: false,
  cleanUrls: true,
  description: 'An information site for Embers Adrift',
  head: [],
  markdown: {
    anchor:{}
  },
  sitemap: {
    hostname: 'https://beesofknowledge.com'
  },
  async transformPageData(pageData, { siteConfig }) {
    // add title to dynamic pages from params
    if (!pageData.title && pageData.params.title) {
      pageData.title = pageData.params.title
    }
    // disble prev and next
    pageData.frontmatter.prev = false
    pageData.frontmatter.next = false
  },
  async transformHead( { page } ) {
    // add canonical link
    const headElements = [
      [
        'link', {
          rel: 'canonical',
          href: "https://" + domain + "/" + page.replace(/((^|\/)index)?\.md$/, '$2'),
        }
      ]
    ]
    return headElements
  },
  srcExclude: [],
  vite: {
    ssr: {
      noExternal: ['vue-dataset'],
    },
    plugins: [
    ],
  },
  // sitemap - disabled since sitemap was added as a feature
  // transformHtml: (_, id, { pageData }) => {
    // if (!/[\\/]404\.html$/.test(id))
    //   links.push({
    //     url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
    //     lastmod: pageData.lastUpdated
    // })
  // },
  // buildEnd: ({ outDir }) => {
    // const sitemap = new SitemapStream({ hostname: 'https://beesofknowledge.com/' })
    // const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    // sitemap.pipe(writeStream)
    // links.forEach((link) => sitemap.write(link))
    // sitemap.end()
  // },
  themeConfig: {
    aside: false,
    outline: 'deep',
    nav: [
      { text: 'Add Content', link: '/about/add-content' },
    ],
    sidebar: sidebarConfig,
    // search: {
    //   provider: 'local'
    // },
    // editLink: {
    //   pattern: 'https://github.com/beesofknowledge/bok-site/tree/main/docs/:path',
    //   text: 'View this page on GitHub',
    // },
  }
}

