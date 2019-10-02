const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const SessionControler = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.get('/', (res) => {
  return res.json({ version: '1.0.0', message: 'Aircnc API working!' })
})

routes.post('/sessions', SessionControler.store)

routes.post('/spots', upload.single('thumbnail'), SpotController.store)
routes.get('/spots', SpotController.index)
routes.post('/spots/:spot_id/bookings', BookingController.store)

routes.get('/dashboard', DashboardController.show)

module.exports = routes