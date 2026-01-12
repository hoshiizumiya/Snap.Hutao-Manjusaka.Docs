<template>
  <div class="catalog">
    <CatalogItem :items="catalogTree" :base="base" :level="level" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { catalogTrees } from '../catalog-tree'

interface Props {
  level: number
}

const props = defineProps<Props>()

const route = useRoute()

// 计算base和lang
const supportedLangs = Object.keys(catalogTrees)

const lang = computed(() => {
  const path = route.path || ''
  const segs = path.split('/').filter(Boolean)
  const found = segs.find(s => supportedLangs.includes(s))
  return found || 'zh'
})

const base = computed(() => {
  const path = route.path || ''
  const segs = path.split('/').filter(Boolean)
  const idx = segs.findIndex(s => supportedLangs.includes(s))
  if (idx === -1) return `/${lang.value}`
  return `/${segs.slice(0, idx + 1).join('/')}`
})

function toHref(rel: string | null) {
  if (!rel) return null
  const parts = rel.split('/').filter(Boolean)
  if (parts[0] === lang.value) parts.shift()
  const rest = parts.join('/')
  return rest ? `${base.value}/${rest}`.replace(/\/\/+/g, '/') : base.value
}

// 构建目录树
const catalogTree = computed(() => {
  const rawTree = catalogTrees[lang.value] || catalogTrees['zh']
  return buildTree(rawTree, 0, '')
})

function buildTree(obj: any, depth: number, currentPath: string): any[] {
  if (depth >= props.level || !obj) return []

  return Object.keys(obj).map(key => {
    const value = obj[key]
    const fullPath = currentPath ? `${currentPath}/${key}` : key
    let children: any[] = []
    let title = key
    let path: string | null = null

    if (value && typeof value === 'object') {
      // directory if has children, otherwise it's a file entry produced by generator
      if (value.children) {
        title = value.title || key
        path = value.path ? toHref(value.path) : null
        children = buildTree(value.children, depth + 1, fullPath)
      } else {
        title = value.title || key
        path = value.path ? toHref(value.path) : `${base.value}/${fullPath}`
      }
    } else {
      // legacy fallback (string titles)
      title = value || key
      path = `${base.value}/${fullPath}`
    }

    return {
      name: key,
      title,
      path,
      children
    }
  })
}
</script>

<script lang="ts">
import CatalogItem from './CatalogItem.vue'
</script>

<style scoped>
</style>