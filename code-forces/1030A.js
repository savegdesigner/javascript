// https://codeforces.com/problemset/problem/1030/A

function checkProblem(n){

    let print = []

    for(let i = 0; i < n.length; i++){
        
        print.push(n[i])
    }

    if(print.includes(1)){
        console.log('Hard')
    }else{
        console.log('Easy')
    }
    
}

let n = [0, 0, 0, 0]
let m = [0, 0, 0, 0, 0, 1, 0, 0, 0]
checkProblem(n)
checkProblem(m)