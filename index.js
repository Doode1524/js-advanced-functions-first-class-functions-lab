// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
        return [drivers[0], drivers[1]]
            //or return drivers.slice(0, 2)
            //https://www.w3schools.com/jsref/jsref_slice_array.asp
    }
    //advantage of storing to variable is that it maintains its context

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(fare) {
        return fare * int
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, driverFunction) {
    return driverFunction(drivers)
}