// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lowCDrivers = drivers.map( d => d.toLowerCase())
  return lowCDrivers;
}
// Takes in an array of drivers and returns a new array of drivers lower lowerCaseDrivers


function nameToAttributes (drivers) {
  return drivers.map( function (d) {
    const first = d.split(' ')[0];
    const last = d.split(' ')[1];

    return {firstName: first, lastName: last};
  });
}
// Take in an array of drivers with names as strings, separates names and assigns them to first and last

function attributesToPhrase(drivers) {
  return drivers.map( function(d) {
    return `${d.name} is from ${d.hometown}`
  });
}
