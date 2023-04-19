<script setup>
  import { computed } from 'vue'
  import slugify from 'slugify'
  import ImageLink from './ImageLink.vue'

  const props = defineProps({
    item: Object
  })

  const slug = computed(() =>
    slugify(props.item.Name, {
        lower: true,
        remove: /[*+~.()'"!:@]/g
    })
  )
</script>

<template>
  <h1>{{ item.Name }}</h1>

  <p class="bok-text-2">
    Equipment Type: {{ item.Slot }}<br />
    Required Level: {{ item['Required Level'] }}
  </p>

  <p>
    <ImageLink :image="'items/' + slug" :alt="item.Name" />
  </p>

  <!-- <pre>{{ item }}</pre> -->
  <!-- <pre>{{ slug }}</pre> -->

</template>
