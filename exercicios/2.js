function triangle(n1, n2, n3) {
    if (n1 == n2 && n1 == n3 && n2 == n1 && n2 == n3 && n3 == n1 && n3 == n2) {
        console.log('Equilátero')
    } else if (n1 == n2 || n1 == n3 || n2 == n1 || n2 == n3 || n3 == n1 || n3 == n2) {
        console.log('Isósceles')
    } else {
        console.log('Escaleno')
    }
}

triangle(1,1,1)