// https://codeforces.com/problemset/problem/705/A

function calculateFeelings(n){

    let feelings = ''

    for(let i = 0; i < n; i++){
        if(i % 2 == 0){
            feelings += 'I hate that '
        }else{
            feelings += 'I love that '          
        }
    }

    console.log(feelings)

}

calculateFeelings(3)