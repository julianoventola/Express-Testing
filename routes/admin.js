const express = require('express');
const path = require('path');
const router = express.Router();

const products = [];

router.get('/add-product', (req, res) => {
  //res.sendFile(path.resolve('./views/add-product.html'));

  // Rendering pug template
  res.render('add-product', {
    docTitle: 'Add Product',
    path: '/admin/add-product',
  });
});

router.post('/add-product', (req, res) => {
  products.push({ title: req.body.title });

  res.redirect('/');
});

exports.routes = router;
exports.products = products;
