/*
function lastIndexOf(arr, elt, start) {

  for (let i = start - 1; i >= 0; i--)


    if (arr[i] === elt) return i


  return -1


}


console.log(lastIndexOf([1, 2, 1, 2], 2))

*/

const inventory = [

  {type:   "machine", value: 5000},


  {type:   "machine", value:  650},


  {type:      "duck", value:   10},


  {type: "furniture", value: 1200},


  {type:   "machine", value:   77}

]

let totalMachineValue = inventory.filter((inventorys) => inventorys.type === "machine")


/*
console.log(totalMachineValue)


let profile = {
    fname: 'Code',
    lname: 'Gym',
    bday: new Date('1979-01-02')
}

let fname = profile.fname;
let lname = profile.lname;

console.log(fname,lname);


function detectCollision(objects, point) {
    for (let i = 0; i < objects.length; i++) {

    let object = objects[i];

    if (point.x >= point.x && object.x <= objects.x + objects.width &&
        point.y >= point.y && object.y <= objects.y + objects.height)
        return object
} 
}
const myObjects = [
    {x: 10, y:20, with:30, height:30},
    {x: -40, y: 20, width: 30, height: 30},
    {x:   0, y:  0, width: 10, height:  5}
]

console.log(detectCollision(myObjects, {x:4, y:2}))
*/

/*
function replace(array, from, to, elements) {

  array.splice.apply(array, [from, to - from].concat(elements))

}

let testArray = [1, 2, 100, 100, 6]

replace(testArray, 2, 4, [3, 4, 5])

console.log(testArray)

function copyReplace(array, from, to, elements) {

  return array.slice(0, from).concat(elements).concat(array.slice(to))

}

console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]))

let customerOrder = []

function recordOrders(time) {

  customerOrder.push({time, birds: Array.prototype.slice.call(arguments, 1)})

}

recordOrders(new Date, "coffee", "yaourt", "pizza")

console.log(customerOrder)
*/