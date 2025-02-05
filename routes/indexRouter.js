const { Router } = require('express');
const indexRouter = Router();
const { format } = require('date-fns');

const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: format(new Date(), 'MM/dd/yyyy k:mm:ss a'),
    },
    {
        text: 'Hello World',
        user: 'Charles',
        added: format(new Date(), 'MM/dd/yyyy k:mm:ss a'),
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
        added: format(new Date(), 'MM/dd/yyyy k:mm:ss a'),
    })

    res.redirect('/');

})



module.exports = indexRouter;

