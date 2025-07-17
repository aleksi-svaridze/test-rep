function range(start, end) {
  let arr = [];

  for (let i = start; i <= end; i++) {
    arr.push(i);
  }

  return arr;
}

function sum(arr) {
  let result = 0;
  for (let n of arr) {
    result += n;
  }
  return result;
}

export const user = {
  age: 43,
  gender: "male",
};

export { range, sum };
