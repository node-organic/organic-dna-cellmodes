var selectBranch = require("organic-dna-branches").selectBranch
var fold = require("organic-dna-fold")

module.exports = function(dna, value){
  var modes = value.split("+")
  modes.forEach(function(m){
    if(dna[m])
      fold(dna, selectBranch(dna, m))
    else
      console.warn("mode ",m," not found in root dna")
  })
}