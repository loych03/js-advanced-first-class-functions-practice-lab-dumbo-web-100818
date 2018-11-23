// Code your solution in this file!

function logDriverNames(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location){
  drivers.forEach(function(driver){
    if (driver.hometown === location){
    console.log(driver.name)
  }
})
}

function driversByRevenue(drivers){
  const driverSorter = drivers.slice(0);
  driverSorter.sort(function(a, b){
    return a.revenue - b.revenue;})
    return driverSorter;
}

function driversByName(drivers){
  const driverSorter = drivers.slice(0);
  driverSorter.sort(function(a, b){
    return a.name.localeCompare(b.name)});
      return driverSorter;
}

function totalRevenue(drivers){
  return drivers.reduce((total, driver) => total + driver.revenue, 0);
}

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length
}
