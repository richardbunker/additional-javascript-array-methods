const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const groupBy = (arr, callback) => {
  const map = {};
  for (let index = 0; index < arr.length; index++) {
    const key = callback(arr[index], index);
    if (!map[key]) {
      map[key] = [arr[index]];
    } else {
      map[key] = [...map[key], arr[index]];
    }
  }
  return map;
};

Object.groupBy = groupBy;

const result = Object.groupBy(arr, (num, index) => {
  return num % 2 === 0 ? "even" : "odd";
});

console.log(result);
// Expected Output
// { 
//   even: [2, 4, 6, 8, 10],
//   odd: [1, 3, 5, 7, 9]
// }

