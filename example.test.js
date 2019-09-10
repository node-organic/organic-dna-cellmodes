const test = require('ava')
const selectModes = require('./index')

test('example', function (t) {
  const dna = {
    myModeX: {
      property: "value42"
    },
    property: "value"
  }

  selectModes(dna, 'myModeX')

  t.deepEqual(dna, {
    myModeX: {
      property: "value42"
    },
    property: "value42"
  })
})
