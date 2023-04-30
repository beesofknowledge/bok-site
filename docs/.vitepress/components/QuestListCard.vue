<script setup>
  import { computed } from 'vue'
  import slugify from 'slugify'

  const props = defineProps({
    quest: Object
  })

  const slug = computed(() =>
    slugify(props.quest.name, {
        lower: true,
        remove: /[*+~.()'"!:@]/g
    })
  )
</script>

<template>
  <p>
    <a :href="'quests/' + slug" >{{ quest.name }}</a>
    <br />

    <div class="bok-text-2">
      Reward Level: {{ quest['reward level'] }}
    </div>
  </p>

  <!-- <pre>{{ quest }}</pre> -->

  <hr />
</template>

