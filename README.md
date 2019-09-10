# organic-dna-cellmodes

Simple utility function to [fold and merge](https://github.com/node-organic/organic-dna-fold) DNA structure based on given value.

## usage

### install

```
npm i organic-dna-cellmodes
```

### api

#### selectedModes(dna, value) : Boolean

* `dna` is a tree-like `organic-dna` structure
* `value` is a string
  * it can contain a `+` character which will trigger multiple folding operations
  * it can contain a `.` character which will trigger a folding operation on a sub-branch
  * both `+` and `.` can be combined infinitely
* returns Boolean (true || false) indicating successful fold

### example

```
const dna = {
  myModeX: {
    property: "value42"
  },
  property: "value"
}

var selectModes = require("organic-dna-cellmodes")
selectModes(dna, 'myModeX')

expect(dna).toBeDeepEqual({
  myModeX: {
    property: "value42"
  },
  property: "value42"
})
```

