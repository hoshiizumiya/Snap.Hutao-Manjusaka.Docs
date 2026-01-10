import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import VPCard from './components/VPCard.vue'
import HopeIcon from './components/HopeIcon.vue'
import Catalog from './components/Catalog.vue'
import './style/dark.css'
import '../../../node_modules/vitepress-plugin-tabs/dist/client/browser/index.css'

export default {
    extends: DefaultTheme,
    Layout: Layout,
    enhanceApp({ app }) {
        app.component('VPCard', VPCard)
        app.component('HopeIcon', HopeIcon)
        app.component('Catalog', Catalog)
    }
}
