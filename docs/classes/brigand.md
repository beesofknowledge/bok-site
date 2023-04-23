---
title: Brigand
editLink: true
prev: false
next: false
skills:
  Stun: 6
  Hidden Strike: 8
  Overpower: 10
  Abet: 14
  Daze: 18
  Flash Powder: 22
  Execute: 26
  From the Shadows: 30
  Ruse: 34
  Mark: 38
  Stagger: 42

---
# {{ $frontmatter.title }}

<ImageLink path="classes/" :name="$frontmatter.title" :alt="$frontmatter.title" />

<div v-for="(value, key) in $frontmatter.skills">
<h2>Level {{ value }}
<ImageLink path="skills/" :name="$frontmatter.title + '-' + key" :alt="$frontmatter.key" />
</h2>
</div>

<!-- <pre> {{ $frontmatter }} </pre> -->

