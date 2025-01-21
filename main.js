const alunos = [
    { nome: "Gabryel", nota: 10 },
    { nome: "Joao", nota: 7 },
    { nome: "Pedro", nota: 4 },
    { nome: "Maria", nota: 8 },
    { nome: "Joana", nota: 9 }
  ];
  

const aprovados = alunos.filter(aluno => aluno.nota >= 6);

console.log(aprovados);
  