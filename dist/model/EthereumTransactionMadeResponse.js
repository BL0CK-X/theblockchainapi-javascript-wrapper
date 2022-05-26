"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EthereumTransactionMadeResponse model module.
 * @module model/EthereumTransactionMadeResponse
 * @version 1.0.9
 */
var EthereumTransactionMadeResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EthereumTransactionMadeResponse</code>.
   * @alias module:model/EthereumTransactionMadeResponse
   */
  function EthereumTransactionMadeResponse() {
    _classCallCheck(this, EthereumTransactionMadeResponse);

    EthereumTransactionMadeResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EthereumTransactionMadeResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EthereumTransactionMadeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EthereumTransactionMadeResponse} obj Optional instance to populate.
     * @return {module:model/EthereumTransactionMadeResponse} The populated <code>EthereumTransactionMadeResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EthereumTransactionMadeResponse();

        if (data.hasOwnProperty('transaction_blockchain_identifier')) {
          obj['transaction_blockchain_identifier'] = _ApiClient["default"].convertToType(data['transaction_blockchain_identifier'], 'String');
        }

        if (data.hasOwnProperty('transaction_confirmed')) {
          obj['transaction_confirmed'] = _ApiClient["default"].convertToType(data['transaction_confirmed'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return EthereumTransactionMadeResponse;
}();
/**
 * The identifier of the transaction
 * @member {String} transaction_blockchain_identifier
 */


EthereumTransactionMadeResponse.prototype['transaction_blockchain_identifier'] = undefined;
/**
 * Whether or not the transaction was confirmed
 * @member {Boolean} transaction_confirmed
 */

EthereumTransactionMadeResponse.prototype['transaction_confirmed'] = undefined;
var _default = EthereumTransactionMadeResponse;
exports["default"] = _default;