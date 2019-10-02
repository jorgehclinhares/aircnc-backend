const BookingRepository = require('../repositories/BookingRepository')

module.exports = {
  async store(req, res) {
    const { user_id } = req.headers
    const { spot_id } = req.params
    const { date } = req.body

    let data = { status: 400, success: false, message: 'Não foi possível realizar a reserva.', data: {} }

    const spots = await BookingRepository.store({
      user: user_id,
      spot: spot_id,
      date: date
    })

    if (spots) {
      data = { status: 200, success: true, message: 'Reserva realizada com sucesso.', data: spots }
    }

    return res.status(data.status).json(data)
  }
}