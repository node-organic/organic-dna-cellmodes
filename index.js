var fold = require('organic-dna-fold')
var has = require('lodash.has')
var selectBranch = require('organic-dna-branches').selectBranch

module.exports = function (dna, value) {
  let modes = value.split('+')
  let result = false
  modes.forEach(function (m) {
    if(dna[m] || has(dna, m)) {
      fold(dna, selectBranch(dna, m))
      result = true
    }
  })
  return result
}