function findMatching(drivers,name) {
  return drivers.filter(function (driver){
    if (driver.toUpperCase()===name.toUpperCase()){
      return true
    }
  })
}
function fuzzyMatch(drivers,pattern) {
  return drivers.filter(function (driver){
    let firstTwoCharacters= driver.slice(0,pattern.length)
    if (firstTwoCharacters===pattern) {
      return true
    }
  })
}
function matchName(drivers,name) {
  return drivers.filter(function(driver){
    let nameOfDriver=driver.name
    if (nameOfDriver===name){
      return true
    }
  })
}