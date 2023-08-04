---
---
<script setup>
  import ImageLink from '../.vitepress/components/ImageLink.vue'
</script>

<h1>{{ $params.name }}</h1>

<p class="bok-text-2">
  Starting Zone: {{ $params.zone }}<br />
  Quest NPC: {{ $params.npc }}<br />
  Reward Level: {{ $params.level }}<br />
</p>

<div v-if="$params.content">
  <h4>Notes</h4>
  <p><!-- @content --></p> 
</div>

<h4 v-if="$params.rewards">Rewards</h4>

<template v-for="(value) in $params.rewards">
  <div v-if="value">
    <suspense>
      <ImageLink path="items" :name="value" :alt="$params.Name" />
    </suspense>
  </div>
</template>

