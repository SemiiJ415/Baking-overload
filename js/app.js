/**
 * start button fires choose a dessert option heading, and dessert buttons. 
 * 
 * dessert button fires ingredient list and first question and answer choices
 * 
 * how to play fires instructions div 
 * help button fires conversion chart
 * 
 * 
 */

//buttons
const helpBtn = document.getElementById('helpBtn')
const answerChoices = document.querySelectorAll('.answer-choices')
const answerBoxes = document.querySelector('.answer-boxes')

//list for ingredients div
let ingredientsList = []

// dessert id, name, ingredients, and qty of recipe 
var dessertItems = [
    {
        id: 1, 
        item: 'brownie',
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
        item: 'cookie',
        ingredients : {
            baking_powder:'1/4 tsp',
            baking_soda:'1/2 tsp',
            brown_sugar:'3/4 cup',
            butter:'1/2 cup',
            chocolate_chips:'4 oz',
            eggs:'1', 
            flour:'1 1/4 cups',
            salt:'1 tsp', 
            white_sugar:'1/2 cup', 
            vanilla_extract:'1 tsp' },
        qty: 12
    },
    {
        id: 3, 
        item: 'cupcake',
        ingredients : {
            baking_powder:'2 1/2 tsps',
            butter: '3/4 cup',
            buttermilk: '1/2 cup',
            eggs:'4', 
            flour:'2 1/2 cups',
            salt:'1/2 tsp', 
            white_sugar:'3/4 cup', 
            vanilla_extract:'2 tsps' },
        qty: 24
    },
    {
        id: 4, 
        item: 'pancake',
        ingredients : {
            baking_powder: '1 tsp',
            baking_soda:'1/2 tsp',
            butter: '1/4 cup',
            buttermilk:'1 cup', 
            eggs: '2', 
            flour:'1 1/2 cups',
            salt:'1/2 tsp', 
            white_sugar:'2 tblsps', 
            vanilla_extract: '1 tsp'},
        qty: 12
    }
]
//array of questions and answers
const questions = [
        {
            id: 1,
            category: 'brownie',
            question: 'To make a pan of 16 brownies you need 1 cup of brown sugar. Tommy wants 48 brownies, how many cups of brown sugar do you need?',
            choices: ['3', '1/2', '4'],
            correctChoice: '3'
        },
        {
            id: 2,
            category: 'brownie',
            question: 'To make a pan of 16 brownies you need 4 eggs. Jennifer wants 8 brownies, how many eggs do you need?',
            choices: ['1', '2', '4'],
            correctChoice: '2'
        },
        {
            id: 3,
            category: 'brownie',
            question: 'To make a pan of 16 brownies you need 1 tablespoon of vanilla extract. Mark wants 32 brownies, how much vanilla extract do you need?',
            choices: ['2', '3', '1'],
            correctChoice: '2'
        },
        {
            id: 4,
            category: 'brownie',
            question: 'To make a pan of 16 brownies you need 1 cup of all purpose flour. Jamiya wants 16 brownies, how many ounces of flour do you need?',
            choices: ['1', '8', '2'],
            correctChoice: '8'
        },
        {
            id: 5,
            category: 'cookie',
            question: 'For every 12 chocolate chip cookies you need a whole egg. Morty wants 3 dozen chocolate chip cookies. How many eggs do you need?',
            choices: ['3', '1', '2'],
            correctChoice: '3'
        },
        {
            id: 6,
            category: 'cookie',
            question: 'For every 12 chocolate chip cookies you need 1/2 a cup of white sugar. Susie wants 24 chocolate chip cookies. How many cups of sugar do you need?',
            choices: ['4', '1', '1/2'],
            correctChoice: '1'
        },
        {
            id: 7,
            category: 'cookie',
            question: 'For every 12 chocolate chip cookies you need 4 ounces of semi-sweet chocolate chips. Anthony wants 4 dozen chocolate chip cookies. How many cups of chocolate chips do you need?',
            choices: ['4', '1', '2'],
            correctChoice: '2'
        },
        {
            id: 8,
            category: 'cookie',
            question: 'For every 12 chocolate chip cookies you need a teaspoon of salt. Morty wants 2 dozen chocolate chip cookies. How many teaspoons of salt do you need?',
            choices: ['4', '3', '2'],
            correctChoice: '3'
        },
        {
            id: 9,
            category: 'cupcake',
            question: 'For every 24 cupcakes you need 4 whole eggs. Keisha wants 3 dozen cupcakes, how many eggs do you need?',
            choices: ['4', '3', '5'],
            correctChoice: '5'
        },
        {
            id: 10,
            category: 'cupcake',
            question: 'For every 24 cupcakes you need 155 grams of white sugar. Kim wants 24 cupcakes, how many cups of white sugar do you need?',
            choices: ['2', '3/4', '5'],
            correctChoice: '3/4'
        },
        {
            id: 11,
            category: 'cupcake',
            question: 'For every 24 cupcakes you need 1 cup of unsalted butter for the frosting. Janae wants a dozen cupcakes, how many cups of unsalted butter do you need?',
            choices: ['1/2', '3/4', '2'],
            correctChoice: '1/2'
        },
        {
            id: 12,
            category: 'cupcake',
            question: 'For every 24 cupcakes you need 460 grams of powdered sugar for the frosting. Taylor wants a dozen cupcakes, how many cups of powdered sugar do you need?',
            choices: ['1/2', '4', '2'],
            correctChoice: '2'
        },
        {
            id: 13,
            category: 'pancake',
            question: 'For every 12 pancakes you need 186.5 grams of all purpose flour. Dhon wants a dozen pancakes, how many cups of all purpose flour do you need?',
            choices: ['1/2', '4', '1.5'],
            correctChoice: '1.5'
        },
        {
            id: 14,
            category: 'pancake',
            question: 'For every 12 pancakes you need 1 cup of milk. Maggie wants a 4 dozen pancakes, how many cups of milk do you need?',
            choices: ['1', '4', '2'],
            correctChoice: '4'
        },
        {
            id: 15,
            category: 'pancake',
            question: 'For every 12 pancakes you need 56.75 grams of melted butter. Qua wants a dozen pancakes, how many cups of melted butter do you need?',
            choices: ['1/2', '1/4', '2'],
            correctChoice: '1/4'
        },
        {
            id: 16,
            category: 'pancake',
            question: 'For every 12 pancakes you need 2 teaspoons of baking powder. Cydney wants 6 pancakes, how many teaspoons of baking powder do you need?',
            choices: ['1', '3', '2'],
            correctChoice: '1'
        },
    ]

//start game
const startBtn = document.getElementById('startBtn')
startBtn.addEventListener('click', ()=>{
    startGame()
})

const howToPlayBtn = document.getElementById('howToPlayBtn')
howToPlayBtn.addEventListener('click', ()=>{
    instructions()
})
//game directions
const howToPlay = document.getElementById('howToPlay')
function instructions(){
    startScreen.classList.add('d-none')
    gameBoard.classList.add('d-none')
    howToPlay.classList.remove('d-none')
    const directionsDiv = document.getElementById('directions')
    // directionsDiv.classList.remove('d-none')
    const directions = "Click start game and choose which dessert you want to make, this will populate your ingredients list and display your first question. Answer the question correctly to move on to the next one and earn your ingredients. To win the round and build your dessert, answer all questions correctly and collect all ingredients."
    directionsDiv.innerText = directions
}

const startScreen = document.getElementById('startScreen')
const gameBoard = document.getElementById('gameBoard')
function startGame(){
    startScreen.classList.add('d-none')
    gameBoard.classList.remove('d-none')
    howToPlay.classList.add('d-none')
    chooseDessert()
}
function chooseDessert(){
    const dessertChoice = document.getElementById('dessertChoice')
    dessertChoice.classList.remove('d-none')
    displayDesserts()
}
function displayDesserts(){
    const buttons = document.getElementById('buttons')
    buttons.classList.remove('d-none')
}
//loop through each dessert button to build list and display question
const dessertBtns = document.querySelectorAll('.dessertBtns')
dessertBtns.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        buildList(btn)
        displayQuestion(btn)
    })
})
//remove previous list items from ingredient list
const removeLI =(parent, child)=> {
    parent.removeChild(child)
    }
//build ingredient list for selected dessert
const buildList =(btn)=> {
    const ingredientsDiv = document.getElementById('ingredientsDiv')
    const questionDiv = document.getElementById('questionDiv')
    ingredientsDiv.classList.remove('d-none')
    questionDiv.classList.remove('d-none')

    const ingredientListItems = document.querySelectorAll('.ingredient-list-item')
    ingredientListItems.forEach(item => {
        removeLI(list, item)
    })
    // console.log(dessertBtns);
    for (let i = 0; i < dessertItems.length; i++){
        if(btn.dataset.item === dessertItems[i].item){
            // var list = document.getElementById('list')
            // for (let ingredient in dessertItems[i].ingredients)

            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
            let currentItem = dessertItems[i].ingredients
            // console.log(currentItem)
            for(const [ingredient, amt] of Object.entries(currentItem)){
                var listItem = document.createElement('li')
                list.appendChild(listItem)
                listItem.innerText = `${ingredient}: ${amt}`}
            }
        }
    
        
    }

//display random question from selected dessert
function displayQuestion(btn){
    let questionArr = []
    let data
    console.log(btn.dataset.item)
    for (let i = 0; i < questions.length; i++) {
        if(btn.dataset.item == questions[i].category) {
            questionArr.push(questions[i])
            let ran = Math.floor(Math.random() * questionArr.length)
            data = questionArr[ran]
                let question = document.getElementById('question')
                question.innerText = `${data.question}` 
            }
        }
        displayAnswerChoices(data)
    }
//display answer choices 
function displayAnswerChoices(d){ 
    const choice1 = document.getElementById('choice1')
    const choice2 = document.getElementById('choice2')
    const choice3 = document.getElementById('choice3')
    choice1.innerText = d.choices[0]
    choice2.innerText = d.choices[1]
    choice3.innerText = d.choices[2]
    
    // questionChoices(d)
    selectAnswer(d)
}
//handles answer selected by user
function selectAnswer(d) {
    console.log(d.correctChoice)
    let correctChoice = d.correctChoice
    // let selected = d.target
    answerChoices.forEach((element) => {
        element.addEventListener('click', (d) => {
        // Your event handling logic here
        // d.target
        // console.log('Element clicked:', d.target.innerText);
        let userChoice = d.target.innerText
        checkAnswer(correctChoice, userChoice)
        });
    });
}
//checks user answer vs correct answer
function checkAnswer(correctChoice, userChoice){
    console.log(correctChoice)
    console.log(userChoice)
    const correct = "Great Job! That's right!"
    const incorrect = "uh oh. That's not right. Try again."

    let isCorrect = userChoice == correctChoice ? true : false
    const message = document.getElementById('message')
    if (isCorrect){
        message.innerText = correct
        nextQuestion()
    } else {
        message.innerText = incorrect
    }
}
//displays next question button
function nextQuestion(data){
    // console.log(d)
    const next = document.getElementById('nextBtn')
    next.classList.remove('d-none')
    next.addEventListener('click', ()=>{
        //splice questions array
        displayQuestion(btn)
        // ran = Math.floor(Math.random() * questions.length)
        console.log('clicked')
        // return questions.splice(ran, 1)
        // const question = document.getElementById('question')
        // question.innerText = innerQuestion[1]

    })

}
//holds array of unasked questions
function displayNextQuestion(){
    ran = Math.floor(Math.random() * questions.length)

    return questions.splice(ran, 1)
}

// // choc chip button selected
// chocChip = document.getElementById('chocChipBtn')
// chocChip.addEventListener('click', ()=>{
//         const chocChipIngredients = dessertItems[1].ingredients
//         var list = document.getElementById('list')
//         for (const ingredient in chocChipIngredients) {
//             var listItem = document.createElement('li')
//             listItem.classList.add('ingredient-list-item', 'text-capitalize', 'list-unstyled')
//             list.appendChild(listItem)
//             listItem.innerText = `${ingredient}: ${chocChipIngredients[ingredient]}`
//             // console.log(`${ingredient}: ${chocChipIngredients[ingredient]}`)
//             // choc chip questions
//             var chocChipCookieQuestions = [
//                 'For every 12 chocolate chip cookies you need a whole egg. Morty wants 3 dozen chocolate chip cookies. How many eggs do you need?',
//                 'For every 12 chocolate chip cookies you 1/2 a cup of white sugar. Susie wants 24 chocolate chip cookies. How many cups of sugar do you need?',
//                 'For every 12 chocolate chip cookies you need 4 ounces of semi-sweet chocolate chips. Anthony wants 4 dozen chocolate chip cookies. How many cups of chocolate chips do you need?',
//                 'For every 12 chocolate chip cookies you need a teaspoon of salt. Morty wants 2 dozen chocolate chip cookies. How many teaspoons of salt do you need?'
//                     // {
//                     //     id: 5,
//                     //     question: 'For every 12 chocolate chip cookies you need a whole egg. Morty wants 3 dozen chocolate chip cookies. How many eggs do you need?',
//                     //     solution: 3,
//                     // },
//                     // {
//                     //     id: 6,
//                     //     question: 'For every 12 chocolate chip cookies you 1/2 a cup of white sugar. Susie wants 24 chocolate chip cookies. How many cups of sugar do you need?',
//                     //     solution: 1,
//                     // },
//                     // {
//                     //     id: 7,
//                     //     question: 'For every 12 chocolate chip cookies you need 4 ounces of semi-sweet chocolate chips. Anthony wants 4 dozen chocolate chip cookies. How many cups of chocolate chips do you need?',
//                     //     solution: 2,
//                     // },
//                     // {
//                     //     id: 8,
//                     //     question: 'For every 12 chocolate chip cookies you need a teaspoon of salt. Morty wants 2 dozen chocolate chip cookies. How many teaspoons of salt do you need?',
//                     //     solution: 3,
//                     // },
//             ]
//             // choc chip answers
//             var chocChipCookieAnswers = [3, 1, 2, 3]
//             // grab random choc chip cookie question
//             var randomIndex = Math.floor(Math.random() * chocChipCookieQuestions.length)
//             var randomChocChipCookieQuestion = chocChipCookieQuestions[randomIndex]
//              // display random choc chip cookie question
//             question = document.getElementById('question')
//             question.innerText = `${randomChocChipCookieQuestion}`
            
//             // console.log(chocChipCookieQuestions)
//         }
//         })

// cupcake = document.getElementById('cupcakeBtn')
// cupcake.addEventListener('click', ()=>{
//         const cupcakeIngredients = dessertItems[2].ingredients
//         // console.log(brownieIngredients)
//         var list = document.getElementById('list')
//         for (const ingredient in cupcakeIngredients) {
//             var listItem = document.createElement('li')
//             listItem.classList.add('ingredient-list-item', 'text-capitalize', 'list-unstyled')
            
//             list.appendChild(listItem)
//             listItem.innerText = `${ingredient}: ${cupcakeIngredients[ingredient]}`
//             // console.log(`${ingredient}: ${cupcakeIngredients[ingredient]}`)
//             // cupcake questions
//             var cupcakesQuestions = [
//                 'For every 24 cupcakes you need 4 whole eggs. Keisha wants 3 dozen cupcakes, how many eggs do you need?',
//                 'For every 24 cupcakes you need 155 grams of white sugar. Kim wants 24 cupcakes, how many cups of white sugar do you need?',
//                 'For every 24 cupcakes you need 1 cup of unsalted butter for the frosting. Janae wants a dozen cupcakes, how many cups of unsalted butter do you need?',
//                 'For every 24 cupcakes you need 460 grams of powdered sugar for the frosting. Taylor wants a dozen cupcakes, how many cups of powdered sugar do you need?'
//                     // {
//                     //     id: 9,
//                     //     question: 'For every 24 cupcakes you need 4 whole eggs. Keisha wants 3 dozen cupcakes, how many eggs do you need?',
//                     //     solution: 5,
//                     // },
//                     // {
//                     //     id: 10,
//                     //     question: 'For every 24 cupcakes you need 155 grams of white sugar. Kim wants 24 cupcakes, how many cups of white sugar do you need?',
//                     //     solution: 3/4,
//                     // },
//                     // {
//                     //     id: 11,
//                     //     question: 'For every 24 cupcakes you need 1 cup of unsalted butter for the frosting. Janae wants a dozen cupcakes, how many cups of unsalted butter do you need?',
//                     //     solution: 1/2,
//                     // },
//                     // {
//                     //     id: 12,
//                     //     question: 'For every 24 cupcakes you need 460 grams of powdered sugar for the frosting. Taylor wants a dozen cupcakes, how many cups of powdered sugar do you need?',
//                     //     solution: 2,
//                     // }
//             ]
//             // cupcakes answers
//             var cupcakesAnswers = [5, 3/4, 1/2, 2]
//             // grab random cupcakes question
//             var randomIndex = Math.floor(Math.random() * cupcakesQuestions.length)
//             var randomCupcakesQuestion = cupcakesQuestions[randomIndex]
//              // display random cupcakes question
//             question = document.getElementById('question')
//             question.innerText = `${randomCupcakesQuestion}`
            
//             // console.log(cupcakesQuestions)
//         }
//         })

// pancake = document.getElementById('pancakesBtn')
// pancake.addEventListener('click', ()=>{
//         const pancakeIngredients = dessertItems[3].ingredients
//         var list = document.getElementById('list')
//         for (const ingredient in pancakeIngredients) {
//             var listItem = document.createElement('li')
//             listItem.classList.add('ingredient-list-item', 'text-capitalize', 'list-unstyled')
            
//             list.appendChild(listItem)
//             listItem.innerText = `${ingredient}: ${pancakeIngredients[ingredient]}`
//             // console.log(`${ingredient}: ${pancakeIngredients[ingredient]}`)
//             var pancakesQuestions = [
//                 'For every 12 pancakes you need 186.5 grams of all purpose flour. Dhon wants a dozen pancakes, how many cups of all purpose flour do you need?',
//                 'For every 12 pancakes you need 1 cup of milk. Maggie wants a 4 dozen pancakes, how many cups of milk do you need?',
//                 'For every 12 pancakes you need 56.75 grams of melted butter. Qua wants a dozen pancakes, how many cups of melted butter do you need?',
//                 'For every 12 pancakes you need 2 teaspoons of baking powder. Cydney wants 6 pancakes, how many teaspoons of baking powder do you need?'
//                     // {
//                     //     id: 13,
//                     //     question: 'For every 12 pancakes you need 186.5 grams of all purpose flour. Dhon wants a dozen pancakes, how many cups of all purpose flour do you need?',
//                     //     solution: 1.5
//                     // },
//                     // {
//                     //     id: 14,
//                     //     question: 'For every 12 pancakes you need 1 cup of milk. Maggie wants a 4 dozen pancakes, how many cups of milk do you need?',
//                     //     solution: 4
//                     // },
//                     // {
//                     //     id: 15,
//                     //     question: 'For every 12 pancakes you need 56.75 grams of melted butter. Qua wants a dozen pancakes, how many cups of melted butter do you need?',
//                     //     solution: 1/4
//                     // },
//                     // {
//                     //     id: 16,
//                     //     question: 'For every 12 pancakes you need 2 teaspoons of baking powder. Cydney wants 6 pancakes, how many teaspoons of baking powder do you need?',
//                     //     solution: 1
//                     // } 
//                 ]
//                 // pancakes answers
//                 var pancakesAnswers = [1.5, 4, 1/4, 1]
//                 // grab random pancakes question
//                 var randomIndex = Math.floor(Math.random() * pancakesQuestions.length)
//                 var randomPancakesQuestion = pancakesQuestions[randomIndex]
//                  // display random cupcakes question
//                 question = document.getElementById('question')
//                 question.innerText = `${randomPancakesQuestion}`
                
//                 // console.log(pancakesQuestions)
//         }
//         })


// const questionCategory = []
//     for(let i = 0; i < questions.length; i++) {
//         questionCategory.push(questions[i].category)
//     }
/**
 * Filter array items based on search criteria (query)
 */
// function filterItems(arr, query) {
//     return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
// }
// brnCategory = (filterItems(questionCategory, "brown")); 
// cookCategory = (filterItems(questionCategory, "cook"));
// cupCategory = (filterItems(questionCategory, "cup"));
// panCategory = (filterItems(questionCategory, "pan"));

// function questionChoices(choice, btn){

    

