var express = require('express');
var router = express.Router();
 
var hotelController = require('../controllers/hotels.js');
 
router.get('/', hotelController.getHotels);
router.get('/:id', hotelController.getHotel);
router.post('/', hotelController.createHotel);
router.put('/:id', hotelController.updateHotel);
router.delete('/:id', hotelController.deleteHotel);
 
module.exports = router;