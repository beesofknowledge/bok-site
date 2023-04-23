---
prev: false
next: false
---

<script setup>
import { useData } from 'vitepress'

const { page } = useData()
</script>

<h1>{{ $params.name }}</h1>

<div v-for="(value, key) in $params.data">
  <h2>Level {{ value }}
    <ImageLink path="skills/" :name="$params.role + '-' + key" :alt="$frontmatter.key" />
  </h2>
</div>

<!-- <pre>{{ $params.skills }}</pre> -->
<!-- <pre>{{ $params.data }}</pre> -->
<pre>{{ page }}</pre>

