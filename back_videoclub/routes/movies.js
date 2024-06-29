const express = require('express')
const {allMovies,singleMovie,createMovie,editMovie,deleteMovie} = require('../controllers/movies.js')
const router = express.Router()

//PETICIONES

router.get("/",allMovies)
router.get("/movies:id", singleMovie)
router.post("/movies/create", createMovie)
router.put("/movies/edit", editMovie)
router.delete("/movies/delete/",deleteMovie)


module.exports = router