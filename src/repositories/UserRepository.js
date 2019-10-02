const User = require('../models/User')

module.exports.store = async (email) => {
  let user = null

  if (email) {
    user = await User.findOne({ email })

    if (!user) {
      user = await User.create({ email: email })
    }
  }

  return user
}
