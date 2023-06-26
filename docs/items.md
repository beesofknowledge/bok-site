---
title: Items
---
<script setup>
  import { ref, onMounted } from 'vue'
  import { 
    Dataset,
    DatasetItem,
    DatasetInfo,
    DatasetPager,
    DatasetSearch,
    DatasetShow
  } from 'vue-dataset'

  import { data as items } from '.vitepress/data/itemlist.data.js'

  const showEntries = 48
  const entryValues = [
    { value: 6, text: 6 },
    { value: 12, text: 12 },
    { value: 24, text: 24 },
    { value: 48, text: 48 },
    { value: 96, text: 96 }
  ]

  const minLevel = ref(1)
  const maxLevel = ref(50)

  function levelFilter(value) {
    return ( value >= minLevel.value && value <= maxLevel.value )
  }

  const slotFilter = ref("")

  const input = ref()
  onMounted(() => {
    input.value.$el.focus()
  })
</script>

<h1>{{ $frontmatter.title }}</h1>

<!-- <button @click.prevent="slotFilter = '1H Sword'">1H Sword</button> -->
<!-- <button @click="levelFilter = '20'">Level 20</button> -->
<!-- current level: {{ levelFilter }} -->

<dataset
  v-slot="{ ds }"
  :ds-data="items"
  :ds-filter-fields="{ slot: slotFilter, level: levelFilter}"
>
  <div class="search-controls" :data-page-count="ds.dsPagecount">
    <div class="search-control">
      <dataset-search ds-search-placeholder="Search..." ref="input" />
    </div>
    <div class="search-control">
      Type: 
      <select v-model="slotFilter" class="form-control">
        <option selected value="">All</option>
        <option>1H Sword</option>
        <option>2H Sword</option>
        <option>1H Fist</option>
        <option>1H Mace</option>
        <option>2H Hammer</option>
        <option>2H Staff</option>
        <option>1H Axe</option>
        <option>2H Axe</option>
        <option>Dagger</option>
        <option>Shield</option>
        <option>Polearm</option>
        <option>Bow</option>
        <option>Crossbow</option>
        <option>Accessory</option>
        <option>Head</option>
        <option>Chest</option>
        <option>Hands</option>
        <option>Waist</option>
        <option>Legs</option>
        <option>Feet</option>
        <option>Cuirass</option>
        <option>Pauldron</option>
        <option>Vambrace</option>
        <option>Faulds</option>
        <option>Greaves</option>
        <option>Earring</option>
        <option>Necklace</option>
        <option>Ring</option>
        <option>Potion</option>
        <option>Consumable</option>
        <option>Light</option>
        <option>Quest</option>
        <option>Alcoho</option>
        </select>
    </div>
    <div class="search-control search-input">
      Min:
      <input 
        v-model="minLevel"
        class="form-control"
      />
    </div>
    <div class="search-control search-input">
      Max:
      <input
        v-model="maxLevel"
        class="form-control"
      />
    </div>
    <div class="dataset-show">
      <dataset-show
        :ds-show-entries="showEntries"
        :ds-show-entries-lovs="entryValues"
      />
    </div>
  </div>
  
  <dataset-info class="dataset-info" />

  <div class="dataset-pager" >
    <dataset-pager />
  </div>

min level {{ minLevel }}
max level {{ maxLevel }}

  <dataset-item class="dataset-items" >
    <template v-slot="{ row, rowIndex }">
      <div class="card-container">
        <div class="card vp-code-group">
          <div>
            <a :href="'/items/' + row.slug" >{{ row.name }}</a>
          </div>
          <div class="bok-text-2">
            Equipment Type: {{ row.slot }}<br />
            Required Level: {{ row.level }}
          </div>
        </div>
      </div>
    </template>
    <template v-slot:noDataFound>
      <p>No results found</p>
    </template>
  </dataset-item>

  <div class="dataset-pager">
    <dataset-pager />
  </div>

</dataset>

