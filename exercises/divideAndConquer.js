// Find number's position in given array

// O (log(n))
function search(array, value){

    let min = 0
    let max = array.length - 1

    while(min <= max){
        let middle = Math.floor((min + max) / 2)
        let currentNumber = array[middle]

        if(array[middle] < value){
            min = middle + 1
        }

        else if(array[middle] > value){
            max = middle - 1
        }

        else{
            return middle
        }
    }

    return -1
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

console.log(search(array, 15))