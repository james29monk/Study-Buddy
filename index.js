const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const winston = require("winston");
const bcrypt = require('bcrypt')
const { User } = require('./models')
app.use(express.json())
app.use(express.static(__dirname + '/styles'));
const path = require('path')
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
const port = 3002


const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [

      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });


  app.get('/', (req, res) => {
    logger.info({
        level: 'info',
        method:req.method,
        body:req.body,
        url:req.url,
        parameters:req.params,
        timestamp:new Date().toLocaleString()
    })
    res.render('register')
})

app.get('/login', (req, res) => {
    logger.info({
        level: 'info',
        method:req.method,
        body:req.body,
        url:req.url,
        parameters:req.params,
        timestamp:new Date().toLocaleString()
    })
    res.render('login')
  })

app.post('/register', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
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
    return res.status(400).send('Email and password are required');
  }

  try {
    // Find a user in the database by their email
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(401).send('Invalid email or password');
    }

    // Compare the provided password with the hashed password from the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      // Passwords match, so authentication is successful

      return res.render('home');
    } else {
      // Passwords don't match, authentication failed
      return res.status(401).send('Invalid email or password');
    }
  } catch (error) {
    console.error('Error while logging in:', error);
    res.status(500).send('Internal server error');
  }
});







app.listen(port, () => {
    console.log('server is running 3001')
})