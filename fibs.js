function fibs(n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      res.push(i);
    } else {
      res.push(res[i - 2] + res[i - 1]);
    }
  }

  return res;
}

function fibsRec(n) {
  if (n === 2) {
    return [0, 1];
  } else {
    return fibsRec(n - 1).concat(
      fibsRec(n - 1)[n - 2 - 1] + fibsRec(n - 1)[n - 1 - 1]
    );
  }
}

console.log(fibs(8));
console.log(fibsRec(8));
