import fs from 'node:fs'
import { parse } from 'yaml'
import slugify from 'slugify'

const file = 'docs/.vitepress/data/items.yml'

export default {
  paths() {
    const data = parse(fs.readFileSync(file, 'utf-8'))

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

