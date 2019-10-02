const SpotRepository = require('../repositories/SpotRepository')

module.exports = {
  async index(req, res) {
    const { tech } = req.query
    const spots = await SpotRepository.index({ techs: tech })

    let data = { status: 400, success: false, message: 'Não foi possível listar os spots.', data: {} }

    if (spots) {
      data = { status: 200, success: true, message: '', data: spots }
    }

    return res.status(data.status).json(data)
  },
  async store(req, res) {
    const { filename } = req.file
    const { company, techs, price } = req.body
    const { user_id } = req.headers

    let data = { status: 400, success: false, message: 'Não foi possível criar o spot.', data: {} }

    const spot = await SpotRepository.store({
      user: user_id,
      thumbnail: filename,
      techs: techs.split(',').map(tech => tech.trim()),
      price: Number(price),
      company: company
    })

    if (spot) {
      data = { status: 200, success: true, message: 'Spot criado com sucesso.', data: spot }
    }

    return res.status(data.status).json(data)
  }
}