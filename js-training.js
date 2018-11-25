let pets = [{
        name: "meaowalot",
        species: "Cat",
        age: 2
    },
    {
        name: "barksalot",
        species: "Dog",
        age: 2
    },
    {
        name: "mowalot",
        species: "Cow",
        age: 6
    }
]



console.log(pets.push({
    name: "growsalot",
    species: "Dog",
    age: 3
}))
console.log(pets)

let test = pets.map(nameOnly)

function nameOnly(x) {

    return x.name
}

// console.log(test)

let test2 = pets.filter(onDogs)

function onDogs(x) {
    return x.species == "Dog"

}

function onlyBabyDogs(x) {
    return x.age < 4

}

let babydogs = test2.filter(onlyBabyDogs).map(nameOnly)

console.log(babydogs)

function addApples(a, b) {
    return a + b
}

addApples(3, 5)

function avg(addApples, c) {
    return addApples(a, b) / 2
}

avg(addApples(3, 5), 2)