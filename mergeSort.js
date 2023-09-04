// merge sort pseudocode
// on input of n elements
// if n < 2:
//     return
// else
//     sort left half of elements
//     sort right half of elements
//     merge left and right

const arr = [8, 1, 6, 5, 2, 4, 7, 3];
const l = 0;
const r = arr.length - 1;

console.log(mergeSort(arr));

function mergeSort(arr) {
  let size = arr.length;
  if (size < 2) {
    return arr;
  } else {
    let mid = Math.floor(size / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right);
  }
}

function merge(leftHalf, rightHalf) {
  let i = 0,
    j = 0;
  const merged = [];
  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] < rightHalf[j]) {
      merged.push(leftHalf[i]);
      i++;
    } else {
      merged.push(rightHalf[j]);
      j++;
    }
  }

  if (i < leftHalf.length) {
    merged.push(...leftHalf.slice(i));
  }
  if (j < rightHalf.length) {
    merged.push(...rightHalf.slice(j));
  }
  return merged;
}
