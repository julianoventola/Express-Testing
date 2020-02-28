const express = require('express');
const path = require('path');
const adminRoute = require('./admin');

const router = express.Router();

router.get('/', (req, res) => {
  console.log(adminRoute.products);

  res.sendFile(path.resolve('./views/shop.html'));
});

module.exports = router;
