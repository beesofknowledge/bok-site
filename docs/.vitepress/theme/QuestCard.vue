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
      Reward Level: {{ attributes["Reward Level"] }}
    </div>
  </p>
  <hr />

</template>

