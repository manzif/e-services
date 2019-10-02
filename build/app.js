"use strict";

var _http = _interopRequireDefault(require("http"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./routes"));

var _cors = _interopRequireDefault(require("cors"));

require("@babel/polyfill");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use('/uploads', _express["default"]["static"]('server/uploads'));
app.use(_bodyParser["default"].json({
  limit: "50mb"
}));
app.use(_bodyParser["default"].urlencoded({
  extended: false
})); // routes(app);

app.use(_routes["default"]);
app.get('*', function (req, res) {
  return res.status(200).send({
    message: 'Welcome to the E-service'
  });
});
var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("listening on port ".concat(port, "..."));
});