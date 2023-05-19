import fs from 'node:fs'
import slugify from 'slugify'
//import { parse } from 'yaml'
import { parse } from 'csv-parse/sync'

//const file = 'docs/.vitepress/data/items.yml'
const file = 'docs/.vitepress/data/items.csv'

export default {
  watch: [file],
  load(watchedFiles) {
    let data = parse(fs.readFileSync(file, 'utf-8'), {
      columns: true,
      skip_empty_lines: true,
    })

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

