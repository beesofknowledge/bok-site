<script setup>
  import ImageLink from './ImageLink.vue'

  const props = defineProps({
    item: Object
  })
</script>

<template>
  <h1>{{ item.Name }}</h1>

  <p class="bok-text-2">
    Equipment Type: {{ item.Slot }}<br />
    Required Level: {{ item['Required Level'] }}
  </p>

  <p>
    <ImageLink path="items/" :name="item.Name" :alt="item.Name" />
  </p>

  <!-- <pre>{{ item }}</pre> -->
  <!-- <pre>{{ slug }}</pre> -->

</template>
