// [-3, -2, -1, 0, 1, 2, 3]
//  [0] + [6] = 0
// Sorted Array
// 2 pointers

// O(n^2)
function sumZero(array){

    for(let i = 0; i < array.length; i++){
        for(let f = 0 + i; f < array.length; f++){
            if(array[i] + array[f] === 0){
                return [array[i], array[f]]
            }
        }
    }

}

let array = [-3, -2, -1, 0, 1, 2, 2]
console.log(sumZero(array))