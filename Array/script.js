// Create an Array #1
var numbers = new Array()
numbers[0] = 1
numbers[1] = 2
numbers[2] = 3
numbers[3] = 4
numbers[4] = 5

// Create an Array #2
var names = ["kaveh","kiarash"]

// push it to the end of the Array
names.push("mohammad")

// Delete the last array index
names.pop()

// Delete an array using index
delete names[0]

// find an array
names.find(name => name == "mohammad") // return Mohammad
names.find(name => name == "danial") // return undefined, means there is no danial in array

// findindex : if the value exists in Array , return 1 , otherwise -1
const result = names.findIndex(name => name == "kiarash")
// return -1
const result2 = names.findIndex(name => name == "mohsen")
