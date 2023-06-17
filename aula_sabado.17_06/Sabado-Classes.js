//Classe Loja
//Classe Cliente
//Classe Pedido


class Loja {
    constructor(nomeLoja, cnpj){
        this.nomeLoja = nomeLoja;
        this.cnpj = cnpj
    }

}

class Cliente {
    constructor (nomeCliente, telefone, cpf, enderecoDeEntrega){
        this.nomeCliente = nomeCliente;
        this.telefone = telefone;
        this.cpf = cpf;
        this.enderecoDeEntrega = enderecoDeEntrega;
    }
}

class Pedido {
    constructor (data,numeroPedido, itensDoPedido, frete, total, cliente, loja){
        this.data = data;
        this.numeroPedido = numeroPedido;
        this.itensDoPedido = [];
        this.frete = frete;
        this.total = total;
        this.cliente = cliente;
        this.loja = loja;

    }
    calcularSubTotal() {
        let subTotal = 0
        for(let i = 0; i < this.itensDoPedido.length; i++){
            subTotal += this.itensdoPedido[i].calcularTotalItem() 
        }
        return calcularSubTotal + this.frete

    }
        calcularTotal(frete){
            this.frete = frete
            return calcularSubTotal() + frete
        }


        
    }



class itemDoPedido {
    constructor(itensQuantidade, produto){
        this.itensQuantidade = itensQuantidade;
        this.produto = produto
        }

        calcularTotalItem() {
                return this.produto.valor.precoUnitario * this.itensQuantidade 

        
}

}


    



class Produto {
    constructor (nome, precoUnitario){
        this.nome = nome;
        this.precoUnitario = precoUnitario;
    }
}
