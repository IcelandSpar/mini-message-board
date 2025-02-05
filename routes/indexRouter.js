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
        aded: new Date(),
    }
];

indexRouter.get('/', (req, res) => res.send('index router'));

module.exports = indexRouter;

