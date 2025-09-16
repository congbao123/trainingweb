// loc so chan lon nhat trong mang
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        if(arr[i] % 2 === 0){
      max = arr[i];
        }
    }
  }
  return max;
}
console.log(findMax([15,13, 10, 20, 6])); 

// dem so chan trong mang
function findcount(arr){
    let count = 0
    for (let i= 0 ; i < arr.length ; i++){
           if(arr[i] % 2 === 0){
            count+=1
           }
    }
      return count
}
console.log(findcount([15,13, 10, 20, 6])); 



function isPalindrome(str) {
  // Đảo ngược chuỗi
  let reversed = str.split("").reverse().join("");
  // So sánh với chuỗi gốc
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
