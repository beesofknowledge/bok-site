import fs from 'node:fs'
import { parse } from 'yaml'
import slugify from 'slugify'

const file = fs.readFileSync('docs/.vitepress/data/skills.yaml', 'utf-8')

export default {
 load() {
   return parse(file)
 }
}

