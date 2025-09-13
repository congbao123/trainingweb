// test phạm vi biến let 
let global = "G";

function fn() {
  let local = "L";
  if (true) {
    let block = "B";
    console.log(global, local, block); // G L B
  }
  // console.log(block); 
}

function outer() {
  let x = 10;
  function inner() {
    console.log(x); 
  }
  return inner;
}
outer()(); 

// 
var name = "Global";
function foo() {
  console.log(name);
}
function bar() {
  var name = "Bar";
  foo(); // lexical → Global
}
bar();

//function Scope vs Block Scope
function test() {
  if (true) {
    var a = 1;   
    let b = 2;  
}
  console.log(a); 
//   console.log(b); 
}
// hosting
console.log(a); // undefined
var a = 1;

// console.log(b); 
let b = 2;

sayHi(); // 
function sayHi() {
  console.log("Hi");
}
//Closure là hàm ghi nhớ kiểu như ghi nhớ điều kiện và truyền vào sử lí và đc gọi lại dùng thường xuyên 
function outer() {
  let count = 0;

  function inner() {
    count++;
    return count;
  }

  return inner;
}

const counter = outer(); 
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
