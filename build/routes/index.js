"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _user = _interopRequireDefault(require("../controllers/user"));

var _services = _interopRequireDefault(require("../controllers/services"));

var _payment = _interopRequireDefault(require("../controllers/payment"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, './server/uploads/');
  },
  filename: function filename(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

var fileFilter = function fileFilter(req, file, cb) {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

var upload = (0, _multer["default"])({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

var app = _express["default"].Router();

app.get('/api', function (req, res) {
  return res.status(200).send({
    message: 'Welcome to E-services API!'
  });
});
app.post('/api/users', _user["default"].signUp); // API route for user to signup

app.get('/api/users', _user["default"].list); //   app.get('/api/users', Users.listOne);

app["delete"]('/api/users/:id', _user["default"].DeleteUser);
app.post('/api/users/signin', _user["default"].signin);
app.post('/api/services', upload.single('image'), _services["default"].post);
app.get('/api/services', _services["default"].list);
app.get('/api/services/:id', _services["default"].getService);
app["delete"]('/api/services/:id', _services["default"].deleteMember);
app.post('/api/pay/receive', _payment["default"].receiveCallback);
var _default = app;
exports["default"] = _default;