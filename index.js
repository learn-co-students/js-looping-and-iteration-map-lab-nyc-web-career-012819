// Code your solution in this file.
function lowerCaseDrivers(drivers)
{
  return drivers.map(function(name)
  {
    return name.toLowerCase()
  });
}
function nameToAttributes(drivers)
{
  return drivers.map(function(fullname)
  {
    const first = fullname.split(' ')[0];
    const last = fullname.split(' ')[1];

    return { firstName: first, lastName: last };
  });
}
function attributesToPhrase(drivers)
{
  return drivers.map(function(driver)
  {
    return `${driver.name} is from ${driver.hometown}`
  });
}
