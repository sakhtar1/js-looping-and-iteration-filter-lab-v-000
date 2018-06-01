// Code your solution in this file

function findMatching (driver, string) {
  return driver.filter(function (dName) {
    return dName.toLowerCase() === string.toLowerCase();
  });
}
