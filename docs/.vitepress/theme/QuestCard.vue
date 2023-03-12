<script>
export default {
  props: {
    title: String,
    href: String,
    attributes: Object,
  }
}
</script>

<template>

  <p>
    <a :href="href">{{ title }}</a><br />
    Reward Level: {{ attributes["Reward Level"] }}
  </p>
  <hr />

  <!-- <pre>{{ item }}</pre> -->
</template>
