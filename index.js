// Code your solution in this file

function findMatching (driver, string) {
  return driver.filter(function (dName) {
    return dName.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(driver => driver.slice(0, name.length) === name)
}
