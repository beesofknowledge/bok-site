import fs from 'node:fs'
import { parse } from 'yaml'

const file = 'docs/.vitepress/data/quests.yml'

export default {
  watch: [file],
  load(watchedFiles) {
    const data = parse(fs.readFileSync(file, 'utf-8'))

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

    return data
  }
}
