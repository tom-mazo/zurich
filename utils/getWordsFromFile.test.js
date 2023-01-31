import test from 'node:test'
import { strict as assert } from 'node:assert'
import { getWordsFromFile } from './getWordsFromFile.js'
import { mockedWords } from '../data/mocks.js'

const mockFile = '../data/example1.txt'
const nonExistingFile = '../data/dummy.txt'

test('getWordsFromFile', async (t) => {
  await t.test('it should extract words from a text file', async () => {
    const filePath = new URL(mockFile, import.meta.url)
    const words = await getWordsFromFile(filePath)
    assert.deepStrictEqual(words, mockedWords)
  })

  await t.test('it should throw if the file path in incorrect', async () => {
    await assert.rejects(async () => {
      const filePath = new URL(nonExistingFile, import.meta.url)
      await getWordsFromFile(filePath)
    })
  })
})
