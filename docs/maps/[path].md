---
---

<script setup>
  import ImageLink from '../.vitepress/components/ImageLink.vue'
</script>

<h1>{{ $params.name }}</h1>

<suspense>
   <ImageLink path="maps" :name="$params.path" :alt="$params.name" />
</suspense>



