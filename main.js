/*const bici = [
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
*/

const Footballteam = [

    {
        name: "Chelsea",
        falli: 0,
        goal: 0
    },
    {
        name: 'Manchester',
        falli: 0,
        goal: 0
    },
    {
        name: 'BorussiaDortmund',
        falli: 0,
        goal: 0
    },
    {
        name: 'PSG',
        falli: 0,
        goal: 0
    },
    {
        name: 'Roma',
        falli: 0,
        goal: 0
    },
]
console.log(Footballteam);


function getRandom() {
    return Math.floor(Math.random() * 100);
}

for (let i = 0; i < Footballteam.length; i++) {
    const squad = Footballteam[i];
    squad.falli = getRandom();
    squad.goal = getRandom();

    Footballteam.falli = squad.falli

    Footballteam.goal = squad.goal
}
document.querySelector('.text').innerHTML = Footballteam
