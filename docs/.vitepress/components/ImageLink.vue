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

  const image = '/img/' + props.path + slugged + '.png'
  const imageUrl = new URL(`../../img/items/${slugged}.png`, import.meta.url).pathname

  //const src = await import(`../../img/items/${slugged}.png`)

</script>

<template>
  <p>
    image: {{ image }}<br />
    imageUrl: {{ imageUrl }}<br />
    <img :src="`${imageUrl}`" >
    <!-- <img :src="`${image}`" :alt="alt"> -->
    <!-- <img :src="path + slug + '.png'" :alt="alt"> -->
  </p>
</template>
