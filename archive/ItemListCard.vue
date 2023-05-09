<script setup>
  import { computed } from 'vue'
  import slugify from 'slugify'

  const props = defineProps({
    item: Object
  })

  const slug = computed(() =>
    slugify(props.item.name, {
        lower: true,
        remove: /[*+~.()'"!:@]/g
    })
  )
</script>

<template>
  <p>
    <a :href="'items/' + slug" >{{ item.name }}</a>
    <br />

    <div class="bok-text-2">
      Equipment Type: {{ item.slot }}<br />
      Required Level: {{ item.level }}
    </div>
  </p>

  <!-- <pre>{{ item }}</pre> -->

  <hr />
</template>

