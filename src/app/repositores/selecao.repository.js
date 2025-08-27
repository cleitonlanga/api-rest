import { queries } from "../database/conection.js";
class selecaoRepository {
  create(selecao) {
    const sql = "INSERT INTO `bd_selecao`.`selecoes` SET ?;";
    return queries(sql, selecao, "Não foi possível introduzir seleção: ");
  }
  findAll() {
    const sql = "SELECT * FROM bd_selecao.selecoes;";
    return queries(sql, "Erro ao buscar seleções: ");
  }

  findById(id) {
    const sql = "SELECT * FROM bd_selecao.selecoes WHERE id=?;";
    return queries(sql, [id], "Erro ao buscar seleção: ");
  }
  update(id, selecao) {
    const sql = "UPDATE bd_selecao.selecoes SET ? WHERE id=?;";
    return queries(sql, [selecao, id], "Erro ao atualizar seleção: ");
  }
  delete(id) {
    const sql = "DELETE FROM bd_selecao.selecoes WHERE id=?;";
    return queries(sql, [id], "Erro ao apagar seleção: ");
  }
}

export default new selecaoRepository();
