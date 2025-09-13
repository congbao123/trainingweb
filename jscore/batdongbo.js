function a(){ b(); }
function b(){ console.log('Run b'); }
a(); // Call Stack: a -> b

// Callback
setTimeout(() => {
  console.log('1 giây sau in ra của callback');
}, 1000);
// Promise 
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hoàn thành promise"), 1000);
});

promise.then(res => console.log(res)) // Hoàn thành
       .catch(err => console.error(err));
// Async / Await 
async function getData() {
  console.log("Bắt đầu");
  await new Promise(r => setTimeout(r, 1000));
  console.log("Xong sau 1s Async / Await ");
}
getData();
// Event Loop & Callback Queue
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);  // Macrotask
Promise.resolve().then(() => console.log("Promise")); // Microtask

console.log("End");

// gọi api bên Promise
function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Trả về Promise để chain tiếp
    })
    .then(data => {
      console.log(data.name);
    })
    .catch(error => {
      console.log("Lỗi:", error);
    });
}

fetchData();
// gọi api bên Async / Await ( dùng bên này dễ đọc code hơn)
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Lỗi:", error);
  }
}
fetchData();