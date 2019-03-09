// Code your solution in this file.
function lowerCaseDrivers(driverArray) {
  return driverArray.map(function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(driverArray) {
  return driverArray.map(function(nameString) {
    const firstName = nameString.split(' ')[0];
    const lastName = nameString.split(' ')[1];

    return { firstName: firstName, lastName: lastName };
  });
}

function attributesToPhrase(driverArray) {
  return driverArray.map(function (nameAndHome) {

    return `${nameAndHome.name} is from ${nameAndHome.hometown}`;
  });
}
