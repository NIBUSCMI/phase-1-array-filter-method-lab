// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, string) {
    let result = array.filter(possibleMatch => possibleMatch.toLowerCase() === string.toLowerCase());
    return result
}
//console.log(findMatching(drivers, 'bobby'));

function fuzzyMatch(arr, str) {
    let res = arr.filter(possMatch => possMatch.charAt(0).toLowerCase() === str.charAt(0).toLowerCase());
    return res
}
console.log(fuzzyMatch(drivers, 'b'))

function matchName(ar, st) {
    let result = ar.filter(obj => obj.name === st);
    return result
}













//array.filter(function(currentValue, index, arr), thisValue)