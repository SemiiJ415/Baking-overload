/**
 * start button fires choose a dessert option heading, and dessert buttons. 
 * 
 * dessert button fires ingredient list and questions and answer choices
 * 
 * how to play fires instructions div 
 * help button fires conversion chart
 */

class Game {

    // constructor() {
    //     dessertType = [
    //         'brownies',
    //         'chocolate chip cookies',
    //         'cupcakes',
    //         'pancake'
    //     ];
    //     // dessertItems = [
    //     //     {
    //     //         id: 0, 
    //     //         item: 'brownies',
    //     //         ingredients : {
    //     //             butter: 1,
    //     //             cocoa_powder: 1,
    //     //             eggs: 1, 
    //     //             flour: 1,
    //     //             salt: 1, 
    //     //             white_sugar: 1, 
    //     //             vanilla_extract: 1 },
    //     //         qty: 16
    //     //     },
    //     //     {
    //     //         id: 1, 
    //     //         item: 'chocolate chip cookies',
    //     //         ingredients : {
    //     //             baking_powder: 1,
    //     //             baking_soda: 1,
    //     //             brown_sugar: 1,
    //     //             butter: 1,
    //     //             chocolate_chips: 1,
    //     //             eggs: 1, 
    //     //             flour: 1,
    //     //             salt: 1, 
    //     //             white_sugar: 1, 
    //     //             vanilla_extract: 1 },
    //     //         qty: 12
    //     //     },
    //     //     {
    //     //         id: 2, 
    //     //         item: 'cupcakes',
    //     //         ingredients : {
    //     //             baking_powder: 1,
    //     //             butter: 1,
    //     //             eggs: 1, 
    //     //             flour: 1,
    //     //             salt: 1, 
    //     //             white_sugar: 1, 
    //     //             vanilla_extract: 1 },
    //     //         qty: 24
    //     //     },
    //     //     {
    //     //         id: 3, 
    //     //         item: 'pancakes',
    //     //         ingredients : {
    //     //             baking_powder: 1,
    //     //             butter: 1,
    //     //             eggs: 1, 
    //     //             flour: 1,
    //     //             milk: 1, 
    //     //             salt: 1, 
    //     //             white_sugar: 1, 
    //     //             vanilla_extract: 1 },
    //     //         qty: 0
    //     //     }
    //     // ];
    //     //list connected to whichever dessert is chosen
    //     // let ingredientsList = []
    // }
}


let ingredientsList = []
var dessertType = [
    'brownies',
    'chocolate chip cookies',
    'cupcakes',
    'pancake'
];



brownies = document.getElementById('brownieBtn')
brownies.addEventListener('click', ()=>{
    const brownieIngredients = dessertItems[0].ingredients
    console.log(brownieIngredients)

    var list = document.getElementById('list')
//     dessertItems[0].ingredients.forEach(dessertButton => {
//     var listItem = document.createElement('li')
//     listItem.classList.add('ingredient-list-item', 'text-capitalize')
    
//     list.appendChild(listItem)
//     listItem.innerText = ingredient
// }
for (const ingredient in brownieIngredients) {
    var listItem = document.createElement('li')
    listItem.classList.add('ingredient-list-item', 'text-capitalize')
    
    list.appendChild(listItem)
    listItem.innerText = `${ingredient}: ${brownieIngredients[ingredient]}`
    // listItem.innerText = brownieIngredients[ingredient]
    console.log(`${ingredient}: ${brownieIngredients[ingredient]}`)

}

    // const brownieIngredientsList = Object.keys(brownieIngredients)
    // const brownieItem = brownieIngredientsList[0]


    // let obj = ''
    // for (let x in dessertItems.ingredients) {
    //     obj += dessertItems.ingredients[x] + ""
    // }
    // console.log(brownieIngredients)
    // console.log(dessertItems[0].ingredients)

})

//ingredients list
var ingredients = [

]
var dessertItems = [
    {
        id: 1, 
        item: 'brownies',
        // ingredients: ['butter', 'cocoa powder', 'eggs', 'flour', 'salt', 'white sugar', 'vanilla extract'],
        ingredients : {
            butter: '1/2 cup',
            cocoa_powder:'1/2 cup',
            eggs: 2, 
            flour:'1/2 cup',
            salt:'1/4 tsp', 
            white_sugar:'1 1/8 cups', 
            vanilla_extract:'2 tsps'},
        qty: 16
    },
    {
        id: 2, 
        item: 'chocolate chip cookies',
        ingredients : {
            baking_powder:'',
            baking_soda:'',
            brown_sugar:'',
            butter:'',
            chocolate_chips:'',
            eggs:'', 
            flour:'',
            salt:'', 
            white_sugar:'', 
            vanilla_extract:'' },
        qty: 12
    },
    {
        id: 3, 
        item: 'cupcakes',
        ingredients : {
            baking_powder:'',
            butter:'',
            eggs:'', 
            flour:'',
            salt:'', 
            white_sugar:'', 
            vanilla_extract:'' },
        qty: 24
    },
    {
        id: 4, 
        item: 'pancakes',
        ingredients : {
            baking_powder: 2,
            butter: '1/4 cup',
            eggs: '2', 
            flour:'1 1/4 cups',
            milk:'1 cup', 
            salt:'1/2 tsp', 
            white_sugar:'2 tblsp', 
            baking_soda:'1 tsp' },
        qty: 12
    }
];

//whichever dessert is selected the ingredients need to populate on the ingredients list
// var list = document.getElementById('list')
// dessertItems.ingredients.forEach(dessertButton => {
//     var listItem = document.createElement('li')
//     listItem.classList.add('ingredient-list-item', 'text-capitalize')
    
//     list.appendChild(listItem)
//     listItem.innerText = dessertItems.ingredients
// })
var questions = [
        {
            id: 1,
            question: 'To make a pan of 16 brownies you need 1 cup of brown sugar. Tommy wants 48 brownies, how many cups of brown sugar do you need?',
            solution: 3,
        },
        {
            id: 2,
            question: 'To make a pan of 16 brownies you need 4 eggs. Jennifer wants 8 brownies, how many eggs do you need?',
            solution: 2,
        },
        {
            id: 3,
            question: 'To make a pan of 16 brownies you need 1 tablespoon of vanilla extract. Mark wants 32 brownies, how much vanilla extract do you need?',
            solution: 2,
        },
        {
            id: 4,
            question: 'To make a pan of 16 brownies you need 1 cup of all purpose flour. Jamiya wants 16 brownies, how many ounces of flour do you need?',
            solution: 2,
        },
        {
            id: 5,
            question: 'For every 12 chocolate chip cookies you need a whole egg. Morty wants 3 dozen chocolate chip cookies. How many eggs do you need?',
            solution: 3,
        },
        {
            id: 6,
            question: 'For every 12 chocolate chip cookies you 1/2 a cup of white sugar. Susie wants 24 chocolate chip cookies. How many cups of sugar do you need?',
            solution: 1,
        },
        {
            id: 7,
            question: 'For every 12 chocolate chip cookies you need 4 ounces of semi-sweet chocolate chips. Anthony wants 4 dozen chocolate chip cookies. How many cups of chocolate chips do you need?',
            solution: 2,
        },
        {
            id: 8,
            question: 'For every 12 chocolate chip cookies you need a teaspoon of salt. Morty wants 2 dozen chocolate chip cookies. How many teaspoons of salt do you need?',
            solution: 3,
        },
        {
            id: 9,
            question: 'For every 24 cupcakes you need 2 whole eggs. Keisha wants 3 dozen cupcakes, how many eggs do you need?',
            solution: 3,
        },
        {
            id: 10,
            question: 'For every 24 cupcakes you need 155 grams of white sugar. Kim wants 24 cupcakes, how many cups of white sugar do you need?',
            solution: 3/4,
        },
        {
            id: 11,
            question: 'For every 24 cupcakes you need 1 cup of unsalted butter for the frosting. Janae wants a dozen cupcakes, how many cups of unsalted butter do you need?',
            solution: 1/2,
        },
        {
            id: 12,
            question: 'For every 24 cupcakes you need 460 grams of powdered sugar for the frosting. Taylor wants a dozen cupcakes, how many cups of powdered sugar do you need?',
            solution: 2,
        },
        {
            id: 13,
            question: 'For every 12 pancakes you need 186.5 grams of all purpose flour. Dhon wants a dozen pancakes, how many cups of all purpose flour do you need?',
            solution: 1.5
        },
        {
            id: 14,
            question: 'For every 12 pancakes you need 1 cup of milk. Maggie wants a 4 dozen pancakes, how many cups of milk do you need?',
            solution: 4
        },
        {
            id: 15,
            question: 'For every 12 pancakes you need 56.75 grams of melted butter. Qua wants a dozen pancakes, how many cups of melted butter do you need?',
            solution: 1/4
        },
        {
            id: 16,
            question: 'For every 12 pancakes you need 2 teaspoons of baking powder. Cydney wants 6 pancakes, how many teaspoons of baking powder do you need?',
            solution: 1
        } 
    ]

var dessertIdx = Math.floor(Math.random() * dessertType.length)

var dessert = dessertType[dessertIdx]


    
    //buttons
    startBtn = document.getElementById('startBtn')
    howToPlayBtn = document.getElementById('howToPlayBtn')
    // dessertBtn = document.getElementsByClassName('dessertBtn')
    helpBtn = document.getElementById('helpBtn')
    answerChoices = document.getElementsByClassName('answer-choices')
    choice1 = document.getElementById('choice1')
    choice2 = document.getElementById('choice2')
    choice3 = document.getElementById('choice3')
    
    // console.log(answerChoices)

    // startGame=()=>{
    //     //display question and dessert buttons
    // }

    // let dessertChoice =(dessertType)=> {
    //     return `${dessertType[i] + 1}`
    // }

    // console.log(dessert);

    //check answer choices against question
    // checkAnswer(choice1, choice2, choice3){
    //     if (choice1 != solution) {
    //         choice1.innerHTML = "Incorrect, try again."
    //         console.log(incorrect);
    //     } else if (choice2 != solution) {
    //         console.log(incorrect)
    //     } else  if (choice3 == solution) {
    //         console.log(correct)
    //     } else {
    //         return
    //     }
    // }

//question box 

// console.log(answerChoices)

correct = 'Great Job!'
incorrect = "uh oh. That's not right. Try again."

//answer choices need to be connected to question/solution
choice1.innerHTML = ""
choice2.innerHTML = ""
choice3.innerHTML = ""

choice1.addEventListener('click', ()=> {
    console.log('oops. Try again')
})
choice2.addEventListener('click', ()=> {
    console.log("uh oh. That's not right. Try again")
})
choice3.addEventListener('click', ()=> {
    console.log('Correct')
})




// let userInput

// if (userInput == questions[i].solution) {
//     console.log('correct')
// }

// let choice1 = Math.floor(Math.random(1-10))
// let choice2
// let choice3 

// if (answerChoices == questions[0].solution) {
//     console.log('correct')
//