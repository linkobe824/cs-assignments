function fibs(n) {
    const res = []
    for(let i = 0; i < n; i++) {
        if(i <= 1){
            res.push(i)
        }else {
            res.push(res[i-2] + res[i - 1])
        }
    }

    return res
}

function fibsRec(n) {
    
}

console.log(fibs(8))
console.log(fibsRec(8))