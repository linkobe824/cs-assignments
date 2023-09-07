let arr = [4,3,2,4,5,48,6,2,1,3,4,5,67]

function removeDuplicatesAndSortArray (arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
            .sort((a,b) => a - b)
}

console.log(removeDuplicatesAndSortArray(arr))