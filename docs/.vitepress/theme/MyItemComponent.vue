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

  <p>
    <MyImageComponent :image="'items/' + item.image" :alt="item.title" />
  </p>


    <!-- <pre>{{ item }}</pre> -->

</template>
