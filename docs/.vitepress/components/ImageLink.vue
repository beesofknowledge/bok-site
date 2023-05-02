<script setup>
  import slugify from 'slugify'
  import allImages from '../data/allimages.js'

  const props = defineProps({
    path: String,
    name: String,
    alt: String,
  })

  const slug = slugify(props.name, {
    lower: true,
    remove: /[*+~.()'"!:@]/g
  })

  const image = '../../img/' + props.path + slug + '.png'

  const imageUrl = allImages[image]
</script>

<template>
  <p>
    <img :src="`${imageUrl}`" :alt="props.alt" >
  </p>
</template>
