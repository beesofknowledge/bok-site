---
---
<script setup>
//import { useData } from 'vitepress'

//const { page } = useData()
</script>

<h1>{{ $params.name }}</h1>
<div class="skill-container">
  <div v-for="(value, key) in $params.data">
    <p>Level {{ value }}</p>
    <ImageLink path="skills/" :name="$params.role + '-' + key" :alt="$frontmatter.key" />
  </div>
</div>

<!-- <pre>{{ $params.skills }}</pre> -->
<!-- <pre>{{ $params.data }}</pre> -->
<!-- <pre>{{ page }}</pre> -->

<style>
  .skill-container {
    display: flex;
    flex-wrap: wrap;
    gap: 30px 30px;
  }
</style>
