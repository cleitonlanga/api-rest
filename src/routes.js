import { Router } from "express";
import selecaoController from "./app/controllers/selecao.controller.js";

const router = Router();

//ROTAS
//Criando selecao
//Fazer o get de todas as seleções
router.get("/selecoes", selecaoController.index);
//Fazer o get de uma uníca seleção
router.get("/selecoes/:id", selecaoController.show);
//Fazer o post de uma nova seleção
router.post("/selecoes", selecaoController.store);
//update dos dados da seleção
router.put("/selecoes/:id", selecaoController.update);
//deletando uma seleção
router.delete("/selecoes/:id", selecaoController.delete);

export default router;
