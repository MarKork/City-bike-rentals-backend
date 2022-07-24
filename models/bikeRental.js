const mongoose = require('mongoose')

const BikeRentalSchema = new mongoose.Schema({
    departure: Date,
    return: Date,
    departureStationId: Number,
    departureStationName: String,
    returnStationId: Number,
    returnStationName: String,
    distance: Number,
    duration: Number
})

module.exports = mongoose.model('BikeRental', BikeRentalSchema)