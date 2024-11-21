const pessoa = {
    nome: "João",
    idade: 15,
    cumprimentar: function() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
};
console.log(pessoa.cumprimentar());