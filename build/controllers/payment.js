"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pay = _models["default"].Pay;

var Opay =
/*#__PURE__*/
function () {
  function Opay() {
    _classCallCheck(this, Opay);
  }

  _createClass(Opay, null, [{
    key: "receiveCallback",
    value: function receiveCallback(req, res) {
      var findPay = {
        'statusDescription': req.body.statusDescription,
        'spTransactionId': req.body.statusDescription,
        'walletTransactionId': req.body.walletTransactionId,
        'chargedCommission': req.body.chargedCommission,
        'currency': req.body.currency,
        'paidAmount': req.body.paidAmount,
        'transactionId': req.body.transactionId,
        'statusCode': req.body.statusCode,
        'status': req.body.status
      };
      Pay.create(findPay).then(function (findPay) {
        return res.status(201).send({
          status: 201,
          message: 'User successfully created',
          findPay: findPay
        });
      })["catch"](function (error) {
        res.status(500).send({
          status: 500,
          error: error.errors[0].message
        });
      });
    }
  }]);

  return Opay;
}();

var _default = Opay;
exports["default"] = _default;