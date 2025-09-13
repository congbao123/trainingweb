	
// lệnh điều kiện
let age = 20;		
if (age >= 18) {		
console.log("Bạn đủ tuổi");		
} else {		
console.log("Bạn chưa đủ tuổi");		
}		    
// toans tử
console.log(5 + 3);   		
console.log(5 === '5');
//
let money = 50;

// Hàm 
function greet() {
    if (age >= 18 && money >= 30) {
  console.log("Được vào bar ");
} else {
  console.log("Không được vào ");
} 
}
greet();

// Get mảng và Add mảng
let numbers = [1, 2, 3, 4];
console.log(numbers[0]); 
numbers.push(5);
console.log(numbers[4]); 

//  Tạo đối tượng
let product = {
  id: 1,
  name: "Laptop",
  price: 1500
};

console.log("Ban đầu:", product);

// get 
console.log("Tên sản phẩm:", product.name);
console.log("Giá sản phẩm:", product["price"]);

// Sửa 
product.price = 1200;   
product.brand = "Dell"; 

console.log("Sau khi sửa:", product);

// 4. Xóa 
delete product.brand;

console.log("Sau khi xóa brand:", product);

// các vòng lặp
		
let j = 0;	
while (j < 3) {	
console.log(j);	
j++;	
}
for (let i = 0; i < 3; i++) {	
console.log(i); // 0, 1, 2	
}	
// for in dùng để tìm key trong Object
let user = { name: "Bao", age: 22, job: "Dev" };

for (let key in user) {
  console.log(key, ":", user[key]);
}
// for of dùng trong mảng với chuỗi 
let fruits = ["Táo", "Cam", "Chuối"];

for (let fruit of fruits) {
  console.log("Trái cây:", fruit);
}
