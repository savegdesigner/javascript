// Checking if arr1 == arr2 ^ 2
// E.G [1, 2, 3] == [1, 4, 9] -> TRUE
// E.G [1, 2, 3] == [1, 4, 1] -> FALSE

function checkArrays(array1, array2){

    if(array1.length !== array2.length){
        return false
    }

    for(let i = 0; i < array1.length; i++ ){
        let numIndex = array2.indexOf(array1[i] * array1[i])

        if(numIndex === -1){
            return false
        }

        array2.splice(numIndex, 1)
    }

    return true

}

let array1 = [1, 2, 3]
let array2 = [1, 9, 4]
console.log(checkArrays(array1, array2))