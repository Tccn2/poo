//Crie 3 objetos da classe ALuno.

let aluno1 = new Aluno('2º ano', 'Thayslane', 'Nascimento', new Date("2006-7-10"), '2022.29', 'https://lh3.googleusercontent.com/d/1kQcfoPxzC3k0Jje8t6Qwo8we7JQhsdvR ');
let aluno2 = new Aluno('2º ano', 'Jaciane ', 'Santos', new Date("2006-3-3"), '2022.16', 'https://lh3.googleusercontent.com/d/1d5oA9rmApqBH6Mt3n75Dto7bETmuus6x');
let aluno3 = new Aluno('2º ano', 'Rebeca', 'Santos', new Date("2006-9-7"), '2022.25', 'https://lh3.googleusercontent.com/d/1vw8sfjAXTlZpfwTJNJSXJQd1sOgKiVb0');
let aluno4 = new Aluno('2º ano', 'Davi', 'Oliveira', new Date("2006-4-13"), '2022.10', 'https://drive.google.com/file/d/1bMGWpQ8K7ZMRXxjZldXs0DFlLylREE6I');
let aluno5 = new Aluno('2º ano', 'Gabriel', 'Farias', new Date("2006-4-20"), '2022.13', 'https://drive.google.com/file/d/1NTR45eSWi_6haSJi3P-IMqGJdkrOt-0J');
let aluno6 = new Aluno('2º ano', 'Pedro', 'Castela', new Date("2006-7-11"), '2022.24', 'https://drive.google.com/file/d/1cCtjjt4-ZEv-vj37DudZXx4WTvkBCmbs');
let aluno7 = new Aluno('2º ano', 'Helysson', 'Silva', new Date("2006-6-11"), '2022.15', 'https://drive.google.com/file/d/1IVyT8vEVgMC7UoKOcgqo3Nol9tBSmSLs');
let aluno8 = new Aluno('2º ano', 'Thiago', 'Melo', new Date("2007-2-12"), '2022.30', 'https://drive.google.com/file/d/1yK1BWGSRxuHt4gP6mmYNOIRHs4plJ8gR');
let aluno9 = new Aluno('2º ano', 'Catarina ', 'Silva', new Date("2007-5-29"), '2022.05', 'https://drive.google.com/file/d/1tCJ1hVCp7445_lj-Dj4LZ0yOaTAfxwA2');
let aluno10 = new Aluno('2º ano', 'Melrick', 'Ribeiro', new Date("2006-9-05"), '2022.22', 'https://drive.google.com/file/d/1XUZw8EtjRqL7ouVNORZIVGii2FJxxL_F');

console.log(aluno1.getIdade());


//Crie um array, depois adicione os 3 alunos a esse array
let listaDeAlunos = [];
listaDeAlunos.push(aluno9); //Catarina 
listaDeAlunos.push(aluno4); //Davi
listaDeAlunos.push(aluno5); //Gabriel
listaDeAlunos.push(aluno7); //Helysson
listaDeAlunos.push(aluno2); //Jaciane
listaDeAlunos.push(aluno10); //Melrick
listaDeAlunos.push(aluno3); //Rebeca
listaDeAlunos.push(aluno6); //Pedro
listaDeAlunos.push(aluno1); //Thayslane
listaDeAlunos.push(aluno8); //Thiago 








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
        <div class = 'cabecalho'>
            <p class = 'turma'>${listaDeAlunos[i].turma}</p>
            <h3 class = 'nome'>${listaDeAlunos[i].getNome()}</h3>
            <img class = 'logo' src = 'img/logo-ifal.png'/>
        </div>



        <div class = 'conteudo'>
            <img class ='foto' src = '${listaDeAlunos[i].foto.replace('https://drive.google.com/file', 'https://lh3.googleusercontent.com')}'>
            <div class ='info'>
                <div>
                    <p class='label'>Idade</p>
                    <p class='valor'>${listaDeAlunos[i].dataDeNascimento}</p>
                </div>
                <div>
                    <p class='label'>Matrícula</p>
                    <p class='valor'>${listaDeAlunos[i].matricula}</p>
                </div>
            </div>
        </div>
    </div>
    
    `)
}

