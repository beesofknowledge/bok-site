import DefaultTheme from 'vitepress/theme'
import './custom.css'
// import MyComponent from './MyComponent.vue'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx)

    // register your custom global components
    ctx.app
      // .component('MyComponent', MyComponent)
  }
}

