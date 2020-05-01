// [-3, -2, -1, 0, 1, 2, 3]
//  [0] + [6] = 0
// Sorted Array
// 2 pointers

// O(n)
function sumZero(array){
    let right = array.length - 1
    let left = 0

    while(left < right){
        let sum = array[left] + array[right]
        if( sum === 0){
            return [array[left], array[right]]
        }else if (sum > 0){
            right--
        }else{
            left++
        }
    }
}

let array = [-3, -2, -1, 0, 1, 2, 3]
console.log(sumZero(array))