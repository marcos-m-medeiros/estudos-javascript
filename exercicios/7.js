function bhaskara(a, b, c) {
    const delta = b * b - 4 * a * c

    if (delta < 0) {
        console.log('Sem raízes reais')
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a)
        const x2 = (-b - Math.sqrt(delta)) / (2 * a)
        console.log(x1)
        console.log(x2)
    }
}

console.log(bhaskara(1, -1, -6))