const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./router');


// call express function to begin express app
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// passing app to router file
routes(app);

// set port listener and log
// what does this do? 
if (require.main === 'module') {
  app.listen(4020, (req, res) => {
    console.log('app is running on port 4020');
  });
}

module.exports = app;
