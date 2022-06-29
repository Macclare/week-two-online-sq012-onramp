function checkPrime(num) {
  let prime1 = num;
  for (let i = 2; i * i <= prime1; i++) if (prime1 % i === 0) return false;
  return prime1 > 1;
}

module.exports = checkPrime;

console.log(checkPrime(2)); 
