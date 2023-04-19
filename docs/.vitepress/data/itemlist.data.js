import fs from 'node:fs'
import { parse } from 'csv-parse/sync'

export default {
  watch: ['docs/.vitepress/data/items.csv'],
  load(watchedFiles) {
    return parse(fs.readFileSync('docs/.vitepress/data/items.csv', 'utf-8'), {
      columns: true,
      skip_empty_lines: true
    })
  }
}
