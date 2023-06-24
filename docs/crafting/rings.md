---
title: Rings
---

# Rings

This is a list of craftable rings from level 1 through 30. These stats assume that you are using materials and flux of the appropriate tier, i.e. a dense level 20 flux for a level 20 recipe. It is possible to use a lower flux for a higher recipe, i.e. a dense level 20 flux with a level 30 gem and recipe, but it will lower the stats.

<DataTable :data="rings" />

<script setup>
  import { data as rings } from '../.vitepress/data/rings.data.js'
  import DataTable from '../.vitepress/components/DataTable.vue'
</script>
