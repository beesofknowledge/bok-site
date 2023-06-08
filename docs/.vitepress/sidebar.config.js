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
            { text: 'Newhaven Valley Central Veins', link: '/maps/newhaven-valley-central-veins' },
            { text: 'Newhaven City', link: '/maps/newhaven-city' },
            { text: 'Northreach', link: '/maps/northreach' },
            { text: 'Northreach Central Veins', link: '/maps/northreach-central-veins' },
            { text: 'Northreach EV Flies', link: '/maps/northreach-ev-flies' },
            { text: 'Northreach EV Bats', link: '/maps/northreach-ev-bats' },
            { text: 'Meadowlands', link: '/maps/meadowlands' },
            { text: 'Meadowlands EV Mires', link: '/maps/meadowlands-ev-mires' },
            { text: 'Meadowlands EV Frogs', link: '/maps/meadowlands-ev-frogs' },
            { text: 'Meadowlands EV Spiders', link: '/maps/meadowlands-ev-spiders' },
            { text: 'Acquifer Karst', link: '/maps/acquifer-karst' },
            { text: 'Acquifer Undercroft', link: '/maps/acquifer-undercroft' },
            { text: 'Dryfoot', link: '/maps/dryfoot' },
            { text: 'Dryfoot EV Ants', link: '/maps/dryfoot-ev-ants' },
            { text: 'Dryfoot EV Basilisks', link: '/maps/dryfoot-ev-basilisks' },
            { text: 'Redshore', link: '/maps/redshore' },
            { text: 'Redshore EV Flooded Ruins', link: '/maps/redshore-ev-flooded-ruins' },
            { text: 'Forgotten Depths', link: '/maps/forgotten-depths' },
            { text: 'Grimstone Canyon', link: '/maps/grimstone-canyon' },
          ],
      },
      {
        text: 'Crafting',
        collapsed: true,
          items: [
          { text: 'Rings', link: 'crafting/rings' },
          { text: 'Augments', link: 'crafting/augments' },
          { text: 'Crafting Quests', link: 'crafting/crafting-quests' },
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

