import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Rafael',
      sobrenome: 'Henrique',
      email: 'teste@email',
      idade: 27,
      peso: 200,
      altura: 2.5,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
