import multer from 'multer';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('foto');

class FotoController {
  async store(req, res) {
    upload(req, res, (err) => {
      if (err) {
        // Se houver um erro do Multer
        return res.status(400).json({
          errors: [err.code],
        });
      }

      // Se não houver erro, continua o fluxo
      const { originalname, filename } = req.file;
      return res.json({ originalname, filename });
    });
  }
}

export default new FotoController();
