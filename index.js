// Code your solution in this file.

function lowerCaseDrivers(drivers){
  const newDrivers = drivers.map(driver=> driver.toLowerCase())
  return newDrivers;
}

function nameToAttributes(drivers){
  return drivers.map(function(driver){
    const firstName = driver.split(" ")[0]
    const lastName = driver.split(" ")[1]

    return {firstName: firstName, lastName: lastName}
  })
}


function attributesToPhrase(drivers){
  return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  })
}
