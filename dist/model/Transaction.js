"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransactionResult = _interopRequireDefault(require("./TransactionResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Transaction model module.
 * @module model/Transaction
 * @version 1.0.9407
 */
var Transaction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Transaction</code>.
   * @alias module:model/Transaction
   */
  function Transaction() {
    _classCallCheck(this, Transaction);

    Transaction.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Transaction, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Transaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Transaction} obj Optional instance to populate.
     * @return {module:model/Transaction} The populated <code>Transaction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Transaction();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('jsonrpc')) {
          obj['jsonrpc'] = _ApiClient["default"].convertToType(data['jsonrpc'], 'String');
        }

        if (data.hasOwnProperty('result')) {
          obj['result'] = _TransactionResult["default"].constructFromObject(data['result']);
        }
      }

      return obj;
    }
  }]);

  return Transaction;
}();
/**
 * @member {Number} id
 */


Transaction.prototype['id'] = undefined;
/**
 * @member {String} jsonrpc
 */

Transaction.prototype['jsonrpc'] = undefined;
/**
 * @member {module:model/TransactionResult} result
 */

Transaction.prototype['result'] = undefined;
var _default = Transaction;
exports["default"] = _default;