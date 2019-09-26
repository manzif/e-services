"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = _interopRequireDefault(require("../models"));

var _cluster = require("cluster");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User = _models["default"].User;

var Users =
/*#__PURE__*/
function () {
  function Users() {
    _classCallCheck(this, Users);
  }

  _createClass(Users, null, [{
    key: "list",
    value: function list(req, res) {
      return User.findAll().then(function (User) {
        return res.status(200).send(User);
      });
    } // static listOne(req, res) {
    //     const id = req.params.id
    //     User.findOne({
    //         where: {
    //             id: req.params.id
    //         }
    //     })
    //         .then(user => {
    //             if (!user) {
    //                      .then(User=> res.status(201).send(User));
    //                     .catch(err => {
    //                         res.status(400).send('error' + err);
    //                     })
    //             }
    //             else {
    //                 res.status(409).json({ 
    //                     error: 'user already exist' })
    //             }
    //         })
    //         .catch(err => {
    //             res.status(400).send('error' + err);
    //             console.log(err)
    //         })
    // }

  }, {
    key: "signUp",
    value: function () {
      var _signUp = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res) {
        var user, findUser;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                user = {
                  fullname: req.body.fullname,
                  email: req.body.email,
                  password: req.body.password
                };
                _context.next = 4;
                return User.findOne({
                  where: {
                    email: req.body.email
                  }
                });

              case 4:
                findUser = _context.sent;

                if (findUser) {
                  _context.next = 10;
                  break;
                }

                User.create(user);
                return _context.abrupt("return", res.status(201).json({
                  status: 201,
                  message: 'User was successfuly created'
                }));

              case 10:
                return _context.abrupt("return", res.status(202).json({
                  message: 'Email already taken.'
                }));

              case 11:
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                res.status(500).send({
                  status: 500,
                  error: _context.t0.errors[0].message
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 13]]);
      }));

      function signUp(_x, _x2) {
        return _signUp.apply(this, arguments);
      }

      return signUp;
    }()
  }, {
    key: "DeleteUser",
    value: function () {
      var _DeleteUser = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res) {
        var id, findUser;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                id = parseInt(req.params.id);
                _context2.next = 4;
                return User.findOne({
                  where: {
                    id: id
                  }
                });

              case 4:
                findUser = _context2.sent;

                if (!findUser) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 8;
                return User.destroy({
                  where: {
                    id: id
                  }
                });

              case 8:
                return _context2.abrupt("return", res.status(200).json({
                  status: 200,
                  message: 'User was successfuly deleted'
                }));

              case 9:
                return _context2.abrupt("return", res.status(400).json({
                  status: 400,
                  error: "User does not exist or already deleted"
                }));

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", res.status(500).json({
                  status: 500,
                  error: _context2.t0
                }));

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 12]]);
      }));

      function DeleteUser(_x3, _x4) {
        return _DeleteUser.apply(this, arguments);
      }

      return DeleteUser;
    }()
  }, {
    key: "signin",
    value: function () {
      var _signin = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(req, res) {
        var findUser, id, fullname, email, password, userData;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return User.findOne({
                  where: {
                    email: req.body.email,
                    password: req.body.password
                  }
                });

              case 3:
                findUser = _context3.sent;

                if (!findUser) {
                  _context3.next = 8;
                  break;
                }

                id = findUser.id, fullname = findUser.fullname, email = findUser.email, password = findUser.password;
                userData = {
                  id: id,
                  fullname: fullname,
                  email: email,
                  password: password
                };
                return _context3.abrupt("return", res.status(200).json({
                  status: 200,
                  data: findUser
                }));

              case 8:
                return _context3.abrupt("return", res.status(404).json({
                  status: 404,
                  error: "email or password is incorrect"
                }));

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", res.status(500).json({
                  status: 500,
                  error: "internal server error! please try again later"
                }));

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 11]]);
      }));

      function signin(_x5, _x6) {
        return _signin.apply(this, arguments);
      }

      return signin;
    }()
  }]);

  return Users;
}();

var _default = Users;
exports["default"] = _default;