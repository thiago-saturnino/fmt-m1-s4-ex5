class Person {
  nome;
  idade;
  altura;
  constructor(nome, idade, altura) {
    this.nome = nome;
    this.idae = idade;
    this.altura = altura;
  }

  apresentar() {
    alert(
      `Olá me chamo ${this.nome} tenho ${this.idade} anos e tenho ${this.altura} de altura`
    );
  }
}

class Funcionario extends Person {
  constructor(nome, idade, altura, profissao) {
    super(nome, idade, altura);
    this.profissao = profissao;
  }

  apresentar() {
    alert(
      `Olá me chamo ${this.nome} tenho ${this.idade} anos e tenho ${this.altura} de altura e sou ${this.profissao}`
    );
  }
}

const pessoa1 = new Person("joao", 20, 1.8);
const funcionario1 = new Funcionario("maria", 40, 1.9, "professora");
pessoa1.apresentar();
funcionario1.apresentar();
