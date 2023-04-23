---
title: Duelist
editLink: true
prev: false
next: false

skills:
  Patch: 6
  Combined Strike: 8 
  Disengage: 10
  Weak Point: 14
  Serration: 18
  Triage: 22
  Flourish: 34
  Hemorrhaging Strike: 26
  Stim: 30
  Upper Hand: 38
  Amputate: 42
---
# {{ $frontmatter.title }}

<ImageLink path="classes/" :name="$frontmatter.title" :alt="$frontmatter.title" />

<div v-for="(value, key) in $frontmatter.skills">
<h2>Level {{ value }}
<ImageLink path="skills/" :name="$frontmatter.title + '-' + key" :alt="$frontmatter.key" />
</h2>
</div>

<!-- <pre> {{ $frontmatter }} </pre> -->

