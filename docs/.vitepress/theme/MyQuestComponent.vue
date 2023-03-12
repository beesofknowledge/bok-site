<script>
export default {
  props: {
   item: Object,
  }
}
</script>

<template>

  <h1>{{ item.title }}</h1>

  <p>
    <template v-for="(value, name) in item.attributes">
      <div v-if="value">
        {{ name }}: {{ value }}
      </div>
    </template>
  </p>

  <p>Rewards:</p>

  <template v-for="(value) in item.rewards">
    <div v-if="value">
      <MyImageComponent :image="value"/>
    </div>
  </template>

  <!-- <pre>{{ item }}</pre> -->
</template>
