import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './style/dark.css'
import './style/home.css'
import '../../../node_modules/vitepress-plugin-tabs/dist/client/browser/index.css'

export default {
    extends: DefaultTheme,
    Layout: Layout
}
