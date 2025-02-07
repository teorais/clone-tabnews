import database from "../../../../infra/database.js";

function status(request, response) {
  console.log(database);
  response.status(200).json({ chave: "alunos do curso.dev são fodas" });
}

export default status;
