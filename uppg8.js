

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen
let persons = [
    {name: "Bertil", age: 25 },
    {name: "Ivar", age: 32 },
    {name: "Niklas", age: 22 },
    {name: "Gustaf", age: 34 },
    {name: "Olov", age: 41 },
];

function printOver30(array) {
    for (let person of array) {
        if (person.age > 30) {
            console.log(person.name);
        }
    }
}

// anropa funktionen och skicka med arrayen som argument
printOver30(persons);
}

module.exports = { uppg8 };