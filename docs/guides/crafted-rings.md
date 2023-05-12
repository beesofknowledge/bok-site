---
title: Crafted Rings
---
<script setup>
  import { data as rings } from '../.vitepress/data/rings.data.js'
  import DataTable from '../.vitepress/components/DataTable.vue'
</script>

# {{ $frontmatter.title }}

The rings used in this chart are made with level 30 Solid Flux, level 30 gold and tin, level 25 silver, level 20 copper and zink, and level 35 iron.

<DataTable :data="rings" />

