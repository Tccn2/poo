class Celular{
    constructor(marca, modelo, ram, armazenamento, processador, qtdDeCameras, foto, id){
        this.marca = marca;
        this.modelo = modelo;
        this.ram = ram;
        this.armazenamento = armazenamento;
        this.processador = processador;
        this.qtdDeCameras = qtdDeCameras;
        this.foto = foto;
        this.id = id;
    }

}

// Crie a classe TV
// atributos: marca, modelo, tamanho, foto
// Depois crie 5 objetos dessa classe.
// Adicione os 5 objetos a um vetor (array) 
// Faça um for percorrer esse array e imprimir cada objeto
// no arquivo html.

class Tv{
    constructor(marca, modelo, tamanho, foto, id){
        this.marca = marca;
        this.modelo = modelo;
        this.tamanho = tamanho;
        this.foto = foto;
        this.id = id;
    }
}

// A classe Favoritos terá apenas 1 atributo:
// listaDeProdutos
// 
// O construtor dessa classe não vai 
// receber nada como entrada e apenas vai inicializar o
// atributo com um array vazio.
class Favoritos{
    constructor(){
        this.listaDeProdutos = [];
    }

    adicionarProduto(produto){
        this.listaDeProdutos.push(produto);
    }
    removerProduto(id){
        for (let i = 0; i < this.listaDeProdutos.length; i++ ){
            if(this.listaDeProdutos[i].id == id){
                this.listaDeProdutos.splice(i, 1)
            }
        }

        this.exibirNoHTML();
    }

    exibirNoHTML(){
        //Deixando vazio o conteúdo da tag com id 'produtos'
        document.getElementById('produtos').innerHTML = '';

        for (let i = 0; i < this.listaDeProdutos.length; i++) {

            document.getElementById('produtos').innerHTML += (`
            <div class='card'>
                <img class='foto' src='img/${this.listaDeProdutos[i].foto}' />
                <div class='info'>
                    <h3 class='modelo'>${this.listaDeProdutos[i].modelo}</h3>
                    <p class='marca'>${this.listaDeProdutos[i].marca}</p>
                    
                    <span class='outros'>${this.listaDeProdutos[i].tamanho}</span>
                    <span class='outros'> polegadas</span>
                </div>
                <button class = "btn-remover" onclick ´${this.removerProduto(this.listaDeProdutos[i].id)}´> 🗑 </button>
            </div>
        `);
            
        }
    }
}
