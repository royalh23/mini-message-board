const { Router } = require('express');
const router = Router();
const formController = require('../controllers/formController');

router.get('/', formController.getForm);
router.post('/', formController.postForm);

module.exports = router;
