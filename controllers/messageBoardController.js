require('dotenv').config();
const { formatInTimeZone } = require('date-fns-tz');
const { getMessageBoard, insertPost } = require('../db/queries');

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

const getIndexRoute = async (req, res) => {
    const messageBoardContent = await getMessageBoard();
    res.render('index', {
        title: 'Mini Messageboard',
        messages: messageBoardContent})
};

const getMessageDetails = async (req, res) => {
    const messageBoardContent = await getMessageBoard();
    res.render('messageDetails', {messages: messageBoardContent, index: parseInt(req.params.index)})
};




const getNewMessageForm = (req, res) => {
    res.render('form', {title: 'New Message Form'});
};

const postNewMessage = async (req, res) => {
    const postDateAndTimeFormatted = formatInTimeZone(new Date(), 'US/Central', 'MM/dd/yyyy h:mm:ss a');
    await insertPost([req.body.authorName, req.body.message, postDateAndTimeFormatted]);
    res.redirect('/');

};


module.exports = {
    getIndexRoute,
    getMessageDetails,
    postNewMessage,
    getNewMessageForm,
}