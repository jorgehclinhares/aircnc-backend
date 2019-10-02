const UserRepository = require('../repositories/UserRepository')

module.exports = {
  async store(req, res) {
    const email = req.body.email

    let data = { status: 400, success: false, message: 'Email não informado.', data: {} }

    const user = await UserRepository.store(email)

    if (user) {
      data = { status: 200, success: true, message: '', data: user }
    }

    return res.status(data.status).json(data)
  }
}