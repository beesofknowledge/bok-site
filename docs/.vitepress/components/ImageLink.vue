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

  const slugged = slugify(props.name, {
    lower: true,
    remove: /[*+~.()'"!:@]/g
  })

  const imageUrl = new URL(`../../img/items/${slugged}.png`, import.meta.url).pathname
</script>

<template>
  <p>
    <img :src="`${imageUrl}`" :alt="alt">
    <!-- <img :src="path + slug + '.png'" :alt="alt"> -->
  </p>
</template>
