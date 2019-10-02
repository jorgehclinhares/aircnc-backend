const SpotRepository = require('../repositories/SpotRepository')

module.exports = {
  async show(req, res) {
    const { user_id } = req.headers
    let data = { status: 400, success: false, message: 'Não foi possível listar o dashboard.', data: {} }

    const spots = await SpotRepository.index({ user: user_id })

    if (spots) {
      data = { status: 200, success: true, message: '', data: spots }
    }

    return res.status(data.status).json(data)
  }
}