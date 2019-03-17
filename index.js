// Code your solution in this file.
function lowerCaseDrivers(drivers){
  drivers.map(function(driver){
    driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    const firstName = driver.split(' ')[0];
    const lastName = driver.split(' ')[1];

    return { firstName: firstName, lastName: lastName };
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function (nameTown) {

    return `${nameTown.name} is from ${nameTown.hometown}`;
  });
}
