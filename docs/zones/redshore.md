---
title: Redshore
---
# {{ $frontmatter.title }}

<script setup>
  import ImageLink from '../.vitepress/components/ImageLink.vue'
</script>

<ImageLink path="maps/" :name="$frontmatter.title" :alt="$frontmatter.title + ' Map'" />

