const Booking = require('../models/Booking')
const User = require('../models/User')
const Spot = require('../models/Spot')

module.exports.store = async (bookingData) => {
  let booking = null

  const user = await User.findById(bookingData.user)
  const spot = await Spot.findById(bookingData.spot)

  if (user && spot) {
    booking = await Booking.create(bookingData)
    await booking.populate('spot').populate('user').execPopulate()
  }

  return booking
}