const express = require('express');
const app = express();
const PORT = 3000;
const indexRouter = require('./routes/indexRouter');

app.use('/', indexRouter);




app.listen(PORT, () => {
    console.log('App listening to port ' + PORT);
})