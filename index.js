import process from 'node:process'
import { getWordsFromFile } from './utils/getWordsFromFile.js'
import { groupAnagrams } from './utils/groupAnagrams.js'

const arg = process.argv[2]

if (!arg) {
  throw new Error('the filepath to be processed must be passed as argument')
}

const filePath = new URL(arg, import.meta.url)
const words = await getWordsFromFile(filePath)
const anagramsList = groupAnagrams(words)
console.log(anagramsList.join('\n'))
