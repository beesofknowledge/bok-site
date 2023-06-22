---
title: Quests
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

  import { data as quests } from '.vitepress/data/questlist.data.js'

  const showEntries = 48
</script>

<script>
  import { ref } from 'vue'

  export default {
    mounted() {
      this.focusInput();
    },
    methods: {
      focusInput() {
        this.$refs.input.$el.focus();
      }
    }
  }
</script>


<h1>{{ $frontmatter.title }}</h1>

<dataset v-slot="{ ds }" :ds-data="quests">
  <div class="search-controls" :data-page-count="ds.dsPagecount">
    <div class="dataset-search">
      <dataset-search ds-search-placeholder="Search..." ref="input"/>
    </div>
    <div class="dataset-show">
      <dataset-show :ds-show-entries="showEntries" :ds-show-entries-lovs="[{ value: 6, text: 6 }, { value: 12, text: 12 }, { value: 24, text: 24 }, { value: 48, text: 48 }, { value: 96, text: 96 }]" />
    </div>

  </div>

  <dataset-info class="dataset-info" />

  <div class="dataset-pager" >
    <dataset-pager />
  </div>
  
  <dataset-item class="dataset-items">
    <template v-slot="{ row, rowIndex }">
      <div class="card-container">
        <div class="card vp-code-group">
          <div>
            <a :href="'/quests/' + row.slug" >{{ row.name }}</a>
          </div>
          <div class="bok-text-2">
            Reward Level: {{ row.level }}
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

<!-- <pre>{{ data }}</pre> -->

