const express = require('express');
const app = express();
const PORT = 3000;
const path = require('node:path');

const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/', indexRouter);
app.use('/new', newRouter);

app.post('/new', (req, res) => {
    console.log(req.body);
})





app.listen(PORT, () => {
    console.log('App listening to port ' + PORT);
})