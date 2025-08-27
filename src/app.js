import express from "express";
import selecaoController from "./app/controllers/selecao.controller.js";

const app = express();

app.use(express.json());

//ROTAS
//Criando selecao
//Fazer o get de todas as seleções
app.get("/selecoes", selecaoController.index);
//Fazer o get de uma uníca seleção
app.get("/selecoes/:id", selecaoController.show);
//Fazer o post de uma nova seleção
app.post("/selecoes", selecaoController.store);
//update dos dados da seleção
app.put("/selecoes/:id", selecaoController.update);
//deletando uma seleção
app.delete("/selecoes/:id", selecaoController.delete);

export default app;
