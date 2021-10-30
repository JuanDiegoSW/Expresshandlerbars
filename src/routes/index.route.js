const { Router } = require('express');
const router = Router();

const {renderIndex} = require('../controller/index.controller')

router.get('/',renderIndex);


module.exports = router;