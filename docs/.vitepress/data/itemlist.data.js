import fs from 'node:fs'
import { parse } from 'yaml'

const file = 'docs/.vitepress/data/items.yml'

export default {
  watch: [file],
  load(watchedFiles) {
    return parse(fs.readFileSync(file, 'utf-8'))
  }
}
