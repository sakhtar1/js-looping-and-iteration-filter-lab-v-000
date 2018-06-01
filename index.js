// Code your solution in this file

function findMatching (driver, string) {
  return driver.filter(function (dName) {
    return dName.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch (driver, string) {
  const lString = string.length;
  return driver.filter(function (dName) {
    return dName.slice(0, lString === dName;
    });
}
