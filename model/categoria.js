var database = require('./database');
var categoria = {};

categoria.seleccionarTodo = function(cualquierFuncion){
    if(database){
        database.query("SELECT * FROM Categoria",
                      function(error, resultados){
           if(error){
               throw error;
           } else{
               cualquierFuncion(null, resultados);
           }
        });
    }
}

categoria.select = function(idCategoria){
    if(database){
        database.query("SELECT * FROM Categoria WHERE idCategoria = ?", idCategoria,
                      function(error, resultado){
           if(error){
               throw error;
           } else{
               cualquierFuncion(null, resultado);
           }
        });
    }
}


module.exports = categoria;