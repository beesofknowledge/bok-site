import fs from 'node:fs'
import { parse } from 'yaml'
import slugify from 'slugify'

export default {
  paths() {
    const roles = parse(fs.readFileSync('docs/.vitepress/data/skills.yaml', 'utf-8'))

    return roles.map((role) => {
      return {
        params: {
          title: role.name,
          name: role.name,
          role: slugify(role.name, {
            lower: true,
            remove: /[*+~.()'"!:@]/g
          }),
          data: role.skills
        }
      }
    })
  }
}

