// drivers

// defines a `driver` driver ‣
// AssertionError: expected 'undefined' to equal 'object'
//     at Context.<anonymous> (test/indexTest.js:5:30)

// updateDriverWithKeyAndValue(driver, key, value)

// "before each" hook for "returns an driver with the original key value pairs and the new key value pair" ‣
// ReferenceError: driver is not defined
//     at Context.<anonymous> (test/indexTest.js:10:25)

// destructivelyUpdateDriverWithKeyAndValue(driver, key, value)

// updates `driver` with the given `key` and `value` (it is destructive) and returns the entire updated driver ‣


// deleteFromDriverByKey(driver, key)
// deletes `key` from a clone of driver and returns the new driver (it is non-destructive) ‣
// ReferenceError: deleteFromDriverByKey is not defined
//     at Context.<anonymous> (test/indexTest.js:47:23)
// does not modify the original driver (it is non-destructive) ‣
// ReferenceError: deleteFromDriverByKey is not defined
//     at Context.<anonymous> (test/indexTest.js:53:7)

// destructivelyDeleteFromDriverByKey(driver, key)

// returns driver without the delete key/value pair ‣
// ReferenceError: destructivelyDeleteFromDriverByKey is not defined
//     at Context.<anonymous> (test/indexTest.js:61:23)
// modifies the original driver ‣
// ReferenceError: destructivelyDeleteFromDriverByKey is not defined
//     at Context.<anonymous> (test/indexTest.js:67:23)