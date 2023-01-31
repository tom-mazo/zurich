import { readFile } from 'node:fs/promises'

async function getWordsFromFile (filePath) {
  const fileContent = await readFile(filePath, { encoding: 'utf8' })
  return fileContent.split('\n').map(word => word.trim())
}

export { getWordsFromFile }
