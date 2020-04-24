// https://codeforces.com/problemset/problem/791/A

const growingBear = (a, b) => {

    let c = 0

    while(a <= b){
        a = a * 3
        b = b * 2

        c++

    }

    console.log(`${c} years`)

}

growingBear(4, 7)