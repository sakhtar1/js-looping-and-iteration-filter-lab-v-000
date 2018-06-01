// Code your solution in this file

function findMatching (driver, string) {
  return driver.filter(function (driverName) {
    return driverName.toLowerCase() === string.toLowerCase();
  });
}
