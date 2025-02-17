const { Router } = require('express');
const newRouter = Router();
const { getNewMessageForm } = require('../controllers/messageBoardController');


newRouter.get('/', getNewMessageForm);




module.exports = newRouter;