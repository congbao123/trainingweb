// console.log("Đây là từ practice.tsx");
// // Biến với các kiểu dữ liệu
// let age: number = 25;
// let name: string = "Nguyen Van A";
// let isStudent: boolean = true;
// let scores: number[] = [85, 90, 95]; // Array
// let person: [string, number] = ["Alice", 30]; // Tuple
// let anything: any = 42; // Any
// let fruits: string[] =["táo","thơm","Me"];
// let address: [string, number, boolean]=["AN Thắng", 29, true];
// anything = "Hello"; // Cho phép bất kỳ kiểu nào
// let unknownValue: unknown = "congbao"; // Unknown
// if (typeof unknownValue === "number") {
//   console.log(unknownValue * 2);
//   } 
//   else{
//     console.log("unknownValue không phải là number");// Phải kiểm tra kiểu trước khi sử dụng
// }
// console.log("Test type",{ age, name, isStudent, scores, person, anything,fruits,address,unknownValue }); 

// // Interface
// interface User {
//   id: number;
//   name: string;
//   email?: string; // Tùy chọn
// }
// interface Product{
//     id:number;
//     name:string;
//     price:number;
// }
// const product: Product={id: 1, name: "Huy", price:100}
// const user: User = { id: 1, name: "Bob", email: "bob@example.com" };

// // Type
// type Status = "active" | "inactive" | "pending"; // Union type
// let userStatus: Status = "active";
// type role = "admin" | "user" | "guest"; 
// const rolestatus: role = "admin"

// enum Day {
//   Monday,
//   Tuesday,
//   friday,
// }
// let favoriteDay:Day= Day.friday;
// // Enum
// enum Color {
//   Red,
//   Green,
//   Blue,
// }
// let favoriteColor: Color = Color.Green;
// // Utility Types
// type PartialUser = Partial<User>; // Tất cả thuộc tính trở thành tùy chọn
// const partial: PartialUser = { name: "Charlie" };

// // Keyof
// type UserKeys = keyof User; // "id" | "name" | "email"
// let key: UserKeys = "email";

// // Typeof
// const sampleUser = { id: 2, name: "David" };
// type SampleUserType = typeof sampleUser; // { id: number; name: string }

// // Chú thích kiểu
// function greet(name: string): string {
//   return `Hello, ${name}`;
// }

// // Suy luận kiểu
// let value = 10; // TypeScript suy ra là number

// // Khẳng định kiểu
// let anyValue: any = "This is a string";
// let strLength = (anyValue as string).length;

// const greetingResult = greet("Alice");

// console.log({product,rolestatus,favoriteDay})
// console.log("Test Interface ",{ user, userStatus, favoriteColor, partial });
// console.log("Test Keyof",{ key, sampleUser, greetingResult, value, strLength });
// // OOP - Kế thừa
// console.log("TEST OOP:");
// class Animal {
//   constructor(public name: string) {}
//   eat() {
//     console.log(`${this.name} động vật ăn cỏ`);
//   } 
// }

// class Lion extends Animal {
//   roar(){
//     console.log(`su tu gam gu`);
//   }
// }

// // Lớp trừu tượng
// abstract class Habitat {
//   abstract describeEnvironment(): string;
// }

// class Savanna extends Habitat {
//     describeEnvironment(): string {
//     return "Môi trường đồng cỏ rộng lớn."; // Sửa thành return
//   }
// }

// // Generic
// function createPair<T>(item1: T, item2: T): [T, T] {
//   return [item1, item2]; // Hoàn thành hàm
// }

// // Thực thi
// const lion = new Lion("Simba");
// lion.eat();
// lion.roar();

// const savanna = new Savanna();
// console.log(savanna.describeEnvironment());

// const stringPair = createPair<string>("Zebra", "Giraffe");
// const numberPair = createPair<number>(1, 2);
// console.log({ stringPair, numberPair });

// export default function Practice() {
//   return <div>Thực hành TypeScript</div>;
// }