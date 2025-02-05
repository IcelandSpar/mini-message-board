const { Router } = require('express');
const indexRouter = Router();

const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: new Date(),
    },
    {
        text: 'Hello World',
        user: 'Charles',
        added: new Date(),
    }
];

indexRouter.get('/', (req, res) => {
    res.render('index', {
        title: 'Mini Messageboard',
        messages: messages})
});

indexRouter.post('/messageDetails', (req, res) => {
    res.render('messageDetails', {messages: messages, index: parseInt(req.body.index)})
})

indexRouter.post('/new', (req, res) => {
    messages.push({
        user: req.body.authorName,
        text: req.body.message,
        added: new Date(),
    })

    res.redirect('/');

})



module.exports = indexRouter;

