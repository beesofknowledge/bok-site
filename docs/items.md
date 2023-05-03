---
title: Items
---
<script setup>
  import slugify from 'slugify'
  import { 
    Dataset,
    DatasetItem,
    DatasetInfo,
    DatasetPager,
    DatasetSearch,
    DatasetShow
  } from 'vue-dataset'
  import { data } from '.vitepress/data/itemlist.data.js'
  
  const slugged = data.map(item => ({
    ...item,
    slug: slugify(item.name, {
        lower: true,
        remove: /[*+~.()'"!:@]/g
    })
  }))
</script>

<h1>{{ $frontmatter.title }}</h1>
<hr />

<dataset v-slot="{ ds }" :ds-data="slugged">
  <div class="search-controls" :data-page-count="ds.dsPagecount">
    <div class="dataset-search">
      <dataset-search ds-search-placeholder="Search..." />
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
      <div class="item-rows">
        <div class="item-row vp-code-group">
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

<style>

  .item-rows {
    display: inline-grid;
    grid-auto-flow: column;
  }

  .item-row {
    background-color: var(--vp-c-bg-soft);
    padding: 16px;
    margin: 16px 16px 0 0;
    border-radius: 8px;
    width: 18rem;
  }

  .search-controls {
    display: flex;
    flex-wrap: wrap;
  }

  .dataset-info {
    margin-bottom: 32px;  
  }

  .dataset-show,
  .dataset-search,
  .dataset-pager{
    margin: 0 25px 16px 0;
  }

  .search-controls .pagination {
    display: flex;
    list-style: none;
    border-radius: .25rem;
    padding-left: 0;
    margin: 0;
  }
  
  .pagination li + li {
    margin: 0;
  }
  
  .page-item.disabled .page-link {
    color: gray;
    pointer-events: none;
    cursor: auto;
    background-color: var(--vp-c-bg-alt);
    border-color: transparent;
  }
  .page-item:first-child .page-link {
    margin-left: 0;
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
    border-right: 0;
  }
  .page-item:last-child .page-link {
    margin-left: 0;
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
    border-left: 0;
  }
  .page-item.active .page-link {
  z-index: 3;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-brand);
  border-color: transparent;
  }
  .page-link {
    position: relative;
    display: block;
    padding: .5rem .75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #3eaf7c;
    background-color: var(--vp-c-bg-alt);
    border: 1px solid transparent;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
}

  .search-controls .form-control {
    font-size: 16px;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    color: var(--vp-c-text-2);
    background-color: var(--vp-c-bg-alt);
    background-clip: padding-box;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 0 10px 0 12px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  
  .search-controls ::placeholder {
    color: var(--vp-c-text-2);
    opacity: 1;
    font-family: var(--vp-font-family-base);
  }
  
  .dataset-show .form-control {
    margin: 0 6px 0 6px;
  }
 
</style>

