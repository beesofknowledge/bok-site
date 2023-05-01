<script setup>
  import { computed } from 'vue'
  import slugify from 'slugify'

  const allImages = import.meta.glob('../../img/**/*.png', { as: 'url', eager: true })

  const props = defineProps({
    path: String,
    name: String,
    alt: String,
  })

//  const slug = computed(() =>
//    slugify(props.name, {
//      lower: true,
//      remove: /[*+~.()'"!:@]/g
//    })
//  )

  const slugged = slugify(props.name, {
    lower: true,
    remove: /[*+~.()'"!:@]/g
  })

  const image = '../../img/' + props.path + slugged + '.png'
  const imageUrl = allImages[image]
</script>

<template>
  <p>
    <img :src="`${imageUrl}`" :alt="props.alt" >
  </p>
</template>
