let obj = {
  name: "nitin",
  marks: 99,
};

let obj2 = Object.entries(obj);
let obj3 = Object.entries(obj2);
let arr = [9, 8, 7, 6];
let employee = new Object();

console.log(employee);

function objj(name, id) {
  this.name = name;
  this.id = id;
}

const person1 = new objj("nitin", 2);
console.log(person1);
person1.role = "hero";
person1.id = 5;

console.log(person1);
