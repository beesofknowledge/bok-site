---
title: Items
---
<script setup>
  import { 
    Dataset,
    DatasetItem,
    DatasetInfo,
    DatasetPager,
    DatasetSearch,
    DatasetShow
  } from 'vue-dataset'

  import { data } from '.vitepress/data/itemlist.data.js'

  const vFocusThis = {
    mounted: (el) => {
      el.focus()
    }
  }
</script>

<h1>{{ $frontmatter.title }}</h1>

<dataset v-slot="{ ds }" :ds-data="data">
  <div class="search-controls" :data-page-count="ds.dsPagecount">
    <div class="dataset-search">
      <dataset-search ds-search-placeholder="Search..." v-focus-this />
    </div>
    <div class="dataset-show">
      <dataset-show :ds-show-entries=12 :ds-show-entries-lovs="[{ value: 6, text: 6 }, { value: 12, text: 12 }, { value: 24, text: 24 }, { value: 48, text: 48 }, { value: 96, text: 96 }]" />
    </div>
    <div class="dataset-pager">
      <dataset-pager />
    </div>
  </div>
  
  <dataset-info class="dataset-info" />

  <dataset-item>
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

</dataset>
<!-- <pre>{{ data }}</pre> -->

