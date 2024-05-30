const express = require('express');

const collection = require('./config');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('login');
});

app.post('/signup', async (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }
    const userData = await collection.insertMany(data);
    console.log(userData);
    res.render('signup');
});

app.post('/login', async (req, res) => {
    const user = await collection.findOne({ name: req.body.name, password: req.body.password });
    if (user) {
        res.render('home');
    } else {
        res.render("wrong");
    }
});

const PORT = 8005;
app.listen(PORT, () => {
    console.log("Server Started! on port:", PORT);
});
