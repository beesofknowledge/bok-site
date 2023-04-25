---
title: Test Page
---
<script setup>
  import { data } from '.vitepress/data/test.data.js'
  import { useData } from 'vitepress'

  const { page } = useData()
</script>

# {{ $frontmatter.title }}
<pre>{{ data }}</pre>
<pre>{{ page }}</pre>
