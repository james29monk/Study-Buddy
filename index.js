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





app.get('/', (req, res) => {
    res.render('register')
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
            password: hashedPassword, // Store the hashed password
            repassword: hashedPassword, // Store the hashed password
        });



        return res.render('register', { success: 'Account created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).render('register', { error: 'Failed to create user' });
    }
});




app.listen(3000, () => {
    console.log('server is running 3000')
})