//Crie 3 objetos da classe ALuno.

let aluno1 = new Aluno('Thayslane', 17, '2022optimusprime', 'https://lh3.googleusercontent.com/d/1kQcfoPxzC3k0Jje8t6Qwo8we7JQhsdvR ');
let aluno2 = new Aluno('Jaciane', 16, '2022abuble', 'https://lh3.googleusercontent.com/d/1d5oA9rmApqBH6Mt3n75Dto7bETmuus6x');
let aluno3 = new Aluno('Rebeca', 16, '2022Beats', 'https://lh3.googleusercontent.com/d/1vw8sfjAXTlZpfwTJNJSXJQd1sOgKiVb0');

//Crie um array, depois adicione os 3 alunos a esse array
let listaDeAlunos = [];
listaDeAlunos.push(aluno1);
listaDeAlunos.push(aluno2);
listaDeAlunos.push(aluno3);

//Percorra o array e imprima os dados de cada 
//aluno no console
for (let i = 0; i < listaDeAlunos.length; i++) {
    console.table(listaDeAlunos[i])
}

console.log(`
-------------------------------

Nome:`)

for (let i = 0; i < listaDeAlunos.length; i++) {
    document.write(`
    <div class = 'card'>
    
    <div>Nome: ${listaDeAlunos[i].nome}</div>
    <div>Idade: ${listaDeAlunos[i].idade}</div>
    <div>Matricula: ${listaDeAlunos[i].matricula}</div>
    <img src = '${listaDeAlunos[i].foto.replace('https://drive.google.com/file', 'https://lh3.googleusercontent.com')}'>
    
    </div>`)
}
