---
title: Berserker
editLink: true
prev: false
next: false
skills:
  Assault: 6
  Arc: 8
  Fury: 10
  Intimidate: 12
  Follow Through: 14
  Pummel: 18
  Guts: 22
  Windup: 26
  Wild Strikes: 30
  Chaotic Strikes: 34
  Eye of the Storm: 38
  Second Wind: 42
---
# {{ $frontmatter.title }}

<ImageLink path="classes/" :name="$frontmatter.title" :alt="$frontmatter.title" />

<div v-for="(value, key) in $frontmatter.skills">
<h2>Level {{ value }}
<ImageLink path="skills/" :name="$frontmatter.title + '-' + key" :alt="$frontmatter.key" />
</h2>
</div>

<!-- <pre> {{ $frontmatter }} </pre> -->

