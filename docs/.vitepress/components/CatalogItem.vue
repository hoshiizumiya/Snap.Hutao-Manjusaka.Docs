<template>
  <ul v-if="items.length">
    <li v-for="item in items" :key="item.name">
      <a v-if="item.path" :href="item.path">{{ item.title }}</a>
      <span v-else>{{ item.title }}</span>
      <CatalogItem v-if="item.children.length" :items="item.children" :base="base" :level="level" />
    </li>
  </ul>
</template>

<script setup lang="ts">
interface Item {
  name: string
  title: string
  path: string | null
  children: Item[]
}

interface Props {
  items: Item[]
  base: string
  level: number
}

defineProps<Props>()
</script>

<style scoped>
ul {
  list-style: none;
  padding-left: 1em;
}

li {
  margin: 0.5em 0;
}

a {
  color: var(--vp-c-brand);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>