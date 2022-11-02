function soma (s) {

    let numeros = [3, 2]
    numeros.sort()
    //pos é o looping
    //numeros é a variavel como dependencia
    for(let pos in numeros){
        const e = numeros[pos] + s + s  % pos
    console.log(e);
    }

}

soma(2)