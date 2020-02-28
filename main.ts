// create an empty array of numbers

let arrayLoop: number[] = []

// create a for loop that increments from 0 through 4

for (let index = 0; index < 4; index++) {

    // return the array loop that multiples that number times 2

    arrayLoop[index] = index *2
}

for (let i = 0; i < 4; i++) {

    // display the number and the array number 

    game.splash(i + "multiplied times two is: " + arrayLoop[i])
}

// Why is the number doubling each time arrayLoop is being displaeyd on game splash?


