import fs from 'node:fs'
import { parse } from 'yaml'

const file = 'docs/.vitepress/data/quests.yaml'

export default {
  watch: [file],
  load(watchedFiles) {
    const data = parse(fs.readFileSync(file, 'utf-8'))

    data.sort(function(a, b) {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }

      // names must be equal
      return 0;
    });

    return data
  }
}
