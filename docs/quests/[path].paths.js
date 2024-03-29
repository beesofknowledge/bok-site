import fs from 'node:fs'
import { parse } from 'yaml'
import slugify from 'slugify'

export default {
  paths() {
    const file = './docs/.vitepress/data/quests.yml'
    const data = parse(fs.readFileSync(file, 'utf-8'))

    return data.map((datum) => {

      let questNotes = ''
      if (datum.notes !== null) {
        questNotes = datum.notes.replace(/\n/g, '</p><p>')
      } else {
        questNotes = ''
      }

      return {
        params: {
          path: slugify(datum.name, {
            lower: true,
            remove: /[*+~.()'"!:@]/g
          }),
          title: datum.name,
          name: datum.name,
          zone: datum.zone,
          npc: datum.npc,
          level: datum.level,
          rewards: (datum.rewards[0] === null ? null : datum.rewards),
          content: (datum.notes === '' ? 0 : 1),
        },
        // content: datum.notes
        content: questNotes
      }
    })
  }
}

