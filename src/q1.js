let obj = {};   //zero member
let obj1 = { id: 1 };   //one member
let obj2 = { id: 1, name: "rohit" };    //two member
let obj3 = { id: 1, name: "rohit", email: "rohit@gmail.com" };  //three member

//dot operator
console.log(obj1.id);
console.log(obj2.name);

//[] operator
console.log(obj2.name);
console.log(obj3["email"]);

// Modify The Member
obj.name = "Nikhil Naik"; // using dot operator
obj1["id"] = 11; // using bracket operator
console.log(obj.name);
console.log(obj1.id);

//Add a new member
obj.id = 1;
obj["email"] = "nikh@gmail.com";

console.log(obj);

//delete a member
delete obj.id;
console.log(obj);