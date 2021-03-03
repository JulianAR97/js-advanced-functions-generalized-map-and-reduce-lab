// Add your functions here

let map = (arr, fn) => arr.map(fn);
let reduce = function(arr, fn, start) {
  let r = (!!start) ? start : arr[0]
  let i = (!!start) ? 0 : 1

  for (; i < arr.length; i++) {
    r = fn(arr[i], r)
  }

  return r;
}