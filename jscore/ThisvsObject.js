
// this dạng con trỏ để gọi các biến trong Object
// // Trường hợp 1: Trong object
// const user = {
//   name: "Bao",
//   show() {
//     console.log(this.name);
//   }
// };
// user.show(); //  "Bao" (this = user)

// // Trường hợp 2: Trong function thường
// function test() {
//   console.log(this);
// }
// test(); //  this = global (window trong browser, global trong Node)

// // Trường hợp 3: Trong class
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   hello() {
//     console.log("Xin chào " + this.name);
//   }
// }
// const p = new Person("Bao");
// p.hello();

// // Trường hợp 4: Arrow function
// const obj = {
//   name: "Admin",
//   show: () => {
//     console.log(this.name);
//   }
// };
// obj.show(); // 👉 undefined (arrow function không có this riêng, nó lấy từ scope cha)
let person = {
  name: "Bao",
  age: 22,
  sayHi: function() {
    console.log("Hi, tôi là " + this.name);
  }
};

person.sayHi(); // "Hi, tôi là Bao"
// Object prototype 
function Person(name) {
  this.name = name;
}

// Định nghĩa method trong prototype
Person.prototype.sayHello = function() {
  console.log("Xin chào, tôi là " + this.name);
};

const p1 = new Person("Bao");
const p2 = new Person("Admin");

p1.sayHello(); 
p2.sayHello(); 
