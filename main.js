const bici = [
    {

    biciname: 'Bianchi',
    wheigth: 100,
},

{
    biciname: 'Dogma',
    wheigth: 70,
},

{

    biciname: 'Ruggeri',
    wheigth: 120,
}
]
for (let i = 0; i < bici.length; i++) {
    const BiciElement = bici[i]
    console.log("Nome", BiciElement.biciname);
    console.log("Peso", BiciElement.wheigth);

}
//stampare la bici con il peso minore
//controllare quale bici pesa meno




//document.getElementById('text').innerHTML = "la bici che pesa meno è " + biciname