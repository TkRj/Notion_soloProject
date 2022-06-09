const controller = require('./controller')
const Router= require('express')
const router= Router();



router.get('/entries', controller.getAll)



module.exports=router;