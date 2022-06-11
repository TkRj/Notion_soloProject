const controllerEntry = require('./controllers/controller.entry');
const controllerLogin = require('./controllers/controller.login');
const Router= require('express')
const router= Router();


router.post('/signup', controllerLogin.signup)

router.get('/entries', controllerEntry.getAll)
router.post('/entries',controllerEntry.postEntry)
router.put('/entries/fav/:id',controllerEntry.updateFav)
router.delete('/entries/fav/:id',controllerEntry.deleteEntry)



module.exports=router;