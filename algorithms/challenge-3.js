function missingNumber(numArr) {}
 let missing = [];
  for (let i = 1; i <= 9; i++) {
    if (!numArr.includes(i)) {
      missing.push(i);
    }
  }
  if (missing.length < 1) return false;
  if (missing.length === 1) return missing[0];
  return missing;
}
module.exports = missingNumber;
console.log(missingNumber([1, 2, 3, 4, 6, 7, 8, 9]));
