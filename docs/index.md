---
layout: home
hero:
  name: Snap Hutao
  text: 胡桃工具箱-Manjusaka
  tagline: 重定向中...  Redirecting...
---

<script setup>
import { onMounted } from 'vue'
import { useRouter, useData } from 'vitepress'

const { site } = useData()
const router = useRouter()

onMounted(() => {
  const lang = navigator.language.split('-')[0]
  const supportedLangs = ['zh', 'en', 'ru', 'id', 'jp']
  const targetLang = supportedLangs.includes(lang) ? lang : 'zh'
  
  // 避免无限循环
  const path = window.location.pathname
  const base = site.value.base
  if (path === base || path === base + 'index' || path === base + 'index.html' || path === base.slice(0, -1)) {
    router.go(`${base}${targetLang}/`)
  }
})
</script>

<meta name="algolia-site-verification"  content="E74D0D0EDA48B6B3" />