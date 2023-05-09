<script>
  import { data } from '../data/itemlist.data.js'
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
  <hr />

  <div v-for="(item, index) in data" :key="index">
    <ItemListCard :item="item" page="list" />
  </div>

  <!-- <pre>{{ data }}</pre> -->

</template>

