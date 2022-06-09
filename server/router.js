const controller = require('./controller')
const Router= require('express')
const router= Router();



router.get('/entries', controller.getAll)
router.post('/entries',controller.postEntry)



module.exports=router;