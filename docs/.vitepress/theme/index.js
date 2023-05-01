import DefaultTheme from 'vitepress/theme'
import './custom.css'

//import ImageLink from '../components/ImageLink.vue'
// import MyItemComponent from './MyItemComponent.vue'
// import MyQuestComponent from './MyQuestComponent.vue'
// import ItemCard from './ItemCard.vue'
// import ItemListCard from './ItemList.vue'
// import QuestCard from './QuestCard.vue'
// import QuestList from './QuestList.vue'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx)

    // register your custom global components
    ctx.app
//      .component('ImageLink', ImageLink)
      // .component('MyItemComponent', MyItemComponent)
      // .component('MyQuestComponent', MyQuestComponent)
      // .component('ItemCard', ItemCard)
      // .component('ItemList', ItemList)
      // .component('QuestCard', QuestCard)
      // .component('QuestList', QuestList)
  }
}


