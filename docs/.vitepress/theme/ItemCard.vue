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
    <div class="bok-text-2">Equipment Type: {{ attributes["Equipment Type"] }}</div>
    <div class="bok-text-2">Required Level: {{ attributes["Required Level"] }}</div>
  </p>
  <hr />

</template>

<style>
  html .bok-text-2 {
    color: var(--vp-c-text-light-2);
  }

  html.dark .bok-text-2 {
    color: var(--vp-c-text-dark-2);
  }
</style>
