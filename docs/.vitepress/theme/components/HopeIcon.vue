<script setup lang="ts">
defineProps({
  icon: String,
  size: {
    type: String,
    default: '1em'
  },
  color: String
})
</script>

<template>
  <i :class="icon" :style="{ fontSize: size, color: color, verticalAlign: 'middle', marginRight: '4px' }"></i>
</template>
