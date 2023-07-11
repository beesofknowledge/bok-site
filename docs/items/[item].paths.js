import fs from 'node:fs'
import slugify from 'slugify'
import { parse } from 'csv-parse/sync'

const file = 'docs/.vitepress/data/items.csv'

export default {
  paths() {
    const data = parse(fs.readFileSync(file, 'utf-8'), {
      columns: true,
      skip_empty_lines: true,
    })

    return data.map((datum) => {
      const slug = slugify(datum.name, {
        lower: true,
        remove: /[*+~.()'"!:@]/g
      })

      return {
        params: {
          title: datum.name,
          item: slug,
          data: datum
        }
      }
    })
  }
}

