var Hotels = require('../models/hotels');

function makeResponse(err, data, notFoundMessage = 'No se pudo completar la operación') {
    const status = (err && 500) || (data && 200) || 404;
    return {
        ...err && {response: {message: 'Error en el servidor', err} },
        ...data && {response: data} || (!err && !data && {response: {message: notFoundMessage} }),
        status
    }
}

function getHotels(req, res){
    const { name, stars } = req.query;

    const findOptions = { 
        ...name && { name: new RegExp(name, 'i') },
        ...stars && { stars: JSON.parse(stars) }
    }
    Hotels.find(findOptions).exec((err, hotels) => {
        const {response, status} = makeResponse(err, hotels);
        return res.status(status).send(response);
    });
}

function getHotel(req, res) {
    Hotels.findOne({_id: req.params.id}).exec((err, hotels) => {
        const {response, status} = makeResponse(err, hotels);
        return res.status(status).send(response);
    });
}

function createHotel(req, res){

    var params = req.body;
 
    var hotels = new Hotels(params);

    hotels.save((err, hotelStored) => {
        const {response, status} = makeResponse(err, hotelStored);
        return res.status(status).send(response);
    });
}

function updateHotel(req, res){
    var hotelId = req.params.id;

    var updateData = req.body;

    Hotels.findByIdAndUpdate(hotelId, updateData, { new: true }, (err, hotelUpdated) => {
        const {response, status} = makeResponse(err, hotelUpdated);
        return res.status(status).send(response);
    });
}

function deleteHotel(req, res){
    var hotelId = req.params.id;
 
    Hotels.findByIdAndRemove(hotelId, (err, hotelRemoved) => {
        const {response, status} = makeResponse(err, hotelRemoved);
        return res.status(status).send(response);
    });
}



module.exports = {
    getHotels,
    getHotel,
    createHotel,
    updateHotel,
    deleteHotel
};