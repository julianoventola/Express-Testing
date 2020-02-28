const path = require('path');
const express = require('express');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');
// Create server
const app = express();

// UrlEncoded for form's data
app.use(express.urlencoded({ extended: false }));

// Static css folder for pages
app.use(express.static(path.resolve('./public')));

// "Admin" Route
app.use('/admin', adminRoutes.routes);
// Shop Route
app.use(userRoutes);

// Route for 404 cases
app.use((req, res) => {
  res.status(404).sendFile(path.resolve('./views/404.html'));
});

// Listen to port 3000
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
