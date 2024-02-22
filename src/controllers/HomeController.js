class HomeController {
  async index(req, res) {
    res.json('Home ok');
  }
}

export default new HomeController();
