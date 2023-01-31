function groupAnagrams (words) {
  const anagrams = new Map()
  words.forEach(w => {
    const sorted = sortAlphabetically(w)
    if (!anagrams.has(sorted)) {
      anagrams.set(sorted, [w])
      return
    }
    anagrams.get(sorted).push(w)
  })

  return Array.from(anagrams.values()).map(val => val.join(','))
}

function sortAlphabetically (word) {
  return word.split('').sort().join('')
}

export { groupAnagrams }
