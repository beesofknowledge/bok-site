---
title: Quests
---

<script setup>
  import QuestListCard from '.vitepress/components/QuestListCard.vue'
  import { data } from '.vitepress/data/questlist.data.js'
</script>

<h1>{{ $frontmatter.title }}</h1>
<hr />

<div v-for="(item) in data" >
  <QuestListCard :quest="item" />
</div>

<!-- <pre>{{ data }}</pre> -->

