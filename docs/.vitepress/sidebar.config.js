export { sidebar as default}

const sidebar = [
  {
    text: 'Database',
    items: [
      { text: 'Items', link: '/items' },
      { text: 'Quests', link: '/quests' },
    ]
  },
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
        text: 'Maps',
        collapsed: true,
          items: [
            { text: 'Newhaven Valley', link: '/maps/newhaven-valley' },
            { text: 'Dryfoot', link: '/maps/dryfoot' },
            { text: 'Meadowlands', link: '/maps/meadowlands' },
            { text: 'Northreach', link: '/maps/northreach' },
            { text: 'Newhaven City', link: '/maps/newhaven-city' },
            { text: 'Redshore', link: '/maps/redshore' },
            { text: 'Grimstone Canyon', link: '/maps/grimstone-canyon' },
            { text: 'Newhaven Valley Central Veins', link: '/maps/newhaven-valley-central-veins' },
            { text: 'Northreach Central Veins', link: '/maps/northreach-central-veins' },
            { text: 'Northreach EV Flies', link: '/maps/northreach-ev-flies' },
            { text: 'Northreach EV Bats', link: '/maps/northreach-ev-bats' },
            { text: 'Acquifer Karst', link: '/maps/acquifer-karst' },
            { text: 'Meadowlands EV Mires', link: '/maps/meadowlands-ev-mires' },
            { text: 'Meadowlands EV Frogs', link: '/maps/meadowlands-ev-frogs' },
            { text: 'Meadowlands EV Spiders', link: '/maps/meadowlands-ev-spiders' },
            { text: 'Dryfoot EV Ants', link: '/maps/dryfoot-ev-ants' },
            { text: 'Dryfoot EV Basilisks', link: '/maps/dryfoot-ev-basilisks' },
            { text: 'Forgotten Depths', link: '/maps/forgotten-depths' },
          ],
      },
      {
        text: 'Guides',
        collapsed: true,
          items: [
          { text: 'Crafted Rings', link: 'guides/crafted-rings' },
          { text: 'Crafted Augments', link: 'guides/augments' },
          ],
      },
    ],
  },
  {
    text: 'About',
    items: [
      { text: 'Embers Adrift', link: '/about/embers-adrift' },
      { text: 'This Site', link: '/about/this-site' },
     ]
  },
]

