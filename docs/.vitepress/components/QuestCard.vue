<script setup>
  const props = defineProps({
    item: Object
  })
</script>

<template>
  <p>
    <a :href="item.file">{{ item.data.title }}</a><br />

    <div class="bok-text-2">
      Reward Level: {{ item.data.level }}
    </div>
  </p>

  <!-- <pre>{{ item }}</pre> -->

  <hr />
</template>

