export function range(start, end) {
  let arr = [];

  for (let i = start; i <= end; i++) {
    arr.push(i);
  }

  return arr;
}

export function sum(arr) {
  let result = 0;

  for (let n of arr) {
    result += n;
  }

  return result;
}
