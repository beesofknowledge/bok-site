<script>
  import { data } from '../quests.data.js'
  export default {
    data() {
      return {
        quests: data
      }
    }
  }
</script>

<template>

  <h1>Quests</h1>

  <div v-for="(quest, index) in quests" :key="index">
    <ItemCard :title="quest.data.title" :href="quest.file" />
  </div>

  <!-- <pre>{{ quests }}</pre> -->

</template>

