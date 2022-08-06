require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose");
const BikeRental = require('./models/bikeRental')

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3001

try {
  mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  })
  console.log('MongoDB connected successfully')
} catch(error) {
  console.log(error)
}

app.get('/api', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/total', (req, res) => {
  BikeRental.countDocuments().exec((err, count)=>{
    if(err){
      res.send(err)
      return
    }
    res.json({count: count})
  })
})

app.get('/api/rentals', (req, res) => {
  BikeRental.find({}).then(rentals => {
    res.json(rentals)
  })
})

app.post('/api/rentals', (req, res, next) => {
  const body = req.body

  const rental = new BikeRental({
    departure: body[0],
    return: body[1],
    departureStationId: body[2],
    departureStationName: body[3],
    returnStationId: body[4],
    returnStationName: body[5],
    distance: body[6],
    duration: body[7]
  })

  try{
    rental.save()
    res.status(200).send()
  }catch (error){
    console.log(error)
    next(error)
  }

})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})