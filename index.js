// defines a `driver` driver:
const driver = {
  
};


// "before each" hook for "returns an driver with the original key value pairs and the new key value pair" :
function updateDriverWithKeyAndValue(driver, key, value) {
driver[key] = value;

return driver;
};


// updates `driver` with the given `key` and `value` (it is destructive) and returns the entire updated driver:
// destructivelyUpdateDriverWithKeyAndValue(driver, key, value)


// deletes `key` from a clone of driver and returns the new driver (it is non-destructive), does not modify the original driver (it is non-destructive):
// deleteFromDriverByKey(driver, key)


// returns driver without the delete key/value pair, modifies the original driver:
// destructivelyDeleteFromDriverByKey(driver, key)