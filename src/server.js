import app from "./app.js";

const PORT = process.env.PORT || 3000;

//conexão com a base de dados

//Criando onde a porta será ouvida
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: http://localhost:${PORT}`);
});
