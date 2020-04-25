// https://codeforces.com/problemset/problem/785/A

function getPolyhedrons(...n){

    let f = 0
    
    n.forEach(s => {
        switch(s){
            case 'Tetrahedron':
                f += 4
            break
            case 'Cube':
                f += 6
            break
            case 'Octahedron':
                f += 8
            break
            case 'Dodecahedron':
                f += 12
            break
            case 'Icosahedron':
                f += 20
            break
        }
    })

    console.log(`faces: ${f}`)
}

getPolyhedrons('Octahedron', 'Dodecahedron')