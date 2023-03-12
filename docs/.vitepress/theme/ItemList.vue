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
  <hr />

  <div v-for="(item, index) in data" :key="index">
    <ItemCard :title="item.data.title" :href="item.file" :attributes="item.data.attributes" />
  </div>

  <pre>{{ data }}</pre>

</template>

