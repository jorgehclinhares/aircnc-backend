const multer = require('multer')
const path = require('path')

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: (req, file, done) => {
      const ext = path.extname(file.originalname)
      const filename = path.basename(file.originalname, ext)
      done(null, `${filename}-${Date.now()}${ext}`)
    }
  })
}