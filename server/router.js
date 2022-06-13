const Entry = require('./controllers/controller.entry');
const Login = require('./controllers/controller.login');
const Router= require('express')
const router= Router();


router.post('/signup', Login.signup)
router.post('/checkEmail', Login.checkEmail)
router.post('/checkLogin', Login.checkLogin)

router.get('/entries', Entry.getAll)
router.post('/entries',Entry.postEntry)
router.put('/entries/fav/:id',Entry.updateFav)
router.delete('/entries/fav/:id',Entry.deleteEntry)



module.exports=router;