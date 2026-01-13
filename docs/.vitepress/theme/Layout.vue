<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData, useRoute } from 'vitepress'
import { nextTick, provide, onMounted, watch } from 'vue'
import mediumZoom from 'medium-zoom'

const { isDark } = useData()
const route = useRoute()

const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  document.documentElement.style.setProperty('--darkX', x + 'px')
  document.documentElement.style.setProperty('--darkY', y + 'px')

  // @ts-ignore
  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready
})

const initZoom = () => {
  mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
}

// 自动重定向逻辑：处理不带语言前缀的旧链接（含 .html）
const handleRedirect = () => {
  if (typeof window === 'undefined') return

  const path = window.location.pathname
  const base = '/Snap.Hutao-Manjusaka.Docs/'
  const supportedLangs = ['zh', 'en', 'ru', 'id', 'jp', 'tw']

  const detectTargetLang = () => {
    const raw = (navigator.language || '').toLowerCase()
    if (raw.startsWith('ja')) return 'jp'
    if (raw.startsWith('zh')) {
      // zh-hk/zh-tw/zh-mo -> tw
      if (raw.includes('-tw') || raw.includes('-hk') || raw.includes('-mo')) return 'tw'
      return 'zh'
    }
    const primary = raw.split('-')[0]
    return supportedLangs.includes(primary) ? primary : 'zh'
  }

  // 1) 取得相对 base 的路径
  let relativePath = ''
  if (path.startsWith(base)) {
    relativePath = path.substring(base.length)
  } else if (path === base || path === base.slice(0, -1) || path === '/') {
    relativePath = ''
  } else {
    relativePath = path.replace(/^\//, '')
  }

  relativePath = relativePath.replace(/^\//, '')

  // 首页：交给 docs/index.md 的逻辑
  if (!relativePath || relativePath === 'index' || relativePath === 'index.html') return

  // 2) 已经有语言前缀就不处理
  const firstSegment = relativePath.split('/')[0]
  if (supportedLangs.includes(firstSegment)) return

  // 3) 过滤静态资源（但允许 .html 的旧链接）
  const isHtml = relativePath.endsWith('.html')
  if (relativePath.includes('.') && !isHtml) return

  // 4) 兼容 cleanUrls：把 *.html 规范化为无扩展名
  const normalized = isHtml ? relativePath.slice(0, -'.html'.length) : relativePath

  const targetLang = detectTargetLang()
  const targetPath = (base + targetLang + '/' + normalized).replace(/\/{2,}/g, '/')
  window.location.replace(targetPath)
}

onMounted(() => {
  initZoom()
  handleRedirect()
})

watch(
  () => route.path,
  () => {
    nextTick(() => initZoom())
  }
)
</script>

<template>
  <DefaultTheme.Layout />
</template>

<style>
/* 隐藏语言切换菜单中的第一个选项（通常是指向根目录的重复简体中文） */
.vp-nav-languages-item:first-child {
  display: none;
}
</style>
