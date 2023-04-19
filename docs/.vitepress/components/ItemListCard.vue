<script setup>
  import { computed } from 'vue'
  import slugify from 'slugify'

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
  <p>
    <a :href="'items/' + slug" >{{ item.Name }}</a>
    <br />

    <div class="bok-text-2">
      Equipment Type: {{ item.Slot }}<br />
      Required Level: {{ item['Required Level'] }}
    </div>
  </p>

  <hr />
</template>

