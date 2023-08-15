---
---

<script setup>
  import ImageLink from '../.vitepress/components/ImageLink.vue'
</script>

<h1>{{ $params.title }}</h1>

<p class="bok-text-2">
  Equipment Type: {{ $params.data.slot }}<br />
  Required Level: {{ $params.data.level }}
</p>

<suspense>
  <ImageLink path="items" :name="$params.data.name" :alt="$params.data.name" />
</suspense>

