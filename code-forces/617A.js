// https://codeforces.com/problemset/problem/617/A

function getSteps(x){

    s = [5, 4, 3, 2, 1]
    c = 0
    y = 0

    while(y !== x){

        for(let i = 0; i < s.length; i++){
            if(s[i] < x){
                while(y < x){
                    y += s[i]
                    c++
                }

                if(y > x){
                    y -= s[i]
                    c--
                }
            }
        }

    }

    console.log('Minimum steps: ', c)

}

getSteps(17)