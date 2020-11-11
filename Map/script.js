// Create the Map
var map = new Map()

//Map has 6 methods

// #1 - Set : set can store the value using the key
map.set('name', 'Kaveh')
map.set('family', 'Rezahanjani')
map.set('born-in', 'Tehran')

// #2 - Get : we can get out value with Get method using the key
console.log(map.get('born-in'))

// #3 - Has : return true if the key exists, otherwise return false
console.log(map.has('name')) //output => true
console.log(map.has('age')) //output => false

// #4 - Delete : delete can erase the value of the key
console.log(map.delete('name')) //output => nothing, because I deleted the value of that key
console.log(map.has('name')) //I wanted to be sure that the value of that key is deleted completely. output > true

//# 5 - Clear : clear all the elements
console.log(map.clear())//output => nothing, because I erased all the values and keys
console.log(map.has('family'))//be sure that everything is erased

// #6 - Size : return the current element count
console.log(map.size) //output => 2 > family and born-in ( if I comment clear method, is shown 2 )
