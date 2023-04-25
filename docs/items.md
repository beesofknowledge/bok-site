---
title: Items
---

<script setup>
  import ItemListCard from '.vitepress/components/ItemListCard.vue'
  import { data } from '.vitepress/data/itemlist.data.js'
</script>

<h1>{{ $frontmatter.title }}</h1>
<hr />

<div v-for="(item) in data">
  <ItemListCard :item="item" />
</div>

<!-- <pre>{{ data }}</pre> -->


