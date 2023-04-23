import fs from 'node:fs'
import { parse } from 'csv-parse/sync'
import slugify from 'slugify'

export default {
  paths() {
    const items = parse(fs.readFileSync('docs/.vitepress/data/items.csv', 'utf-8'), {
      columns: true,
      skip_empty_lines: true,
      // Convert string to number
      cast: (value, context) => {
        if (context.column === 'Required Level') return Number(value);
        return String(value);
      },
    })

    return items.map((item) => {
      return {
        params: {
          item: slugify(item.Name, {
            lower: true,
            remove: /[*+~.()'"!:@]/g
          }),
          data: item
        }
      }
    })
  }
}

