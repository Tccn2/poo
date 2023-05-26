let celular1 = new Celular(
    'Samsung',
    'A23',
    '4GB',
    '128GB',
    'Octa-Core',
    4,
    "SamsungA23.avif"
);
let celular2 = new Celular(
    'Xiaomi',
    '12T Pro',
    '8GB',
    '256GB',
    'Snapdragon 8+ Gen 1',
    4,
    "Xiaomi12Pro.jpg"
);
let celular3 = new Celular(
    'Motorola',
    'E22',
    '4GB',
    '128GB',
    'Helio G37',
    3,
    "MotoE22.jpg"
);
let celular4 = new Celular(
    'Apple',
    '11',
    '4G',
    '256GB',
    'Apple A13 Bionic hexa-core',
    4,
    "Apple11.jpeg"
);
let celular5 = new Celular(
    'LG',
    'K61',
    '4GB',
    '128GB',
    'Octa-Core 2.3',
    4,
    "LGK61.jpg"
);
let listaDeCelular = [celular1,celular2,celular3,celular4,celular5]
for(let i = 0; i<listaDeCelular.length; i++){
    document.write(`
        <h1><div> ${listaDeCelular[i].marca}</h1> </div>
        <div> ${listaDeCelular[i].modelo}</div>
        <div> ${listaDeCelular[i].armazenamento}</div>
        <div> ${listaDeCelular[i].ram}</div>
        <div> ${listaDeCelular[i].qtdDeCameras}</div>
        <div> ${listaDeCelular[i].processador}</div>
        <img src="img/${listaDeCelular[i].foto}" /> 
`)
}