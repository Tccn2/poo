function desenharCards(estoque, divContainerDeCards) {

    for (let i = 0; i < estoque.listaDeProdutos.length; i++) {
        divContainerDeCards.innerHTML += `
            <div class ='card'>
            <div> ${estoque.listaDeProdutos[i].descricao}     </div>
            <div> ${estoque.listaDeProdutos[i].precoUnitario}     </div>
    
            
            </div>
        
        `;

    }

}
