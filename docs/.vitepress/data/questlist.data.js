import fs from 'node:fs'
import { parse } from 'yaml'
import slugify from 'slugify'

const file = 'docs/.vitepress/data/quests.yml'

export default {
  watch: [file],
  load(watchedFiles) {
    let data = parse(fs.readFileSync(file, 'utf-8'))

    data.sort(function(a, b) {
      const nameA = a.level
      const nameB = b.level
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
      level: Number(item.level),
      slug: slugify(item.name, {
          lower: true,
          remove: /[*+~.()'"!:@]/g
      })
    }))

    return data
  }
}
