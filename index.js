// Code your solution in this file

function findMatching (driver, string) {
  return driver.filter(function (dName) {
    return dName.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch (driver, string) {
  return drivers.filter(driver => driver.slice(0, name.length) === name)
}
