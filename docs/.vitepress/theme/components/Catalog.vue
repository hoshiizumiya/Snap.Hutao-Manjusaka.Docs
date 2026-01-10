<script setup lang="ts">
import { useData, useRoute, withBase } from 'vitepress'
import { computed } from 'vue'

const props = defineProps({
  base: {
    type: String,
    default: ''
  },
  level: {
    type: Number,
    default: 2
  }
})

const { theme, site } = useData()
const route = useRoute()

const catalogItems = computed(() => {
  const sidebar = theme.value.sidebar
  if (!sidebar) return []

  const base = site.value.base || '/'
  // 获取相对于 base 的路径
  const pathWithoutBase = route.path.startsWith(base) 
    ? route.path.substring(base.length - 1) 
    : route.path
  
  // 1. 确定搜索路径 (优先使用传入的 base，否则使用当前页面相对于站点根目录的路径)
  let searchPath = props.base 
  if (!searchPath) {
    searchPath = pathWithoutBase.endsWith('/') ? pathWithoutBase : pathWithoutBase.substring(0, pathWithoutBase.lastIndexOf('/') + 1)
  }
  
  // 标准化路径：移除末尾斜杠和 .html
  const normalize = (p: string) => p.replace(/\.html$/, '').replace(/\/+$/, '') || '/'
  const targetPath = normalize(searchPath)

  // 2. 找到对应的侧边栏分组
  let sidebarGroup: any[] = []
  if (Array.isArray(sidebar)) {
    sidebarGroup = sidebar
  } else {
    // 多侧边栏模式，根据相对于站点的路径匹配 key (如 '/zh/', '/en/')
    const keys = Object.keys(sidebar)
    const matchKey = keys.find(key => pathWithoutBase.startsWith(key))
    if (matchKey) {
      sidebarGroup = sidebar[matchKey]
    }
  }

  // 3. 递归寻找目标目录的 items
  const findInItems = (items: any): any[] => {
    if (!Array.isArray(items)) return []

    for (const item of items) {
      if (item.link && normalize(item.link) === targetPath) {
        return Array.isArray(item.items) ? item.items : []
      }
      if (item.items) {
        const found = findInItems(item.items)
        if (found.length) return found
      }
    }
    return []
  }

  const result = findInItems(sidebarGroup)

  // 4. 兜底逻辑：如果是在语言根目录（如 /en/）且没找到匹配项，显示顶层所有项
  const langRoots = ['/zh', '/en', '/ru', '/id', '/jp']
  if (result.length === 0 && langRoots.includes(targetPath)) {
    return Array.isArray(sidebarGroup) ? sidebarGroup : []
  }

  return result
})
</script>

<template>
  <div class="vp-catalog" v-if="catalogItems.length > 0">
    <div v-for="item in catalogItems" :key="item.text" class="vp-catalog-item">
      <a :href="withBase(item.link || '#')" class="vp-catalog-link">
        <span class="vp-catalog-text">{{ item.text }}</span>
      </a>
      <div v-if="item.items && level > 1" class="vp-catalog-sub">
         <div v-for="sub in item.items.slice(0, 6)" :key="sub.text" class="vp-catalog-sub-item">
            <a :href="withBase(sub.link || '#')">{{ sub.text }}</a>
         </div>
         <div v-if="item.items.length > 6" class="vp-catalog-more">...</div>
      </div>
    </div>
  </div>
  <div v-else class="vp-catalog-empty">
    <!-- 调试信息仅在开发环境下或需要时开启 -->
    <!-- <p style="color: gray; font-size: 12px;">No catalog items found for: {{ route.path }}</p> -->
  </div>
</template>

<style scoped>
.vp-catalog {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.vp-catalog-item {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.25rem;
  background-color: var(--vp-c-bg-soft);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
}

.vp-catalog-item:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.vp-catalog-link {
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
  text-decoration: none !important;
  margin-bottom: 0.75rem;
  display: block;
}

.vp-catalog-item:hover .vp-catalog-link {
  color: var(--vp-c-brand);
}

.vp-catalog-sub {
  font-size: 0.85rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.vp-catalog-sub-item a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  background-color: var(--vp-c-bg-mute);
  padding: 2px 8px;
  border-radius: 4px;
  transition: color 0.25s;
}

.vp-catalog-sub-item a:hover {
  color: var(--vp-c-brand);
}

.vp-catalog-more {
    color: var(--vp-c-text-3);
    padding: 2px 4px;
}
</style>