require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const path = require('node:path');


const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serving static assets
const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/', indexRouter);
app.use('/new', newRouter);







app.listen(PORT, () => {
    console.log('App listening to port ' + PORT);
})