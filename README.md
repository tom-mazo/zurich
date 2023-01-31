# Zurich

Requirements:
- node.js v18
- npm v8

Some remarks:
- it wanted to take the opportunity of this challenge to discover the new features of node.js 18 (current LTS) and in particular the new Test Runner API. It's experimental so of course, I wouldn't use it in production (I would use Jest).
- I chose not to use TS; as it is a simple CLI utility with no data models, it felt like an overkill
- I didn't copy or look up the solution from the internet; only node.js' and MDN's documentation
- as requested, I didn't use any extra library, except for eslint for code styling

I tried to keep the code as simple and tidy as possible:
- read the file content and split it into array of words
- use JS's built'in sorting API `Array.prototype.sort()` to sort words alphabetically; this allows to group anagrams together since they will all fall into the same key
- use `Map` instead of object because iterating over an object doesn't guarantee that the order of the key-value pairs will be kept
- finally, join the anagrams into a coma-separated list and display them to the console.

I hope I didn't forget anything. Feel free to reach out at tom.mazo.tm@gmail.com if you have any questions.