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
    // search: {
    //   provider: 'local'
    // },
    // editLink: {
    //   pattern: 'https://github.com/beesofknowledge/bok-site/tree/main/docs/:path',
    //   text: 'Edit this page on GitHub',
    // },
    outline: 'deep',
    sidebar: [
      {
        text: 'Gameplay',
        items: [
          { text: 'FAQs', link: '/faqs' },
          {
            text: 'Skills',
            collapsed: true,
            items: [
              { text: 'Juggernaut', link: '/skills/juggernaut' },
              { text: 'Marshal', link: '/skills/marshal' },
              { text: 'Knight', link: '/skills/knight' },
              { text: 'Warlord', link: '/skills/warlord' },
              { text: 'Duelist', link: '/skills/duelist' },
              { text: 'Sentinel', link: '/skills/sentinel' },
              { text: 'Brigand', link: '/skills/brigand' },
              { text: 'Berserker', link: '/skills/berserker' },
              { text: 'Warden', link: '/skills/warden' },
            ]
          },
          {
            text: 'Guides',
            collapsed: true,
              items: [
              { text: 'Level 30 Crafted Rings', link: 'guides/level-30-crafted-rings' },
              { text: 'Crafted Augments', link: 'guides/augments' },
              ],
          },
        ],
      },
      {
        text: 'Maps',
        items: [
          {
            text: 'Zones',
            collapsed: true,
            items: [
              { text: 'Newhaven Valley', link: '/zones/newhaven-valley' },
              { text: 'Dryfoot', link: '/zones/dryfoot' },
              { text: 'Meadowlands', link: '/zones/meadowlands' },
              { text: 'Northreach', link: '/zones/northreach' },
              { text: 'Newhaven City', link: '/zones/newhaven-city' },
              { text: 'Redshore', link: '/zones/redshore' },
              { text: 'Grimstone Canyon', link: '/zones/grimstone-canyon' },
            ],
          },
          {
            text: 'Dungeons',
            collapsed: true,
            items: [
              { text: 'Newhaven Valley Central Veins', link: '/dungeons/newhaven-valley-central-veins' },
              { text: 'Northreach Central Veins', link: '/dungeons/northreach-central-veins' },
              { text: 'Northreach EV Flies', link: '/dungeons/northreach-ev-flies' },
              { text: 'Northreach EV Bats', link: '/dungeons/northreach-ev-bats' },
              { text: 'Acquifer Karst', link: '/dungeons/acquifer-karst' },
              { text: 'Acquifer Undercroft', link: '/dungeons/acquifer-undercroft' },
              { text: 'Meadowlands EV Mires', link: '/dungeons/meadowlands-ev-mires' },
              { text: 'Meadowlands EV Frogs', link: '/dungeons/meadowlands-ev-frogs' },
              { text: 'Meadowlands EV Spiders', link: '/dungeons/meadowlands-ev-spiders' },
              { text: 'Dryfoot EV Ants', link: '/dungeons/dryfoot-ev-ants' },
              { text: 'Dryfoot EV Basilisks', link: '/dungeons/dryfoot-ev-basilisks' },
              { text: 'Dryfoot Stronghold', link: '/dungeons/dryfoot-stronghold' },
              { text: 'Redshore Ridge', link: '/dungeons/redshore-ridge' },
            ],
          },
          // {
          //   text: 'Professions',
          //   link: '/professions',
          //   collapsed: true,
          //   items: [
          //     { text: 'Hunter', link: '/professions/hunter' },
          //     { text: 'Forester', link: '/professions/forester' },
          //     { text: 'Prospector', link: '/professions/prospector' },
          //     { text: 'Tinker', link: '/professions/tinker' },
          //     { text: 'Weaponsmith', link: '/professions/weaponsmith' },
          //     { text: 'Armorsmith', link: '/professions/armorsmith' },
          //     { text: 'Outfitter', link: '/professions/outfitter' },
          //     { text: 'Provisioner', link: '/professions/provisioner' },
          //     { text: 'Woodworker', link: '/professions/woodworker' },
          //   ]
          // },
        ],
      },
      {
        text: 'Database',
        items: [
          { text: 'Quests', link: '/quests' },
          { text: 'Items', link: '/items' }
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'Embers Adrift', link: '/about/embers-adrift' },
          { text: 'This Site', link: '/about/this-site' },
          { text: 'Contributing', link: '/about/contributing' },
         ]
      },
    ],
  },
}


