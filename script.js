function Animal(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;

    this.fazerSom = function() {
        console.log(`${this.nome} está fazendo um som!`);
    }
}

function Cachorro(nome, tipo, raca) {
    Animal.call(this, nome, tipo);
    this.raca = raca;
}

function Gato(nome, tipo, cor) {
    Animal.call(this, nome, tipo);
    this.cor = cor;
}

const cachorro1 = new Cachorro("Huck", "Cachorro", "Labrador");
const gato1 = new Gato("Robson", "Gato", "Cinza");
const gato2 = new Gato("Chaleco", "Gato", "Branco");

console.log(cachorro1);
console.log(gato1);
console.log(gato2);

cachorro1.fazerSom(); 
gato1.fazerSom();
gato2.fazerSom();