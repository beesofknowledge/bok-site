import fs from 'node:fs'
import parseFrontmatter from 'gray-matter'

export default {
  watch: ['../quests/*.md'],
  load(watchedFiles) {
    return watchedFiles.map(file => {
      const content = fs.readFileSync(file, 'utf-8')
      const { data, excerpt } = parseFrontmatter(content)
      return {
        // file,
        file: file.replace(/^(.*)(quests\/.*)$/, '$2').replace(/\.md$/, ''),
        data,
        excerpt
      }
    })
  }
}
