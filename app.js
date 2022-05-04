const express = require('express');
const path = require('path')

// Instanciamos express
const app = express();

// Declaramos puerto de express
const expressPort = 3030;

// Importando archivo de routes
const indexRoutes = require('./routes/indexRouter')


// Declarando templates engine
app.set('view engine', 'ejs');

// Declarando archivos publicos
app.use(express.static('public'));

// Ejecución del servidor
app.listen(process.env.PORT || expressPort, ()=> {
  console.log('Express corriendo correctamente, ¡Hello World!')
})

// Declarando rutas de la página principal
app.use(indexRoutes);