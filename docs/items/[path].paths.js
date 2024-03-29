import fs from 'node:fs'
import { parse } from 'csv-parse/sync'
import slugify from 'slugify'

export default {
  paths() {
    const file = './docs/.vitepress/data/items.csv'
    const data = parse(fs.readFileSync(file, 'utf-8'), {
      columns: true,
      skip_empty_lines: true,
    })

    return data.map((datum) => {
      return {
        params: {
          path: slugify(datum.name, {
            lower: true,
            remove: /[*+~.()'"!:@]/g
          }),
          title: datum.name,
          data: datum
        }
      }
    })
  }
}

