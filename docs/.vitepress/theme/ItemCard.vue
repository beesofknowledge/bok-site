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
    Required Level: {{ attributes["Required Level"] }}
  </p>
  <hr />

</template>
