// https://codeforces.com/problemset/problem/1154/A

function restoreNumbers(n1, n2, n3, n4){

    let ns = [n1, n2, n3, n4]
    
    ns.sort((a, b) =>{
        return a - b
    })

    let abc = ns[3]
    let a = ns[3] - ns[2]
    let b = ns[3] - ns[1]
    let c = ns[3] - ns[0]

    console.log(a, b, c)
}

restoreNumbers(3, 6, 5, 4)
restoreNumbers(40, 40, 40, 60)