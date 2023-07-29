import fs from 'node:fs'
import { parse } from 'yaml'

const file = '../docs/.vitepress/data/items.yml'

const items = parse(fs.readFileSync(file, 'utf-8'))

items.sort(function(a, b) {
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

const names = items.map(function(item){
//  console.log(item.name)
  return item.name
});

const toFindDuplicates = names => names.filter((item, index) => names.indexOf(item) !== index)

const duplicateElements = toFindDuplicates(names);

console.log(duplicateElements);

