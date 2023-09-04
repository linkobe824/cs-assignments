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

let left = [5];
let right = [3, 4, 7];
console.log(merge(left, right));
