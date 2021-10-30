const { Router } = require('express');
const router = Router();

const { renderElements} = require('../controller/elements.controller')

router.get('/elements',renderElements);
module.exports = router;