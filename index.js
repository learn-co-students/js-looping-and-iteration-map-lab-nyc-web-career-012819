// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  drivers = drivers.map(driver => driver.toLowerCase())
  return drivers
}

function nameToAttributes(drivers) {
  return drivers.map(driver => {
    const dF = driver.split(" ")[0];
    const dL = driver.split(" ")[1];
    return {firstName: dF, lastName: dL}
  });
}

function attributesToPhrase(drivers) {
  drivers = drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
  return drivers
}
