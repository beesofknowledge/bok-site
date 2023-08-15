---
title: Items
---

<script setup>
  import { ref, onMounted, watch, reactive } from 'vue'
  import { 
    Dataset,
    DatasetItem,
    DatasetInfo,
    DatasetPager,
    DatasetSearch,
    DatasetShow
  } from 'vue-dataset'

  import { data } from '.vitepress/loaders/itemlist.data.js'

  const items = ref([])
  items.value = data

  const slotFilter = ref("")

  const showEntries = 48
  const entryValues = [
    { value: 6, text: "6" },
    { value: 12, text: "12" },
    { value: 24, text: "24" },
    { value: 48, text: "48" },
    { value: 96, text: "96" }
  ]

  const sortBy = ref([])
  const minMaxLevel = reactive({min:1, max:50})
  watch(minMaxLevel, () => {
    // my hack to get data to update
    // at least til I put in sorting
    sortBy.value = []
  })
  const levelFilter = (value) => {
    return ( value >= minMaxLevel.min && value <= minMaxLevel.max )
  }

  const searchInput = ref("")
  onMounted(() => {
    searchInput.value.$el.focus()
  })
</script>

<h1>{{ $frontmatter.title }}</h1>

<dataset
  v-slot="{ ds }"
  :ds-data="items"
  :ds-filter-fields="{ slot: slotFilter, level: levelFilter}"
  :ds-sortby="sortBy"
>
  <div class="search-controls" :data-page-count="ds.dsPagecount">
    <div class="search-control">
      <dataset-search ds-search-placeholder="Search..." ref="searchInput" />
    </div>
    <div class="search-control">
      Type: 
      <select
        v-model="slotFilter"
        class="form-control"
      >
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
        <option>Alcohol</option>
      </select>
    </div>
    <div class="search-control search-input">
      Min:
      <input
        type="number"
        class="form-control"
        v-model="minMaxLevel.min"
      />
    </div>
    <div class="search-control search-input">
      Max:
      <input
        type="number"
        class="form-control"
        v-model="minMaxLevel.max"
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

