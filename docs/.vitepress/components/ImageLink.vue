<script setup>
  import slugify from 'slugify'

  const props = defineProps({
    path: String,
    name: String,
    alt: String,
  })

  const slug = slugify(props.name, {
    lower: true,
    remove: /[*+~.()'"!:@]/g
  })

  const { default: img } = await import(`../../img/${props.path}/${slug}.png`)
</script>

<template>
  <p>
    <img :src="img" :alt="props.alt" >
  </p>
</template>

