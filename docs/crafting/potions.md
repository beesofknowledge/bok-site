---
title: Potions
---

# Potions

Crafted potions are made from mushrooms and plants and bottles. Foresters refine gathered mushrooms into mushroom oil and they refine gathered plants into plant oil. Provisioners then combine the mushroom oil and the plant oil with a bottle bought from vendors.

The following table assumes the matching tier of oil and bottle is used with a given tier of mushroom.

<DataTable :data="potions" />

<script setup>
  import { data as potions } from '../.vitepress/data/potions.data.js'
  import DataTable from '../.vitepress/components/DataTable.vue'
</script>

