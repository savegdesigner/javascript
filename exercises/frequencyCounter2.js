// Write a function:
// Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(int1, int2){
    let num1 = int1.toString()
    let num2 = int2.toString()

    if(num1.length != num2.length){
        console.log('different frequency of digits')
        return
    }

    let counter = {}

    for(char of num1){
        counter[char] >= 1 ? counter[char] += 1 : counter[char] = 1
    }

    for(let i = 0; i < num2.length; i++){
        let char = num2[i]
        if(!counter[char]){
            console.log('different frequency of digits')
            return
        }else{
            counter[char] -= 1
        }
    }

    console.log('same frequency of digits')

}

sameFrequency(22, 22)