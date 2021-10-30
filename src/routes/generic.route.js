const { Router } = require('express');
const router = Router();

const { renderGeneric } = require('../controller/generic.controller')

router.get('/generic',renderGeneric);
module.exports = router;