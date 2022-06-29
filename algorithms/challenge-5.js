function isPalindrome(line) {
  
let result = line.split("").reverse().join("");
  if (result === line) {
    return true;
  } else {
    return false;
  }
}
module.exports = isPalindrome;

console.log(isPalindrome("anna"));
