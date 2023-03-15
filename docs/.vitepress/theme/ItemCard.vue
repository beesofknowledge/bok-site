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
    <div class="bok-text-2">
      Equipment Type: {{ attributes["Equipment Type"] }}
      Required Level: {{ attributes["Required Level"] }}
    </div>
  </p>
  <hr />

</template>

