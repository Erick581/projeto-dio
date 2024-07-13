class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo

    }

    atacar(){
        if(this.tipo == "mago"){
            console.log(`o ${this.tipo} atacou usando magia`)
        }else if(this.tipo == "guerreiro"){
            console.log(`o ${this.tipo} atacou usado a espada`)
        }else if(this.tipo == "monge"){
            console.log(`o ${this.tipo} atacou usado artes marciais`)
        }else if(this.tipo == "ninja"){
            console.log(`o ${this.tipo} atacou usado shuriken`)
        }
    }
}



let heroi = new hero("alan", "23", "mago")


heroi.atacar()

//fdskfs