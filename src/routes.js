const express = require("express")
const router = express.Router()
const auction_controller=require('./controllers/Auction_controller')
const user_controller=require('./controllers/User_controller')

router.post('/create',auction_controller.createAuction);

router.post('/createuser',user_controller.createUser);

router.post('/createuser',user_controller.loginUser);



module.exports = router;