// https://codeforces.com/problemset/problem/996/A

function jackPot(n){

    let b = [100, 20, 10, 5, 1] 
    let c = 0
    let w = 0

    while(c != n){

        for(let i= 0; i < b.length; i++){
            if(b[i] < n){
                while(c < n){
                    c += b[i]   
                    w++  
                }

                if(c > n){
                    c -= b[i]
                    w--
                }
            }
        }

    }
    
    console.log(`${w} bills`)   

}

jackPot(43)
jackPot(125)
jackPot(10000000)