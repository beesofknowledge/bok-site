<script setup>
  import { computed } from 'vue'
  import slugify from 'slugify'

  const props = defineProps({
    path: String,
    name: String,
    alt: String,
  })

  const slug = computed(() =>
    slugify(props.name, {
        lower: true,
        remove: /[*+~.()'"!:@]/g
    })
  )
</script>

<template>
  <p>
    <img :src="'https://img.beesofknowledge.com/' + path + slug + '.png'" :alt="alt">
  </p>
</template>
