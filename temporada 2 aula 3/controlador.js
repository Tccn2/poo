let inputTurma = document.getElementById("iptTurma");
let inputPrimeiroNome = document.getElementById("iptPrimeiroNome");
let inputUltimoNome = document.getElementById("iptUltimoNome");
let inputDatadeNascimento = document.getElementById("iptDatadeNascimento");
let inputMatricula = document.getElementById("iptMatricula");
let buttonCadastrar = document.getElementById("btnCadastrar")

//Esta é a div que vai receber os cards

let containerDeCards = document.getElementById("containerDeCards")
desenharCards(containerDeCards);


//LISTENER
buttonCadastrar.addEventLiistener('click', quandoClicarEmCadastrar)



//FIM DOS LISTENERS




function quandoClicarEmCadastrar() {
    let alunoTemp = new Aluno(
        inputTurma.value,
        inputPrimeiroNome.value,
        inputUltimoNome.value,
        inputDatadeNascimento.value,
        inputMatricula.value
    );

    listaDeAlunos.push(alunoTemp);
    console.log(listaDeAlunos);
}
