function bissexto(ano) {
    if (ano % 4 !== 0) {
        console.log(true)
    } else if (ano % 100 != 0) {
        console.log(true)
    } else if (ano % 400 == 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}
bissexto(5000)