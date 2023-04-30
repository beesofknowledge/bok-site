---
---
<script setup>
//import { useData } from 'vitepress'

//const { page } = useData()
</script>

<h1>{{ $params.name }}</h1>
  <p class="bok-text-2">
    Starting Zone: {{ $params.zone }}<br />
    Quest NPC: {{ $params.npc }}<br />
    Reward Level: {{ $params.level }}<br />
  </p>
    
  <h4>Notes</h4>
  
  <!-- @content -->

  <h4>Rewards</h4>
    <template v-for="(value) in $params.rewards">
      <div v-if="value">
        <ImageLink path="items/" :name="value" :alt="$params.Name" />
      </div>
    </template>

<pre>{{ $params }}</pre>
<!-- <pre>{{ page }}</pre> -->

<style>
</style>
