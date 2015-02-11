# organic-dna-cellmodes

Simple utility function to fold and merge DNA structure based on given value.

## selectedModes(dna, value)

* `dna` is a tree-like `organic-dna` structure
* `value` is string
  * it can contain `+` sign which will indicate multiple folding operations to be executed

## example

    var selectModes = require("organic-dna-cellmodes")
    selectModes(dna, process.env.CELL_MODE)
    // based on CELL_MODE environment variable one can fold DNA 
    // once via CELL_MODE=existingBranch
    // many times via CELL_MODE=existingBranch1+existingBranch2