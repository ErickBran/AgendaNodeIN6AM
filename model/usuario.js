var database = require('./database');
var Usuario = {};

Usuario.selectAll = function(callback) {
  if(database) {
    database.query("SELECT * FROM Usuario",
    function(error, resultados) {
      if(error) {
        throw error;
      } else {
        callback(null, resultados);
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

Usuario.select = function(idUsuario, callback) {
  if(database) {
    var sql = "SELECT * FROM Usuario WHERE idUsuario = ?";
    database.query(sql, idUsuario,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, resultado);
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

Usuario.autenticar = function(data, callback) {
  if(database) {
    var sql = "SELECT * FROM Usuario WHERE nombre = ? AND contrasena = ?";
    database.query(sql, [data.nombre, data.contrasena],
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, resultado);
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

Usuario.insert = function(data, callback) {
  if(database) {
    database.query("INSERT INTO Usuario SET ? ", data,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"insertId": resultado.insertId});
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

Usuario.update = function(data, callback) {
  if(database) {
    var sql = "UPDATE Usuario SET "
    +"nombre = ?, contrasena = ? WHERE idUsuario = ?";
    database.query(sql,
    [data.nombre, data.contrasena, data.idUsuario],
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"insertId": resultado.insertId});
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

Usuario.delete = function(idUsuario, callback) {
  if(database) {
    var sql = "DELETE FROM Usuario WHERE idUsuario = ?";
    database.query(sql, idUsuario,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"Mensaje": "Eliminado"});
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll


module.exports = Usuario;