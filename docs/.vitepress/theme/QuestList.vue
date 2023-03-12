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
  <hr />

  <div v-for="(item, index) in data" :key="index">
    <QuestCard :title="item.data.title" :href="item.file" :attributes="item.data.attributes" />
  </div>

  <!-- <pre>{{ data }}</pre> -->

</template>

