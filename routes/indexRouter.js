const { Router } = require('express');
const indexRouter = Router();
const { formatInTimeZone } = require('date-fns-tz');
const { getIndexRoute, getMessageDetails, postNewMessage } = require('../controllers/messageBoardController');






indexRouter.get('/', getIndexRoute);

indexRouter.post('/messageDetails/:user/:index', getMessageDetails);

indexRouter.post('/new', postNewMessage);



module.exports = indexRouter;

