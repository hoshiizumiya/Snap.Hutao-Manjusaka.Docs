import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import Layout from './Layout.vue'
import VPCard from './components/VPCard'
import VPBanner from './components/VPBanner'
import './style/tailwind.css'
import './style/dark.css'
import './style/home.css'
import '../styles/index.scss'
import '../styles/palette.scss'
import '../styles/vp-card.scss'
import '../styles/vp-banner.scss'
import '../styles/config.scss'
import '../styles/patch-lang-switch.scss'

export default {
    extends: DefaultTheme,
    Layout: Layout,
    enhanceApp({ app }) {
        enhanceAppWithTabs(app)
        app.component('VPCard', VPCard)
        app.component('VPBanner', VPBanner)
    }
} satisfies Theme
