// Used before path.resolve
const path = require('path');
module.exports = path.dirname(process.mainModule.filename);
