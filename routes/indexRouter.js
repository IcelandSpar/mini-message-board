const { Router } = require('express');
const indexRouter = Router();
const { formatInTimeZone } = require('date-fns-tz');


const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: formatInTimeZone(new Date(), 'US/Central', 'MM/dd/yyyy h:mm:ss a'),
    },
    {
        text: 'Hello World',
        user: 'Charles',
        added: formatInTimeZone(new Date(), 'US/Central', 'MM/dd/yyyy h:mm:ss a'),
    }
];



indexRouter.get('/', (req, res) => {
    res.render('index', {
        title: 'Mini Messageboard',
        messages: messages})
});

indexRouter.post('/messageDetails/:user/:index', (req, res) => {
    res.render('messageDetails', {messages: messages, index: parseInt(req.params.index)})
})

indexRouter.post('/new', (req, res) => {
    messages.push({
        user: req.body.authorName,
        text: req.body.message,
        added: formatInTimeZone(new Date(), 'US/Central', 'MM/dd/yyyy h:mm:ss a'),
    })

    res.redirect('/');

})



module.exports = indexRouter;

