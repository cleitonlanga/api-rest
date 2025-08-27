import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export const connection = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

connection.connect();
/**
 * Comando para executar uma query no banco de dados
 * @param {*} sql comando SQL a ser executado
 * @param {*} valores dados a serem inseridos ou atualizados
 * @param {*} messagemReject mensagem de erro a ser retornada em caso de falha
 * @returns {Promise} objeto da promise
 */
export const queries = (sql, valores, messagemReject = "") => {
  return new Promise((resolve, reject) => {
    connection.query(sql, valores, (error, result) => {
      if (error) {
        return reject(messagemReject + error);
      }

      return resolve(result);
    });
  });
};
