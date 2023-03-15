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
      <div v-if="value" class="bok-text-2">
        {{ name }}: {{ value }}
      </div>
    </template>
  </p>

  <h4>Notes</h4>
    <slot></slot>

  <h4>Rewards</h4>
    <template v-for="(value) in item.rewards">
      <div v-if="value">
        <MyImageComponent :image="'items/' + value"/>
      </div>
    </template>

  <!-- <pre>{{ item }}</pre> -->

</template>
