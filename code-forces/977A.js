//  https://codeforces.com/problemset/problem/977/A

const wrongSubtraction = (n, k) => {

    for(let i = 0; i < k; i++){
        if(n % 10 == 0){
            n = n / 10
        }else{
            n -= 1
        }
        console.log(n)
    }

}

wrongSubtraction(1002050, 7)