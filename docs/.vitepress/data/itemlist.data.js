import fs from 'node:fs'
import { parse } from 'yaml'
import slugify from 'slugify'

const file = 'docs/.vitepress/data/items.yml'

export default {
  watch: [file],
  load(watchedFiles) {
    let data = parse(fs.readFileSync(file, 'utf-8'))

    data.sort(function(a, b) {
      const nameA = a.name.toUpperCase()
      const nameB = b.name.toUpperCase()
      if (nameA > nameB) {
        return 1
      }
      if (nameA < nameB) {
        return -1
      }
      return 0
    });

    data = data.map(item => ({
      ...item,
      slug: slugify(item.name, {
          lower: true,
          remove: /[*+~.()'"!:@]/g
      })
    }))

    return data
  }
}

