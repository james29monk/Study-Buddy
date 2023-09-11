const game = document.getElementById('game')
const scoreShow = document.getElementById('score')

const fifthGrader = [
    {
        genre: 'Geography',
        questions: [
            {
                question:'The state of Hawaii is surrounded by what ocean?',
                answers:['Pacific', 'Atlantic', 'Indian','Artic' ],
                correct:'Pacific',
                level: 'easy',
            },
            {
                question:'What is the name of the lines that run east to west across a map?',
                answers:['Latitude', 'Longitude', "Langitude",'Lungitude' ],
                correct:'Latitude',
                level: 'medium',
            },
            {
                question:'What is the name of the longest river in the world?',
                answers:['Nile', 'Amazon', 'Mississippi','Yangtze' ],
                correct:'Nile',
                level: 'hard',
            },
            {
                question:'Which country is known as the Land of the Rising Sun?',
                answers:['Japan', 'China', 'South Korea', 'Vietnam' ],
                correct:'Japan',
                level: 'extreme',
            },

        ],
    },
    {
        genre: 'Science',
        questions: [
            {
                question:'What is the process by which plants make their own food using sunlight?',
                answers:['Photosynthesis', 'Growth', 'Solar Power', 'Plant Breathing' ],
                correct:'Photosynthesis',
                level: 'easy',
            },
            {
                question:'Which planet is closest to the sun?',
                answers:['Mars', 'Mercury', 'Jupiter','Venus' ],
                correct:'Mercury',
                level: 'medium',
            },
            {
                question:'Which gas do plants absorb from the air to make their food during photosynthesis?',
                answers:['Carbon dioxide','Oxygen','Nitrogen', 'Hydrogen'],
                correct:'Carbon dioxide',
                level: 'hard',
            },
            {
                question:'What is the largest planet in our solar system?',
                answers:['Mars','Earth','Saturn', 'Jupiter'],
                correct:'Jupiter',
                level: 'extreme',
            },

        ],
    },
    {
        genre: 'English & Language Arts',
        questions: [
            {
                question:'Which part of speech is used to describe a noun or pronoun?',
                answers:['Adjective', 'Verb', 'Noun', 'Conjunction'],
                correct:'Adjective',
                level: 'easy',
            },
            {
                question:"'Peter Piper picked a peck of pickled peppers' is an example of what?",
                answers:['Metaphor', 'Alliteration','Hyperbole', 'Simile' ],
                correct:'Alliteration',
                level: 'medium',
            },
            {
                question:"Name the figurative language used in this phrase: 'Brave as a lion'",
                answers:['Hyperbole', 'Simile',"Allusion",'Alliteration' ],
                correct:'Simile',
                level: 'hard',
            },
            {
                question:"Identify the types of irony in the following sentence: 'The fire station burned down.'",
                answers:['Situational', 'Dramatic','Verbal','Satirical'],
                correct:'Situational',
                level: 'extreme',
            },
            

        ],
        
    },
    {
        genre: 'Social Studies',
        questions: [
            {
                question:'In what kind of government are people allowed to vote?',
                answers:['Anarchy', 'Democracy', 'Republican','Socialism'],
                correct:'Democracy',
                level: 'easy',
            },
            {
                question:'Who is known as the Father of the Constitution?',
                answers:['Theodore Roosevelt', 'James Madison','Thomas Jefferson','Benjamin Franklin' ],
                correct:'James Madison',
                level: 'medium',
            },
            {
                question:'What was the ancient Egyptian writing system called?',
                answers:['Scripture', 'Hieroglyphics','Italics,','Papyri' ],
                correct:'Hieroglyphics',
                level: 'hard',
            },
            {
                question:"What is the primary role of the United Nations?",
                answers:['Economic Regulation', 'Law Enforcement','International Diplomacy','Promotion of culture' ],
                correct:'International Diplomacy',
                level: 'extreme',
            },

        ],
    },
    {
        genre: 'Math',
        questions: [
            {
                question:'How many sides are on an octagon?',
                answers:[6, 8, 4, 10],
                correct: 8,
                level: 'easy',
            },
            {
                question:'If an ice cream shop sells 102 ice cream cones a day at 3$ each, how much money will they make in 5 days?',
                answers:[1530, 1500, 1370, 1503 ],
                correct: 1503,
                level: 'medium',
            },
            {
                question:'If a rectangle has a length of 5 inches and a width of 8 inches, what is its area in square inches?',
                answers:[30, 24, 46, 40 ],
                correct: 40,
                level: 'hard',
            },
            {
                question:'How many hours and minutes are in 555 minutes',
                answers:['9 hours and 15 minutes', "9 hours and 20 minutes", "10 hours and 10 minutes",'9 hours and 10 minutes'],
                correct:'9 hours and 15 minutes',
                level: 'extreme',
            },

        ],
    },
    {
        genre: 'History',
        questions: [
            {
                question:'Which president is on the $5 bill?',
                answers:['James Madison', 'Abraham Lincoln', 'Theodore Roosevelt','Ulysses S. Grant'],
                correct:'Abraham Lincoln',
                level: 'easy',
            },
            {
                question:'Which country gifted the U.S. The Statue of Liberty',
                answers:['Italy', 'France','Britain','Spain' ],
                correct:'France',
                level: 'medium',
            },
            {
                question:'In what year did Abraham Lincoln issue the Emancipation Proclamation?',
                answers:[1823, 1853, 1833, 1860 ],
                correct: 1853,
                level: 'hard',
            },
            {
                question:'In what year did Abraham Lincoln issue the Emancipation Proclamation?',
                answers:[1823, 1853, 1833, 1860 ],
                correct: 1853,
                level: 'extreme',
            },

        ],
    },
    {
        genre: 'Tricky Questions',
        questions: [
            {
                question:'If Dre has 2 dogs and Zach has 3 cats, how many more cats does Zach have than Dre?',
                answers:[2, 3, 5, 1],
                correct: 3,
                level: 'easy',
            },
            {
                question:'If Tony is five feet tall and John is three and a half feet tall, how many inches taller is Tony than John?',
                answers:[ 16, 18, 14, 15 ],
                correct: 18,
                level: 'medium',
            },
            {
                question:'Peanuts are not nuts; they are ___',
                answers:['Tubers', 'Legumes', 'Grains','Drupes' ],
                correct:'Legumes',
                level: 'hard',
            },
            {
                question:'What is the only planet in our solar system that rotates clockwise?',
                answers:['Venus', 'Earth', 'Jupiter','Mars' ],
                correct:'Venus',
                level: 'extreme',
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
       if(question.level === 'extreme'){
        card.innerHTML = 400
       }

       card.setAttribute('data-question', question.question)
       card.setAttribute('answer-1', question.answers[0])
       card.setAttribute('answer-2', question.answers[1])
       card.setAttribute('answer-3', question.answers[2])
       card.setAttribute('answer-4', question.answers[3])


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
    const fourthButton =  document.createElement('button')



    firstButton.classList.add('first-button')
    secButton.classList.add('second-button')
    thirdButton.classList.add('third-button')
    fourthButton.classList.add('fourth-button')



    firstButton.innerHTML = this.getAttribute('answer-1')
    secButton.innerHTML = this.getAttribute('answer-2')
    thirdButton.innerHTML = this.getAttribute('answer-3')
    fourthButton.innerHTML = this.getAttribute('answer-4')


    firstButton.addEventListener('click', Result)
    secButton.addEventListener('click', Result)
    thirdButton.addEventListener('click', Result)
    fourthButton.addEventListener('click', Result)



    this.append(textDisplay, firstButton, secButton, thirdButton,fourthButton)

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