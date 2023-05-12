---
title: Crafted Rings
---
<script setup>
  import { data as rings } from '../.vitepress/data/rings.data.js'
  import DataTable from '../.vitepress/components/DataTable.vue'
</script>

# {{ $frontmatter.title }}

<DataTable :data="rings" />

