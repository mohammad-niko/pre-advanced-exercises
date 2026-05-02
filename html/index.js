function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  console.log("right: " + right);
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    console.log(mid);
    if (arr[mid] === target) {
      return mid; // عدد را پیدا کرد
    }

    if (arr[mid] < target) {
      left = mid + 1; // برو سمت راست
    } else {
      right = mid - 1; // برو سمت چپ
    }
  }

  return -1; // پیدا نشد
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

console.log("result:" + binarySearch(arr, 2));
