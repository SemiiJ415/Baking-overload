/**
 * start button fires choose a dessert option heading, and dessert buttons. 
 * 
 * dessert button fires ingredient list and first question and answer choices
 * 
 * how to play fires instructions div 
 * help button fires conversion chart
 * 
 * 
 * need to disable dessert button after first click
 * need to clear list of ingredients once another dessert button has been selected
 * write a next question function to call upon after first click is fired
 */


//buttons
startBtn = document.getElementById('startBtn')
howToPlayBtn = document.getElementById('howToPlayBtn')
helpBtn = document.getElementById('helpBtn')
answerChoices = document.getElementsByClassName('answer-choices')

const list = document.getElementById('list')
const listItem = document.createElement('li')
listItem.classList.add('ingredient-list-item', 'text-capitalize', 'list-unstyled')

const answerBoxes = document.querySelector('.answer-boxes')

//list for ingredients div
let ingredientsList = []
// different dessert button types
var dessertType = [
    'brownies',
    'chocolate chip cookies',
    'cupcakes',
    'pancake'
];
// dessert id, name, ingredients, and qty of recipe 
var dessertItems = [
    {
        id: 1, 
        item: 'brownies',
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
        item: 'cookies',
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
        item: 'cupcakes',
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
        item: 'pancakes',
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
];

//whichever dessert is selected the ingredients need to populate on the ingredients list
const dessertBtns = document.querySelectorAll('.dessertBtns')
    dessertBtns.forEach(btn =>{
        btn.addEventListener('click', ()=>{
            buildList()
        })
    })

const removeLI =(parent, child)=> {
    parent.removeChild(child)
}

const buildList =()=> {
    const ingredientListItems = document.querySelectorAll('.ingredient-list-item')

    ingredientListItems.forEach(item => {
        removeLI(list, item)
    })
    
    for (let i = 0; i < dessertItems.length; i++){
        if(dessertBtns.dataset.item === dessertItems[i].item){
            console.log(dessertItems[i])
            // var list = document.getElementById('list')
            for (const ingredient in dessertItems[i][ingredient]) {
                // var listItem = document.createElement('li')
                list.appendChild(listItem)
                listItem.innerText = `${ingredient}: ${dessertItems[i][ingredient]}`}
            }
        }
        
    }



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
            correctChoice: '2'
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
            question: 'For every 12 chocolate chip cookies you 1/2 a cup of white sugar. Susie wants 24 chocolate chip cookies. How many cups of sugar do you need?',
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
const randomIndex = Math.floor(Math.random() * questions.length)
const randomQuestion = questions[randomIndex]

console.log(randomQuestion)

const quizChoices = questions[0].choices
    
quizChoices.forEach(choice => {
    const choiceButton = document.createElement('button')
    choiceButton.classList.add('answer-choices')
    choiceButton.setAttribute('id', `choice${quizChoices.indexOf(choice) + 1}`)
    choiceButton.dataset.choice = choice
    choiceButton.innerText = choice
    
    answerBoxes.appendChild(choiceButton)
})
// brownies button selected. only lists ingredients and displays first random question.
brownies = document.getElementById('brownieBtn')
brownies.addEventListener('click', ()=>{
    const brownieIngredients = dessertItems[0].ingredients
    // console.log(brownieIngredients)

    var list = document.getElementById('list')
    for (const ingredient in brownieIngredients) {
        var listItem = document.createElement('li')
        listItem.classList.add('ingredient-list-item', 'text-capitalize', 'list-unstyled')
        list.appendChild(listItem)
        listItem.innerText = `${ingredient}: ${brownieIngredients[ingredient]}`

        // browniesCicked = false
        // if (!browniesCicked) {
        //     brownies.classList.add('disable')
        // }
        console.log(`${ingredient}: ${brownieIngredients[ingredient]}`)

        // brownie questions. 
        var brownieQuestions = [
            'To make a pan of 16 brownies you need 1 cup of brown sugar. Tommy wants 48 brownies, how many cups of brown sugar do you need?', 
            'To make a pan of 16 brownies you need 4 eggs. Jennifer wants 8 brownies, how many eggs do you need?',
            'To make a pan of 16 brownies you need 1 tablespoon of vanilla extract. Mark wants 32 brownies, how many tablespoons of vanilla extract do you need?',
            'To make a pan of 16 brownies you need 1 cup of all purpose flour. Jamiya wants 16 brownies, how many ounces of flour do you need?'
                // {
                    // id: 1,
                    // brnQuestion: 'To make a pan of 16 brownies you need 1 cup of brown sugar. Tommy wants 48 brownies, how many cups of brown sugar do you need?',
                    // solution: 3,
                // },
                // {
                //     id: 2,
                //     brnQuestion: 'To make a pan of 16 brownies you need 4 eggs. Jennifer wants 8 brownies, how many eggs do you need?',
                //     solution: 2,
                // },
                // {
                //     id: 3,
                //     question: 'To make a pan of 16 brownies you need 1 tablespoon of vanilla extract. Mark wants 32 brownies, how much vanilla extract do you need?',
                //     solution: 2,
                // },
                // {
                //     id: 4,
                //     question: 'To make a pan of 16 brownies you need 1 cup of all purpose flour. Jamiya wants 16 brownies, how many ounces of flour do you need?',
                //     solution: 2,
                // }
        ]
        // brownie answers
        var brownieAnswers = [3, 2, 2, 2]
        // grab random brownie question
        var randomIndex = Math.floor(Math.random() * brownieQuestions.length)
        var randomBrownieQuestion = brownieQuestions[randomIndex]
        
            // display random brownie question
            question = document.getElementById('question')
            question.innerText = `${randomBrownieQuestion}`

            // var randomAnswerIndex = Math.floor(Math.random() * brownieAnswers.length)
            // var randomBrownieAnswer = brownieAnswers[randomIndex]
            // choice1.innerText = randomBrownieAnswer
    }
    })


    // trying to get answer choices to display
    // choice1 = document.getElementById('choice1')
    // choice2 = document.getElementById('choice2')
    // choice3 = document.getElementById('choice3')
    // document.body.appendChild(choice1)


// choc chip button selected
chocChip = document.getElementById('chocChipBtn')
chocChip.addEventListener('click', ()=>{
        const chocChipIngredients = dessertItems[1].ingredients
        var list = document.getElementById('list')
        for (const ingredient in chocChipIngredients) {
            var listItem = document.createElement('li')
            listItem.classList.add('ingredient-list-item', 'text-capitalize', 'list-unstyled')
            list.appendChild(listItem)
            listItem.innerText = `${ingredient}: ${chocChipIngredients[ingredient]}`
            console.log(`${ingredient}: ${chocChipIngredients[ingredient]}`)
            // choc chip questions
            var chocChipCookieQuestions = [
                'For every 12 chocolate chip cookies you need a whole egg. Morty wants 3 dozen chocolate chip cookies. How many eggs do you need?',
                'For every 12 chocolate chip cookies you 1/2 a cup of white sugar. Susie wants 24 chocolate chip cookies. How many cups of sugar do you need?',
                'For every 12 chocolate chip cookies you need 4 ounces of semi-sweet chocolate chips. Anthony wants 4 dozen chocolate chip cookies. How many cups of chocolate chips do you need?',
                'For every 12 chocolate chip cookies you need a teaspoon of salt. Morty wants 2 dozen chocolate chip cookies. How many teaspoons of salt do you need?'
                    // {
                    //     id: 5,
                    //     question: 'For every 12 chocolate chip cookies you need a whole egg. Morty wants 3 dozen chocolate chip cookies. How many eggs do you need?',
                    //     solution: 3,
                    // },
                    // {
                    //     id: 6,
                    //     question: 'For every 12 chocolate chip cookies you 1/2 a cup of white sugar. Susie wants 24 chocolate chip cookies. How many cups of sugar do you need?',
                    //     solution: 1,
                    // },
                    // {
                    //     id: 7,
                    //     question: 'For every 12 chocolate chip cookies you need 4 ounces of semi-sweet chocolate chips. Anthony wants 4 dozen chocolate chip cookies. How many cups of chocolate chips do you need?',
                    //     solution: 2,
                    // },
                    // {
                    //     id: 8,
                    //     question: 'For every 12 chocolate chip cookies you need a teaspoon of salt. Morty wants 2 dozen chocolate chip cookies. How many teaspoons of salt do you need?',
                    //     solution: 3,
                    // },
            ]
            // choc chip answers
            var chocChipCookieAnswers = [3, 1, 2, 3]
            // grab random choc chip cookie question
            var randomIndex = Math.floor(Math.random() * chocChipCookieQuestions.length)
            var randomChocChipCookieQuestion = chocChipCookieQuestions[randomIndex]
             // display random choc chip cookie question
            question = document.getElementById('question')
            question.innerText = `${randomChocChipCookieQuestion}`
            
            // console.log(chocChipCookieQuestions)
        }
        })

cupcake = document.getElementById('cupcakeBtn')
cupcake.addEventListener('click', ()=>{
        const cupcakeIngredients = dessertItems[2].ingredients
        // console.log(brownieIngredients)
        var list = document.getElementById('list')
        for (const ingredient in cupcakeIngredients) {
            var listItem = document.createElement('li')
            listItem.classList.add('ingredient-list-item', 'text-capitalize', 'list-unstyled')
            
            list.appendChild(listItem)
            listItem.innerText = `${ingredient}: ${cupcakeIngredients[ingredient]}`
            console.log(`${ingredient}: ${cupcakeIngredients[ingredient]}`)
            // cupcake questions
            var cupcakesQuestions = [
                'For every 24 cupcakes you need 4 whole eggs. Keisha wants 3 dozen cupcakes, how many eggs do you need?',
                'For every 24 cupcakes you need 155 grams of white sugar. Kim wants 24 cupcakes, how many cups of white sugar do you need?',
                'For every 24 cupcakes you need 1 cup of unsalted butter for the frosting. Janae wants a dozen cupcakes, how many cups of unsalted butter do you need?',
                'For every 24 cupcakes you need 460 grams of powdered sugar for the frosting. Taylor wants a dozen cupcakes, how many cups of powdered sugar do you need?'
                    // {
                    //     id: 9,
                    //     question: 'For every 24 cupcakes you need 4 whole eggs. Keisha wants 3 dozen cupcakes, how many eggs do you need?',
                    //     solution: 5,
                    // },
                    // {
                    //     id: 10,
                    //     question: 'For every 24 cupcakes you need 155 grams of white sugar. Kim wants 24 cupcakes, how many cups of white sugar do you need?',
                    //     solution: 3/4,
                    // },
                    // {
                    //     id: 11,
                    //     question: 'For every 24 cupcakes you need 1 cup of unsalted butter for the frosting. Janae wants a dozen cupcakes, how many cups of unsalted butter do you need?',
                    //     solution: 1/2,
                    // },
                    // {
                    //     id: 12,
                    //     question: 'For every 24 cupcakes you need 460 grams of powdered sugar for the frosting. Taylor wants a dozen cupcakes, how many cups of powdered sugar do you need?',
                    //     solution: 2,
                    // }
            ]
            // cupcakes answers
            var cupcakesAnswers = [5, 3/4, 1/2, 2]
            // grab random cupcakes question
            var randomIndex = Math.floor(Math.random() * cupcakesQuestions.length)
            var randomCupcakesQuestion = cupcakesQuestions[randomIndex]
             // display random cupcakes question
            question = document.getElementById('question')
            question.innerText = `${randomCupcakesQuestion}`
            
            // console.log(cupcakesQuestions)
        }
        })

pancake = document.getElementById('pancakesBtn')
pancake.addEventListener('click', ()=>{
        const pancakeIngredients = dessertItems[3].ingredients
        var list = document.getElementById('list')
        for (const ingredient in pancakeIngredients) {
            var listItem = document.createElement('li')
            listItem.classList.add('ingredient-list-item', 'text-capitalize', 'list-unstyled')
            
            list.appendChild(listItem)
            listItem.innerText = `${ingredient}: ${pancakeIngredients[ingredient]}`
            console.log(`${ingredient}: ${pancakeIngredients[ingredient]}`)
            var pancakesQuestions = [
                'For every 12 pancakes you need 186.5 grams of all purpose flour. Dhon wants a dozen pancakes, how many cups of all purpose flour do you need?',
                'For every 12 pancakes you need 1 cup of milk. Maggie wants a 4 dozen pancakes, how many cups of milk do you need?',
                'For every 12 pancakes you need 56.75 grams of melted butter. Qua wants a dozen pancakes, how many cups of melted butter do you need?',
                'For every 12 pancakes you need 2 teaspoons of baking powder. Cydney wants 6 pancakes, how many teaspoons of baking powder do you need?'
                    // {
                    //     id: 13,
                    //     question: 'For every 12 pancakes you need 186.5 grams of all purpose flour. Dhon wants a dozen pancakes, how many cups of all purpose flour do you need?',
                    //     solution: 1.5
                    // },
                    // {
                    //     id: 14,
                    //     question: 'For every 12 pancakes you need 1 cup of milk. Maggie wants a 4 dozen pancakes, how many cups of milk do you need?',
                    //     solution: 4
                    // },
                    // {
                    //     id: 15,
                    //     question: 'For every 12 pancakes you need 56.75 grams of melted butter. Qua wants a dozen pancakes, how many cups of melted butter do you need?',
                    //     solution: 1/4
                    // },
                    // {
                    //     id: 16,
                    //     question: 'For every 12 pancakes you need 2 teaspoons of baking powder. Cydney wants 6 pancakes, how many teaspoons of baking powder do you need?',
                    //     solution: 1
                    // } 
                ]
                // pancakes answers
                var pancakesAnswers = [1.5, 4, 1/4, 1]
                // grab random pancakes question
                var randomIndex = Math.floor(Math.random() * pancakesQuestions.length)
                var randomPancakesQuestion = pancakesQuestions[randomIndex]
                 // display random cupcakes question
                question = document.getElementById('question')
                question.innerText = `${randomPancakesQuestion}`
                
                console.log(pancakesQuestions)
        }
        })

    
    


    // startGame=()=>{
    //     //display question and dessert buttons
    // }
correct = 'Great Job!'
incorrect = "uh oh. That's not right. Try again."
