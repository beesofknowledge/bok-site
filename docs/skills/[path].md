---
---

<script setup>
  import ImageLink from '../.vitepress/components/ImageLink.vue'
</script>

<h1>{{ $params.name }}</h1>

<div class="skill-container">
  <div v-for="(value, key) in $params.data">
    <p>Level {{ value }}</p>
    <suspense>
      <ImageLink path="skills" :name="`${$params.path}-${key}`" :alt="$params.key" />
    </suspense>
  </div>
</div>

<style>
  .skill-container {
    display: flex;
    flex-wrap: wrap;
    gap: 30px 30px;
  }
</style>
