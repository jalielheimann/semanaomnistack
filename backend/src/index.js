const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
* Rota /  Recurso
*
* HTTP - Métodos
*
* GET = Buscar/listar informação do back-end
* POST = Criar um,a informação no back-end
* PUT = Alterar uma informação no back-end
* DELETE - Deletar uma informação no back-end
*/


/*
* Tipos de parâmetros:
*
* Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação)
* Route Params: Parâmetros ultilizados para indentificar recursos
* Request Body: Corpo da requisição, ultiliza para criar ou alterar recursos
*/

/*
*
*SQL: MySQL, QELite, PostgreSQL, Oracle, Microsoft SQL Server
NoSQL: MongoDB, CouchDB, etc
*
*/

/*
* Driver: SELECT * FROM users
* Query Builder: table('users').select('*').where()
*
*/









