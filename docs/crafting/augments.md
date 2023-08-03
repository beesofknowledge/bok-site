---
title: Augments
---

# Augments

This is a list of craftable augments that can be applied to your gear for temporary stat increases. They are consumed based on number of hits in the case of weapons, and combat time in the case of other augments.

Be warned that use of an augment will bind an item to you and you will no longer be able to trade the item to which it is applied.

Secondary materials are store bought in the case of glue and gathered in other cases. For each augment, the secondary material must match the level quality of the primary material, or stats will be reduced down to the level of the secondary material.

<DataTable :data="augments" />

<script setup>
  import { data as augments } from '../.vitepress/loaders/augments.data.js'
  import DataTable from '../.vitepress/components/DataTable.vue'
</script>

<style>
  td { white-space:pre-wrap }
</style>

