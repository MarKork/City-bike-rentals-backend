const mongoose = require('mongoose')

const StationSchema = new mongoose.Schema({
    id: Number,
    name: String,
    address: String,
    city: String,
    capacity: Number,
})

module.exports = mongoose.model('Station', StationSchema)