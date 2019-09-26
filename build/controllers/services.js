"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = _interopRequireDefault(require("../models"));

var _fs = require("fs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Service = _models["default"].Service;

var Services =
/*#__PURE__*/
function () {
  function Services() {
    _classCallCheck(this, Services);
  }

  _createClass(Services, null, [{
    key: "list",
    value: function list(req, res) {
      return Service.findAll().then(function (services) {
        services.map(function (service) {
          service.dataValues.title = service.dataValues.title;
          service.dataValues.company = service.dataValues.company;
          service.dataValues.description = service.dataValues.description;
          service.dataValues.image = req.protocol + '://' + req.headers.host + '/uploads/' + service.dataValues.image;
        });
        res.status(200).send(services);
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
    key: "post",
    value: function post(req, res) {
      var _req$body = req.body,
          title = _req$body.title,
          company = _req$body.company,
          description = _req$body.description;
      var image = req.file ? req.file.filename : null;
      return Service.create({
        title: title,
        company: company,
        description: description,
        image: image
      }).then(function (serviceData) {
        var result = {
          title: serviceData.title,
          company: serviceData.company,
          description: serviceData.description,
          image: req.protocol + '://' + req.headers.host + '/uploads/' + serviceData.image
        };
        res.status(201).send({
          status: 201,
          message: 'Service successfully created',
          result: result
        });
      })["catch"](function (error) {
        res.status(500).send({
          status: 500,
          error: 'Internal Server Error'
        });
      });
    }
  }, {
    key: "getService",
    value: function () {
      var _getService = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res) {
        var id, service, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                id = parseInt(req.params.id);
                _context.next = 4;
                return Service.findOne({
                  where: {
                    id: id
                  }
                });

              case 4:
                service = _context.sent;

                if (!service) {
                  _context.next = 8;
                  break;
                }

                result = {
                  title: service.title,
                  company: service.company,
                  description: service.description,
                  image: req.protocol + '://' + req.headers.host + '/uploads/' + service.image
                };
                return _context.abrupt("return", res.status(200).json({
                  status: 200,
                  data: result
                }));

              case 8:
                return _context.abrupt("return", res.status(400).json({
                  status: 400,
                  error: 'Service does not exist Please check your id try Again!!'
                }));

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", res.status(500).json({
                  status: 500,
                  error: _context.t0
                }));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }));

      function getService(_x, _x2) {
        return _getService.apply(this, arguments);
      }

      return getService;
    }()
  }, {
    key: "DeleteService",
    value: function () {
      var _DeleteService = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res) {
        var id, service, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                id = parseInt(req.params.id);
                _context2.next = 4;
                return Service.destroy({
                  where: {
                    id: id
                  }
                });

              case 4:
                service = _context2.sent;

                if (!service) {
                  _context2.next = 8;
                  break;
                }

                result = {
                  title: service.title,
                  company: service.company,
                  description: service.description,
                  image: req.protocol + '://' + req.headers.host + '/uploads/' + service.image
                };
                return _context2.abrupt("return", res.status(200).json({
                  status: 200,
                  data: 'services deleted successfully'
                }));

              case 8:
                return _context2.abrupt("return", res.status(400).json({
                  status: 400,
                  error: 'Service does not exist Please check your id try Again!!'
                }));

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", res.status(500).json({
                  status: 500,
                  error: _context2.t0
                }));

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 11]]);
      }));

      function DeleteService(_x3, _x4) {
        return _DeleteService.apply(this, arguments);
      }

      return DeleteService;
    }()
  }, {
    key: "deleteMember",
    value: function () {
      var _deleteMember = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(req, res) {
        var id, findService;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                id = parseInt(req.params.id);
                _context3.next = 4;
                return Service.findOne({
                  where: {
                    id: id
                  }
                });

              case 4:
                findService = _context3.sent;

                if (!findService) {
                  _context3.next = 9;
                  break;
                }

                _context3.next = 8;
                return Service.destroy({
                  where: {
                    id: id
                  }
                });

              case 8:
                return _context3.abrupt("return", res.status(200).json({
                  status: 200,
                  message: 'User was successfuly deleted'
                }));

              case 9:
                return _context3.abrupt("return", res.status(400).json({
                  status: 400,
                  error: "Service does not exist or already deleted"
                }));

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", res.status(500).json({
                  status: 500,
                  error: _context3.t0
                }));

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 12]]);
      }));

      function deleteMember(_x5, _x6) {
        return _deleteMember.apply(this, arguments);
      }

      return deleteMember;
    }()
  }]);

  return Services;
}();

var _default = Services;
exports["default"] = _default;