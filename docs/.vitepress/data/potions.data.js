import fs from 'node:fs'
import { parse } from 'csv-parse/sync'

const file = 'docs/.vitepress/data/potions.csv'

export default {
  watch: [file],
  load(watchedFiles) {
    const data = parse(fs.readFileSync(file, 'utf-8'), {
      columns: true,
      skip_empty_lines: true,
    })
    return data
  }
}
