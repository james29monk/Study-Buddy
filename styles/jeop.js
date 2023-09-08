const game = document.getElementById('game')
const scoreShow = document.getElementById('score')

const fifthGrader = [
    {
        genre: 'Geography',
        questions: [
            {
                question:'The state of Hawaii is surrounded by what ocean?',
                answers:['Pacific', 'Atlantic', 'Indian' ],
                correct:'Pacific',
                level: 'easy',
            },
            {
                question:'What is the name of the lines that run east to west across a map?',
                answers:['Latitude', 'Longitude', "Langitude" ],
                correct:'Latitude',
                level: 'medium',
            },
            {
                question:'What is the name of the longest river in the world?',
                answers:['Nile', 'Amazon', 'Mississippi' ],
                correct:'Nile',
                level: 'hard',
            },

        ],
    },
    {
        genre: 'Science',
        questions: [
            {
                question:'What creates sound?',
                answers:['Vibrations', 'Noise', 'Pressure' ],
                correct:'Vibrations',
                level: 'easy',
            },
            {
                question:'Which planet is closest to the sun?',
                answers:['Mars', 'Mercury', 'Earth' ],
                correct:'Mercury',
                level: 'medium',
            },
            {
                question:'Color, density, volume, and mass are properties of?',
                answers:['Water','Matter', 'Fire'],
                correct:'Matter',
                level: 'hard',
            },

        ],
    },
    {
        genre: 'English & Language Arts',
        questions: [
            {
                question:'A story about something that is made up is part of what genre',
                answers:['Non-fiction', 'Fiction', 'Biography'],
                correct:'Fiction',
                level: 'easy',
            },
            {
                question:"'Peter Piper picked a peck of pickled peppers' is an example of what?",
                answers:['Metaphor', 'Alliteration','Hyperbole' ],
                correct:'Alliteration',
                level: 'medium',
            },
            {
                question:"Name the figurative language used in this phrase: 'Brave as a lion'",
                answers:['Hyperbole', 'Simile',"Allusion" ],
                correct:'Simile',
                level: 'hard',
            },

        ],
        
    },
    {
        genre: 'Social Studies',
        questions: [
            {
                question:'In what kind of government are people allowed to vote?',
                answers:['Anarchy', 'Democracy', 'Republican'],
                correct:'Democracy',
                level: 'easy',
            },
            {
                question:'Who is known as the Father of the Constitution?',
                answers:['Peter Parker', 'James Madison','Thomas Jefferson' ],
                correct:'James Madison',
                level: 'medium',
            },
            {
                question:'What was the ancient Egyptian writing system called?',
                answers:['Scripture', 'Hieroglyphics','Italics' ],
                correct:'Hieroglyphics',
                level: 'hard',
            },

        ],
    },
    {
        genre: 'Math',
        questions: [
            {
                question:'How many sides are on an octagon?',
                answers:[6, 8, 4],
                correct: 8,
                level: 'easy',
            },
            {
                question:'If an ice cream shop sells 102 ice cream cones a day at 3$ each, how much money will they make in 5 days?',
                answers:[1503, 1200, 1370 ],
                correct: 1503,
                level: 'medium',
            },
            {
                question:'How many hours and minutes are in 555 minutes',
                answers:['9 hours and 15 minutes', "8 hours and 20 minutes", "10 hours and 10 minutes" ],
                correct:'9 hours and 15 minutes',
                level: 'hard',
            },

        ],
    },
    {
        genre: 'History',
        questions: [
            {
                question:'Which president is on the $5 bill?',
                answers:['James Madison', 'Abraham Lincoln', 'Theodore Roosevelt'],
                correct:'Abraham Lincoln',
                level: 'easy',
            },
            {
                question:'Which country gifted the U.S. The Statue of Liberty',
                answers:['Italy', 'France','Britain' ],
                correct:'France',
                level: 'medium',
            },
            {
                question:'In what year did Abraham Lincoln issue the Emancipation Proclamation?',
                answers:[1823, 1853, 1833 ],
                correct: 1853,
                level: 'hard',
            },

        ],
    },
    {
        genre: 'Tricky Questions',
        questions: [
            {
                question:'If Dre has 2 dogs and Zach has 3 cats, how many more cats does Zach have than Dre?',
                answers:[2, 3, 5],
                correct: 3,
                level: 'easy',
            },
            {
                question:'If Tony is five feet tall and John is three and a half feet tall, how many inches taller is Tony than John?',
                answers:[ 16, 18, 14 ],
                correct: 18,
                level: 'medium',
            },
            {
                question:'Peanuts are not nuts; they are ___',
                answers:['Nuts', 'Legumes', 'Peas' ],
                correct:'Legumes',
                level: 'hard',
            },

        ],
    }
]

let score = 0



function addCategory(category) {
    const column = document.createElement('div')
    column.classList.add('category-column')

    const categoryTitle = document.createElement('div')
    categoryTitle.classList.add('category-title')
    categoryTitle.innerText = category.genre

    column.appendChild(categoryTitle)
    game.append(column)

    category.questions.forEach(question => {
       const card = document.createElement('div')
       card.classList.add('card')
       column.append(card)

       if(question.level === 'easy'){
        card.innerHTML = 100
       }
       if(question.level === 'medium'){
        card.innerHTML = 200
       }
       if(question.level === 'hard'){
        card.innerHTML = 300
       }

       card.setAttribute('data-question', question.question)
       card.setAttribute('answer-1', question.answers[0])
       card.setAttribute('answer-2', question.answers[1])
       card.setAttribute('answer-3', question.answers[2])

       card.setAttribute('data-correct', question.correct)
       card.setAttribute('data-value', card.getInnerHTML())

       card.addEventListener('click', cardFlip)
    })
}

fifthGrader.forEach(category => addCategory(category))

function cardFlip() {
    console.log("function called")
    this.innerHTML = ""
    this.style.fontSize = "16px"
    this.style.lineHeight = "30px"
    this.style.color = "black"
    const textDisplay = document.createElement('div')
    textDisplay.classList.add('card-text')
    textDisplay.innerHTML = this.getAttribute('data-question')
    const firstButton = document.createElement('button')
    const secButton =  document.createElement('button')
    const thirdButton =  document.createElement('button')


    firstButton.classList.add('first-button')
    secButton.classList.add('second-button')
    thirdButton.classList.add('third-button')


    firstButton.innerHTML = this.getAttribute('answer-1')
    secButton.innerHTML = this.getAttribute('answer-2')
    thirdButton.innerHTML = this.getAttribute('answer-3')

    firstButton.addEventListener('click', Result)
    secButton.addEventListener('click', Result)
    thirdButton.addEventListener('click', Result)


    this.append(textDisplay, firstButton, secButton, thirdButton)

    const allCards = Array.from (document.querySelectorAll('.card'))
        allCards.forEach(card => card.removeEventListener('click', cardFlip))

}


function Result() {
    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.addEventListener('click', cardFlip))
    const answerChoice = this.parentElement

    if(answerChoice.getAttribute('data-correct') == this.innerHTML) {
    score = score + parseInt(answerChoice.getAttribute('data-value'))
    scoreShow.innerHTML = score
    answerChoice.classList.add('correct-answer')
    setTimeout(() => {
        while (answerChoice.firstChild) {
            answerChoice.removeChild(answerChoice.lastChild)
        }
        answerChoice.innerHTML = answerChoice.getAttribute('data-value')
    }, 100)
 } else {
    answerChoice.classList.add('wrong-answer')
    setTimeout(() => {
        while (answerChoice.firstChild) {
            answerChoice.removeChild(answerChoice.lastChild)
        }
        answerChoice.innerHTML = 0
    }, 100)
 }
 answerChoice.removeEventListener('click', cardFlip)
}