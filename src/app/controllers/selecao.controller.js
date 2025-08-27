import selecaoRepository from "../repositores/selecao.repository.js";
class selecaoController {
  async index(req, res) {
    const result = await selecaoRepository.findAll();
    res.status(200).json(result);
  }
  async show(req, res) {
    let id = req.params.id;
    const result = await selecaoRepository.findById(id);

    res.status(200).json(result);
  }
  async store(req, res) {
    let selecao = req.body;

    const result = await selecaoRepository.create(selecao);

    res.status(201).json("Seleção criada com sucesso!");
  }
  async update(req, res) {
    let id = req.params.id;
    let selecao = req.body;

    const result = await selecaoRepository.update(id, selecao);

    res.status(200).json("Seleção atualizada com sucesso!");
  }
  async delete(req, res) {
    let id = req.params.id;
    const result = await selecaoRepository.delete(id);

    res.status(200).json("Seleção apagada com sucesso!");
  }
}

export default new selecaoController();
