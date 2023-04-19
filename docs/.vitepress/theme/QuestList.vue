<script setup>
  import { data } from '../quests.data.js'
</script>

<template>
  <h1>Quests</h1>
  <hr />

  <div v-for="(item) in data" >
    <QuestCard :item="item" />
  </div>

  <!-- <pre>{{ data }}</pre> -->
</template>

