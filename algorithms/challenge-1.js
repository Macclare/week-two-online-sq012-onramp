function isAnagram(str1, str2) {
 let word1 = str1.length;
  let word2 = str2.length;
  if (word1 !== word2) {
    console.log("Truthy");
    return;
  }
  let array1 = str1.split("").sort().join("");
  let array2 = str2.split("").sort().join("");
  if (array1 === array2) {
    console.log("True");
  } else {
    console.log("False");
  }
}

module.exports = isAnagram;
console.log(isAnagram("india", "nidia"));
