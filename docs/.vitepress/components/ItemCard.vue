<script setup>
  import ImageLink from './ImageLink.vue'

  const props = defineProps({
    item: Object
  })
</script>

<template>
  <h1>{{ item.name }}</h1>

  <p class="bok-text-2">
    Equipment Type: {{ item.slot }}<br />
    Required Level: {{ item.level }}
  </p>

  <ImageLink path="items/" :name="item.name" :alt="item.name" />

  <!-- <pre>{{ item }}</pre> -->
  <!-- <pre>{{ slug }}</pre> -->

</template>
