// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase());
}
// function lowerCaseDrivers(drivers) {
//   return drivers.map(function(driver) {
//     return driver.toLowerCase();
//   });
// }
// **********************************

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    const object = {
      firstName: driver.split(' ')[0],
      lastName: driver.split(' ')[1]
    };
    return object;
  });
}
// **********************************

function attributesToPhrase(drivers) {
  // console.log(drivers);
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
