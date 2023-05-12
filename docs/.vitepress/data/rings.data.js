import fs from 'node:fs'
import { parse } from 'csv-parse/sync'

const file = 'docs/.vitepress/data/rings.csv'

export default {
  watch: [file],
  load(watchedFiles) {
    const data = parse(fs.readFileSync(file, 'utf-8'), {
//      cast: (value, context) => {
//        if(context.header) return value
//        if(context.column != 'Materials') return Number(value)
//        if(value == 0) return ''
//        return value
//      },
      columns: true,
      skip_empty_lines: true,
    })
    return data
  }
}
