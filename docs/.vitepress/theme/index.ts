import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import Layout from './Layout.vue'
import './style/dark.css'
import './style/home.css'
import '../styles/index.scss'
import '../styles/palette.scss'
import '../styles/vp-card.scss'
import '../styles/config.scss'
import '../styles/patch-lang-switch.scss'

export default {
    extends: DefaultTheme,
    Layout: Layout,
    enhanceApp({ app }) {
        enhanceAppWithTabs(app)
    }
} satisfies Theme
