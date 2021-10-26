/*
* Crea un array vuoto e chiedi all’utente un numero
* da inserire nell’array. Continua a chiedere i numeri
* all’utente e a inserirli nell’array fino a quando
* a somma degli elementi è minore di 50.
*/

// const Numbers = [];
// let SumNumbers = 0;


// while (SumNumbers < 50) {
//     const UserNumber = Number(prompt('insersci un numero'))
//     SumNumbers += UserNumber;
//     Numbers.push(UserNumber)
// }

// console.log(SumNumbers, Numbers);
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore utilizzando foreach

const array = [
    {
        nome: 'Bianchi ',
        peso: 10
    },
    {
        nome: 'Bianchi2',
        peso: 20
    },
    {
        nome: 'Bianchi3 ',
        peso: 5
    },
    {
        nome: 'Bianchi4 ',
        peso: 30
    },
    {
        nome: 'Bianchi5 ',
        peso: 15
    }
]
let lightestBike = array[0]


array.forEach(bike => {
    if (bike.peso < lightestBike.peso) {
        lightestBike = bike
    };
});

console.log(lightestBike);