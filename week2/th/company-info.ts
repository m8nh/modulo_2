// let map = new Map();
// map.set('22', 'player2');
// map.set(32,'TCS');
// map.set(false, 'Google');
// map.set('45', 'Facebook');
// map.set('65', 'Amazon');
// console.log("Employer at index 22: " + map.get('22'));
// console.log("Employer at index 32: " + map.get(32));
// console.log("Size of the map: " + map.size);
// console.log("Deleting a value: " + map.delete('65'));
// console.log("New Size of the map: " + map.size);

// let employeeMap = new Map();
// employeeMap.set("Saideep", 20);
// employeeMap.set("Karthik", 25);
// employeeMap.set("Sumit", 21);
// employeeMap.set("Sameer", 22);
// employeeMap.set("Raje", 24);

// for (let name of employeeMap.keys()) {
//     console.log("Employee Nmmes = " + name);
// }

// for (let age of employeeMap.values()){
//     console.log("Employee Age = " + age);
// }

// console.log("the employeeMap Entries are: ");
// for (let entry of employeeMap.entries()) {
//     console.log(entry[0], entry[1]);
// }

let nameMap = new Map()
nameMap.set("Anand", 1001);
nameMap.set("Bhargavi", 1002);
nameMap.set("Chrestin", 1003);
nameMap.set("Daniel", 1004);
nameMap.set("Esther", 1005);
console.log(nameMap.size);
console.log(nameMap.get("Chrestin"));
console.log(nameMap.get("Esther"));

for (let item of nameMap.keys()){
    console.log("Name: " +item);
}
for(let item of nameMap.entries()){
    console.log("entries: ", item[0], item[1]);
}
for (let [key, value] of nameMap) {
    console.log("key value pairs: ", key, value);
}
nameMap.delete("Daniel")
// Clear all the entries of the map
nameMap.clear();
console.log(nameMap.size);
