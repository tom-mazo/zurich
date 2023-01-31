import test from 'node:test'
import { strict as assert } from 'node:assert'
import { mockedWords, mockedAnagrams } from '../data/mocks.js'
import { groupAnagrams } from './groupAnagrams.js'

test('groupAnagrams - it should group words into comma-separated anagrams', async () => {
  const anagramsList = groupAnagrams(mockedWords)
  assert.deepStrictEqual(anagramsList, mockedAnagrams)
})
