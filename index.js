// Code your solution here

// Find all drivers that match the given name
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Find all drivers that begin with the given letters
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

// Find all driver objects whose name property matches the given name
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

