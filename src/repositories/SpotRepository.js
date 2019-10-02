const Spot = require('../models/Spot')
const User = require('../models/User')

module.exports.store = async (spotData) => {
  let spot = null

  const user = await User.findById(spotData.user)

  if (user) {
    spot = await Spot.create(spotData)
  }

  return spot
}

module.exports.index = async (filters) => {
  const spots = await Spot.find(filters)
  return spots
}