import slugify from 'slugify'
import fs from 'node:fs'
import { parse } from 'csv-parse/sync'

export default {
  paths() {
    const items = parse(fs.readFileSync('docs/.vitepress/data/items.csv', 'utf-8'), {
      columns: true,
      skip_empty_lines: true
    })

    return items.map((item) => {
      return {
        params: {
          item: slugify(item.Name, { lower: true, remove: /[*+~.()'"!:@]/g }),
          data: item
        }
      }
    })
  }
}



