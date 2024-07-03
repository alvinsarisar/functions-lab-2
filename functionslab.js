// Code your solution in this file!
const hq = 42;
const street = prompt('please insert your pick up point (street number) :');
console.log (street);
// 1.function to Calculates the distance from HQ in blocks
function distanceFromHqInBlocks() {
  return Math.abs(street - hq);
}
const value1 = distanceFromHqInBlocks()
console.log('Distance from HQ in  Blocks is :' + value1)
 
//2.function to Calculates the distance from HQ in feet (1 block = 264 feet)
function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264;
}
const value2 =distanceFromHqInFeet (street)
console.log('Distance from HQ in feet is :' + value2)

// 3. function to Calculates the distance traveled in feet between two blocks
const destination =prompt('insert your destination (street number):')
function distanceTravelledInFeet() {
  return Math.abs(street - destination) * 264;
}
const distance = distanceTravelledInFeet()
console.log('Distance travelled in Feet is :' + distance)

// 4.function to Calculates the fare price for the trip
function calculatesFarePrice() {
  
  if (distance <= 400) {
    return 'This ride is on me'
  } else if (distance > 400 && distance <= 2000) {
    return 'your fare is ' + (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 'your fare is 25';
  } else {
    return 'cannot travel that far';
  }
}
console.log(calculatesFarePrice())
