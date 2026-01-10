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

// 自动重定向逻辑：处理不带语言前缀的旧链接
const handleRedirect = () => {
  if (typeof window === 'undefined') return
  const path = window.location.pathname
  const base = '/Snap.Hutao-Manjusaka.Docs/'
  const supportedLangs = ['zh', 'en', 'ru', 'id', 'jp']
  
  // 1. 获取相对于 base 的路径
  let relativePath = ''
  if (path.startsWith(base)) {
    relativePath = path.substring(base.length)
  } else if (path === base.slice(0, -1) || path === base.slice(0, -1) + '/index.html') {
    relativePath = ''
  } else if (path === '/') {
    relativePath = ''
  } else {
    // 处理可能的异常路径
    relativePath = path.replace(/^\//, '')
  }

  // 如果路径为空，说明是首页，通常已由 index.md 的脚本处理，这里直接返回
  if (!relativePath || relativePath === '/' || relativePath === 'index.html') return

  // 2. 检查是否已经包含了支持的语言前缀
  const startsWithLang = supportedLangs.some(lang => 
    relativePath === lang || relativePath === lang + '/' || relativePath.startsWith(lang + '/')
  )
  
  // 3. 如果不包含语言前缀，且不是资源文件（不含点），则重定向到 zh 分支
  if (!startsWithLang && !relativePath.includes('.') && relativePath.length > 0) {
    const targetPath = (base + 'zh/' + relativePath).replace(/\/+/g, '/')
    window.location.replace(targetPath)
  }
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
