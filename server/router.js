const controller = require('./controller')
const Router= require('express')
const router= Router();



router.get('/entries', controller.getAll)
router.post('/entries',controller.postEntry)
router.put('/entries/fav/:id',controller.updateFav)



module.exports=router;