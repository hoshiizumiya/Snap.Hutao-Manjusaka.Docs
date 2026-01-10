<script setup lang="ts">
import { withBase } from 'vitepress'

defineProps({
  title: String,
  desc: String,
  logo: String,
  link: String,
  background: String
})
</script>

<template>
  <a :href="withBase(link)" class="vp-card" :style="{ backgroundColor: background }">
    <div class="vp-card-logo" v-if="logo">
      <img :src="withBase(logo)" alt="logo" />
    </div>
    <div class="vp-card-content">
      <h3 class="vp-card-title">{{ title }}</h3>
      <p class="vp-card-desc">{{ desc }}</p>
    </div>
  </a>
</template>

<style scoped>
.vp-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  text-decoration: none;
  transition: border-color 0.25s, background-color 0.25s;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
}

.vp-card:hover {
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-bg-mute);
}

.vp-card-logo img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.vp-card-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.vp-card-desc {
  margin: 0.25rem 0 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}
</style>
