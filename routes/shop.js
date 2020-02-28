const express = require('express');
const path = require('path');
const adminRoute = require('./admin');

const router = express.Router();

router.get('/', (req, res) => {
  //res.sendFile(path.resolve('./views/shop.html'));

  const { products } = adminRoute;

  // Rendering pug template
  res.render('shop', {
    products,
    docTitle: 'Shop',
    path: '/',
  });
});

module.exports = router;
