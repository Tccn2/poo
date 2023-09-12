class Aluno {
    ///construtor gera o objeto
    constructor(turma, primeironome, ultimonome, dataDeNascimento, matricula, foto) {
        this.turma = turma;
        this.primeironome = primeironome;
        this.ultimonome = ultimonome;

        this.dataDeNascimento = dataDeNascimento;
        this.matricula = matricula;
        this.foto = foto;
    }
    getNome() {
        return `${this.ultimonome} , ${this.primeironome}`
    }

    getIdade() {
        let hoje = new Date();
        return hoje.getFullYear() - this.dataDeNascimento.getFullYear();


        //return( hoje.getFullYear() - this.dataDeNascimento.getFullYear() );
    }
}
