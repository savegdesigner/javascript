// Write a JavaScript program to find duplicate values in a JavaScript array.

const duplicateArray = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 0, 0, 0];

function getDuplicate(array){
    var nonDuplicates = []
    var duplicates = [];

    for(let i = 0; i < array.length; i++){
        if(!nonDuplicates.includes(array[i])){
            nonDuplicates.push(array[i]);
        }else{
            if(!duplicates.includes(array[i])){
                duplicates.push(array[i]);
            }
        }
    }
    return `Duplicate numbers: ${duplicates}`;
}
console.log(getDuplicate(duplicateArray));