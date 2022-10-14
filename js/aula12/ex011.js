var age = 20
console.log(`Você tem ${age} anos, você`)
if(age < 16){
    console.log('Não vota')
} else if (age < 18 || age > 65){
    console.log('Vota opcionalmente')
} else {
    console.log('vota obrigatoriamente!')
}


/*else {   Pode ser escrito assim de forma prolongada
    if (age <18){
        console.log('Voto opcional')
    } else {
        console.log('Vota')
    }*/