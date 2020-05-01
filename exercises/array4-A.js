// Sliding Window Pattern
// [1, 2, 3, 4, 5], 2
// (1 + 2 = 3), (2 + 3 = 5), (3 + 4 = 7), (4 + 5 = 9),
// 9

// O (n^2)
function maxSubArraySum(array, n){
    if(array.length == 0 || n > array.length){
        return null
    }

    let max = -Infinity

    for(let i = 0; i < array.length - n + 1; i++){
        temp = 0
        for(let j = 0; j < n; j++){
            temp += array[i + j]
        }

        console.log(max, temp)
        
        if(temp > max){
            max = temp
        }
    }

    return max

}

let array = [-11, 2, 3, 0, 6]
console.log(maxSubArraySum(array, 2))