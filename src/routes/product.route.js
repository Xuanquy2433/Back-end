const express = require('express') ;
const ProductRoute = express.Router();
const { create, getList, getDetail, update, remove,search } = require('../controllers/product.controller')

ProductRoute.get('/', (req, res, next) => {
    console.log("ccc");
    getList(req, res, next)
})

ProductRoute.get('/:id', (req, res, next) => {
    getDetail(req, res, next)
})

ProductRoute.post('/', (req, res, next) => {
    create(req, res, next)
})

ProductRoute.put('/:id', (req, res, next) => {
    update(req, res, next)
})

ProductRoute.delete('/:id', (req, res, next) => {
    remove(req, res, next)
})

ProductRoute.post('/search', (req, res, next) => {
    search(req, res, next)
})


module.exports = ProductRoute