<script>
  import { data } from '../quests.data.js'
  export default {
    data() {
      return {
        data: data
      }
    }
  }
</script>

<template>

  <h1>Quests</h1>

  <div v-for="(item, index) in data" :key="index">
    <ItemCard :title="item.data.title" :href="item.file" />
  </div>

  <!-- <pre>{{ quests }}</pre> -->

</template>

