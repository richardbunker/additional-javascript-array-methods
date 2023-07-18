const range = (start, end = 0) => {
  const length = end === 0 ? start : end - start + 1;
  return Array.from({ length }, (val, key) => key + (end === 0 ? end : start));
};

Array.range = range;

console.log(Array.range(6));
// Expected Output
// [0, 1, 2, 3, 4, 5]

console.log(Array.range(1, 12));
// Expected Output
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
