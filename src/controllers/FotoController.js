class HomeController {
  async store(req, res) {
    const { originalname, filename } = req.file;
    res.json({ originalname, filename });
  }
}

export default new HomeController();
