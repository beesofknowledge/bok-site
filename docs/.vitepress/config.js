
export default {
  appearance: true,
  base: '/',
  lang: 'en-US',
  title: 'Bees of Knowledge',
  titleTemplate: false,
  cleanUrls: true,
  description: 'An information side for Embers Adrift',
  head: [
    //
  ],
  // ignoreDeadLinks: false,
  lastUpdated: true,
  markdown: {
    lineNumbers: false
  },
  // outDir: './.vitepress/dist',
  // cacheDir: './.vitepress/cache',
  // srcDir: './src',

  themeConfig: {
    prev: false,
    next: false,
    tempDir: '/var/tmp/vitepress',
    nav: [
      // { text: 'FAQs', link: '/pages/faqs' },
      {
          text: 'Database',
          items: [
              { text: 'Quests', link: '/quests' },
              { text: 'Items', link: '/items' },
              // { text: 'Npcs', link: '/npcs' },
              // { text: 'Creatures', link: '/creatures' },
          ]
      },
    ],
    sidebar: [
      {
        text: 'Gameplay',
        collapsed: false,
        items: [
          // { text: 'Getting Started', link: '/getting-started' },
          // { text: 'Tips', link: '/tips' },
          { text: 'FAQs', link: '/faqs' },
          {
            text: 'Guides',
            collapsed: false,
            items: [
              { text: 'Eryola\'s Ultimate Duelist Guide', link: '/guides/eryolas-ultimate-duelist-guide' },
            ],
          },
        ],
      },
      {
        text: 'Maps',
        collapsed: false,
        items: [
          {
            text: 'Zones',
            // link: '/zones',
            collapsed: false,
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
            // link: '/dungeons',
            collapsed: false,
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
          //   text: 'Classes',
          //   link: '/classes',
          //   collapsed: true,
          //   items: [
          //     { text: 'Juggernaut', link: '/classes/juggernaut' },
          //     { text: 'Marshal', link: '/classes/marshal' },
          //     { text: 'Knight', link: '/classes/knight' },
          //     { text: 'Warlord', link: '/classes/warlord' },
          //     { text: 'Duelist', link: '/classes/duelist' },
          //     { text: 'Sentinel', link: '/classes/sentinel' },
          //     { text: 'Brigand', link: '/classes/brigand' },
          //     { text: 'Berserker', link: '/classes/berserker' },
          //     { text: 'Warden', link: '/classes/warden' },
          //   ]
          // },
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
        collapsed: false,
        items: [
          { text: 'Quests', link: '/quests' },
          { text: 'Items', link: '/items' },
          // { text: 'NPCs', link: '/npcs' },
          // { text: 'Creatures', link: '/creatures' },
        ]
      },
      {
        text: 'About',
        collapsed: true,
        items: [
          { text: 'This Site', link: '/this-site' },
          { text: 'Embers Adrift', link: '/embers-adrift' },
          { text: 'Todo', link: '/todo' },
        ]
      },
    ],
    // logo: '/assets/logo.png',
    editLink: {
      pattern: 'https://github.com/beesofknowledge/bok-site/tree/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    lastUpdatedText: 'Updated Date',
    outline: 'deep',

  },

    // root: string
    // srcDir: string
    // site: SiteData<ThemeConfig>
    // configPath: string | undefined
    // themeDir: string
    // outDir: string
    // tempDir: string
    // alias: AliasOptions
    // pages: string[]

}
