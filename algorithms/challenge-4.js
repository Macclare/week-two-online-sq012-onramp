function replaceDivisible(x, y) {
 let newArr = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] % y === 0) {
      newArr.push("isDivisible");
    } else {
      newArr.push(x[i]);
    }
  }
  return newArr;
}   

module.exports = replaceDivisible
console.log(replaceDivisible([2, 4, 3, 6, 5], 3));
