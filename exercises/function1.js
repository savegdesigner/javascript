// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

function getLetters(word, letter){

    let counter = 0;

    for(let i = 0; i < word.length; i++){
        if(word.charAt(i) == letter){
            counter++;
        }
    }

    return counter;

}
console.log(getLetters('vinicius', 'i'));