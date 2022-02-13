// Вариант 1
const pow = (x, n) => {
  let result = 1;
  for(let i = 0; i < n; ++i)
    {
      result *= x;
    }
  return result
}

// Вариант 2
const pow2 = (x, n) => {
  return Math.pow(x, n);
}

console.log(pow(2,3))
console.log(pow(5,2))

console.log(pow2(2,3))
console.log(pow2(5,2))