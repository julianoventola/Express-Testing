const path = require('path');
const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve('./public')));

app.use(adminRoutes);
app.use(userRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.resolve('./views/404.html'));
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
