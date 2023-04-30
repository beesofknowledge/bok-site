<script setup>
  import ImageLink from '../components/ImageLink.vue'

  const props = defineProps({
    item: Object
  })
</script>

<template>
  <h1>{{ item.title }}</h1>

  <p class="bok-text-2">
    Quest NPC: {{ item['Quest NPC'] }}<br />
    Starting Zone: {{ item['Starting Zone'] }}<br />
    Reward Level: {{ item['Reward Level'] }}<br />
  </p>

  <h4>Notes</h4>
    <slot></slot>

  <h4>Rewards</h4>
    <template v-for="(value) in item.rewards">
      <div v-if="value">
        <ImageLink path="items/" :name="value" :alt="item.Name" />
      </div>
    </template>

  <!-- <pre>{{ item }}</pre> -->
</template>
