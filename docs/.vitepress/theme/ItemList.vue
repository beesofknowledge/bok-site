<script>
  import { data } from '../items.data.js'
  export default {
    data() {
      return {
        data: data
      }
    }
  }
</script>

<template>

  <h1>Items</h1>

  <div v-for="(item, index) in data" :key="index">
    <ItemCard :title="item.data.title" :href="item.file" />
  </div>

  <!-- <pre>{{ data }}</pre> -->

</template>

