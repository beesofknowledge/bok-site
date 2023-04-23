---
title: Juggernaut
editLink: true
prev: false
next: false
skills:
  Breach: 6
  Roar: 8
  No Time To Die: 10
  Collateral Damage: 14 
  Unstoppable: 18
  Perforate: 22
  Brace: 26
  Rip: 30
  Smash: 34
  Stomp: 38
  Revenge: 42
---
# {{ $frontmatter.title }}

<ImageLink path="classes/" :name="$frontmatter.title" :alt="$frontmatter.title" />

<div v-for="(value, key) in $frontmatter.skills">
<h2>Level {{ value }}
<ImageLink path="skills/" :name="$frontmatter.title + '-' + key" :alt="$frontmatter.key" />
</h2>
</div>

<!-- <pre> {{ $frontmatter }} </pre> -->

