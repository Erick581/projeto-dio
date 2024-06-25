






let username = `"Dhanvad"`

let saldoDeVitorias = subtracao(98, 0)


function subtracao(vitorias, derrotas){
    let produto = vitorias - derrotas
    return produto
}



if(saldoDeVitorias < 10){
    let ferro = "FERRO"
    console.log(`o heroi de nome: ${username} tem um saldo de vitorias de: ${saldoDeVitorias} e esta no nivel: ${ferro}`)
}else if(saldoDeVitorias < 20){
    let bronze = "BRONZE"
    console.log(`o heroi de nome: ${username} tem um saldo de vitorias de: ${saldoDeVitorias} e esta no nivel: ${bronze}`)
}else if(saldoDeVitorias < 50){
    let prata = "PRATA"
    console.log(`o heroi de nome: ${username} tem um saldo de vitorias de: ${saldoDeVitorias} e esta no nivel: ${prata}`)
}else if(saldoDeVitorias < 80){
    let ouro = "OURO"
    console.log(`o heroi de nome: ${username} tem um saldo de vitorias de: ${saldoDeVitorias} e esta no nivel: ${ouro}`)
}else if(saldoDeVitorias < 90){
    let diamante = "DIAMANTE"
    console.log(`o heroi de nome: ${username} tem um saldo de vitorias de: ${saldoDeVitorias} e esta no nivel: ${diamante}`)
}else if(saldoDeVitorias <= 100){
    let lendario = "LENDARIO"
    console.log(`o heroi de nome: ${username} tem um saldo de vitorias de: ${saldoDeVitorias} e esta no nivel: ${lendario}`)
}else if(saldoDeVitorias >= 101){
    let imortal = "IMORTAL"
    console.log(`o heroi de nome: ${username} tem um saldo de vitorias de: ${saldoDeVitorias} e esta no nivel: ${imortal}`)
}


