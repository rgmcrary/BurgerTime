var express = require('express');
var bodyParser = require('body-parser');

var port = 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require('express-handlebars');

app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main',
    helpers: {
      // Function to do basic mathematical operation in handlebar
      math: function(lvalue, operator, rvalue) {
        lvalue = parseFloat(lvalue);
        rvalue = parseFloat(rvalue);
        return {
          '+': lvalue + rvalue,
          '-': lvalue - rvalue,
          '*': lvalue * rvalue,
          '/': lvalue / rvalue,
          '%': lvalue % rvalue
        }[operator];
      }
    }
  })
);
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(port);
