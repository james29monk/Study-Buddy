const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const winston = require("winston");
const bcrypt = require('bcrypt')
const { User, Categories, scores, games, questions, flashcards } = require('./models')
app.use(express.json())
app.use(express.static(__dirname + '/styles'));
const path = require('path')
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
const port = 3000



const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [

        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});
//POST MAN ROUTE FOR USER DATABASE
app.get('/users',async (req,res) => {
    const allUsers = await User.findAll()
    res.send(allUsers)
});
//POST MAN ROUTE FOR ALL 
app.get('/questions',async(req,res)=>{
    const allQuest = await questions.findAll()
res.send(allQuest)
});

app.get('/home',async (req, res) => {

 const question = await questions.findOne({where:{id:1}})
    res.render('home', {questions: question})
})

app.get('/game', (req, res) => {
    res.render('game')
})

app.get('/quiz', async (req, res) => {
    let questionsList = []
    const allQuestions = await questions.findAll()
    console.log(allQuestions)
    allQuestions.forEach(q=>{
        questionsList.push(q.questions)
    })
    console.log(questionsList)
    res.render('quiz', {qList: questionsList})
})


app.get('/register', (req, res) => {
    logger.info({
        level: 'info',
        method: req.method,
        body: req.body,
        url: req.url,
        parameters: req.params,
        timestamp: new Date().toLocaleString()
    })
    res.render('register')
})


app.get('/login', (req, res) => {
    logger.info({
        level: 'info',
        method: req.method,
        body: req.body,
        url: req.url,
        parameters: req.params,
        timestamp: new Date().toLocaleString()
    })
    res.render('login')
})

// Function to check if a string contains a URL
function containsURL(str) {
    const urlRegex = /\bhttps?:\/\/\S+\b/;
    return urlRegex.test(str);
}
function containsSpecialCharacter(str) {
    const specialCharacterRegex = /[@$!%*?&]/;
    return specialCharacterRegex.test(str);
}

app.post('/register', async (req, res) => {
    const { firstName, lastName, email, password, repassword } = req.body;
    
// Check if firstName and lastName contain only letters
    const nameRegex = /^[A-Za-z]+$/; // This regex allows only letters (both upper and lower case)
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
     // Validate email format and ending
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|net|gov|edu)$/;

     // Check if password contains a URL
     if (containsURL(password)) {
        return res.status(400).render('register', { failedMessage: 'Password should not contain URLs' });
    }
     // Check if password contains a special character
     if (!containsSpecialCharacter(password)) {
        const specialCharacters = '@$!%*?&'; // List of possible special characters
        return res.status(400).render('register', { failedMessage: `Password must include at least one special character (${specialCharacters}).` });
    }

     if (!emailRegex.test(email)) {
         return res.status(400).render('register', { failedMessage: 'Invalid email format or ending. Email must end with .com, .net, .gov, or .edu.' });
     }

    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
         return res.status(400).render('register', { failedMessage: 'First name and last name must contain only letters' });
    }

     if (!passwordRegex.test(password)) {
        return res.status(400).render('register', { failedMessage: 'Password must include at least one uppercase letter, one lowercase letter, one special character, and one number.' });
    }

// Password must match repassword
    if (password !== repassword) {
        return res.status(400).render('register', {failedMessage: 'Password do not match'} );
    }


//Email existing
    const existingEmail = await User.findOne({ where: { email: email } });

  if (existingEmail) {
    return res.status(400).send('Email already registered');
    
  }
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        await User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
            repassword: hashedPassword,
        });
        logger.info({
            level: 'info',
            method: req.method,
            body: req.body,
            url: req.url,
            parameters: req.params,
            timestamp: new Date().toLocaleString(),
          });

        res.render('register', { successMessage: 'Account created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).render('register', { error: 'Failed to create user' });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).render('login',{errors:'Email and password are required'});
  }

    try {
        const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(401).render('login',{errors:'Invalid email or password'});
    }
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {

      return res.render('home');
    } else {
      // Passwords don't match, authentication failed
      return res.status(401).render('login',{errors:'Invalid email or password'});
    }
  } catch (error) {
    console.error('Error while logging in:', error);
    res.status(500).render('login',{errors:'Internal server error'});
  }
});

app.get('/flashcards', async (req,res)=>{
   
     const flashcardInfo = await flashcards.findOne({
        where: {id: 7}
    })

    res.render('flashcards', {questions: 'flashcardInfo'})
})
app.post('/flashcards', async (req,res)=>{
    const user_id = await User.findOne({where:{id:1}})
    const {question, answer} = req.body;
    const cardInfo = await flashcards.create({
        questions: question,
        answers: answer,
        user_id: 1

    })
    console.log(cardInfo.id)

})




app.listen(port, () => {
    console.log('server is running 3000')
})