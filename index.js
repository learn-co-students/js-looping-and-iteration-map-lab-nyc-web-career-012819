// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  let names = drivers.map(name => name.toLowerCase());
  return names;
}

function nameToAttributes(drivers) {
  let names = drivers.map( function(name) {return Object.assign({}, {firstName: (name.split(" "))[0], lastName: (name.split(" "))[1]})});
  return names;
}

function attributesToPhrase(drivers) {
  let result = drivers.map( function(driver) {return `${driver.name} is from ${driver.hometown}`});
  return result;
}
