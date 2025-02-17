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

const getIndexRoute = (req, res) => {
    res.render('index', {
        title: 'Mini Messageboard',
        messages: messages})
};

const getMessageDetails = (req, res) => {
    res.render('messageDetails', {messages: messages, index: parseInt(req.params.index)})
};




const getNewMessageForm = (req, res) => {
    res.render('form', {title: 'New Message Form'});
};

const postNewMessage = (req, res) => {
    messages.push({
        user: req.body.authorName,
        text: req.body.message,
        added: formatInTimeZone(new Date(), 'US/Central', 'MM/dd/yyyy h:mm:ss a'),
    })

    res.redirect('/');

};


module.exports = {
    getIndexRoute,
    getMessageDetails,
    postNewMessage,
    getNewMessageForm,
}