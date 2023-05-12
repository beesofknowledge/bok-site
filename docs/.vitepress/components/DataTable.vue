<script setup>
  const props = defineProps({
    data: Array,
  })

  const header = Object.keys(props.data[0])
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="item in header">
          {{ item }}
        </th>
      </tr>
    </thead>
    <tr v-for="item in data" class="cell">
        <td v-for="item in item">{{ item }}</td>
    </tr>
  </table>
</template>

<style>
  .cell {
    text-align: center
  }
</style>
