const express = require('express');
const router = express.Router();

// Requerimos el archivo del controllador para nuestras rutas
const indexController = require('../controllers/indexController')

router.get('/', indexController.index)
router.get('/detalle/:id', indexController.detail)
router.get('/publisher/:publisher', indexController.filterByPublisher)

module.exports = router;