const { connection } = require("../config/DB.js");

const allMovies = (req, res) => {
  const query = `select * from movies`;
  connection.query(query, (error, result) => {
    if (error) throw error;
    res.json(result);
  });
};

const singleMovie = (req, res) => {
  const id = req.params.id;
  const query = `select * from  movies where id=${id}`;
  connection.query(query, (error, result) => {
    if (error) throw error;
    res.json(result);
  });
};

const createMovie = (req, res) => {
  const { nombre, genero, fechaEstreno, descripcion, imagen } = req.body;
  const query = `insert into movies (nombre,genero,fechaEstreno,descripcion,imagen) values ('${nombre}', '${genero}', '${fechaEstreno}', '${descripcion}', '${imagen}')`;
  connection.query(query, (error, result) => {
    if (error) throw error;
    res.json(result);
  });
};

const editMovie = (req, res) => {
  const { nombre, genero, fechaEstreno, descripcion, imagen } = req.body;
  const id = req.params.id;
  const query = `update movies set nombre = '${nombre}, genero= ${genero}, fechaEstreno=${fechaEstreno}, descripcion=${descripcion},imagen=${imagen} where id= ${id}'`;
  connection.query(query, (error, result) => {
    if (error) throw error;
    res.json(result);
  });
};

const deleteMovie = (req, res) => {
    const id = req.params.id
    const query = `delete from contactos where id=${id}`
    connection.query(query, (error, result) => {
        if (error) throw error;
        res.json(result);
      });
};

module.exports = {
  allMovies,
  createMovie,
  singleMovie,
  createMovie,
  editMovie,
  deleteMovie,
};
