const { Router } = require('express');
const router = Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.getMessages);
router.get('/messages/:idx', indexController.getMessage);

module.exports = router;
