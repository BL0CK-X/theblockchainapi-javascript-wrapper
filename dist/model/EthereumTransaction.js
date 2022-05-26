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
 * The EthereumTransaction model module.
 * @module model/EthereumTransaction
 * @version 1.0.9
 */
var EthereumTransaction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EthereumTransaction</code>.
   * @alias module:model/EthereumTransaction
   */
  function EthereumTransaction() {
    _classCallCheck(this, EthereumTransaction);

    EthereumTransaction.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EthereumTransaction, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EthereumTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EthereumTransaction} obj Optional instance to populate.
     * @return {module:model/EthereumTransaction} The populated <code>EthereumTransaction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EthereumTransaction();

        if (data.hasOwnProperty('access_list')) {
          obj['access_list'] = _ApiClient["default"].convertToType(data['access_list'], Object);
        }

        if (data.hasOwnProperty('block_hash')) {
          obj['block_hash'] = _ApiClient["default"].convertToType(data['block_hash'], 'String');
        }

        if (data.hasOwnProperty('block_number')) {
          obj['block_number'] = _ApiClient["default"].convertToType(data['block_number'], 'String');
        }

        if (data.hasOwnProperty('chain_id')) {
          obj['chain_id'] = _ApiClient["default"].convertToType(data['chain_id'], 'String');
        }

        if (data.hasOwnProperty('from')) {
          obj['from'] = _ApiClient["default"].convertToType(data['from'], 'String');
        }

        if (data.hasOwnProperty('gas')) {
          obj['gas'] = _ApiClient["default"].convertToType(data['gas'], 'String');
        }

        if (data.hasOwnProperty('gas_price')) {
          obj['gas_price'] = _ApiClient["default"].convertToType(data['gas_price'], 'String');
        }

        if (data.hasOwnProperty('hash')) {
          obj['hash'] = _ApiClient["default"].convertToType(data['hash'], 'String');
        }

        if (data.hasOwnProperty('input')) {
          obj['input'] = _ApiClient["default"].convertToType(data['input'], 'String');
        }

        if (data.hasOwnProperty('max_fee_per_gas')) {
          obj['max_fee_per_gas'] = _ApiClient["default"].convertToType(data['max_fee_per_gas'], 'String');
        }

        if (data.hasOwnProperty('max_priority_fee_per_gas')) {
          obj['max_priority_fee_per_gas'] = _ApiClient["default"].convertToType(data['max_priority_fee_per_gas'], 'String');
        }

        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'String');
        }

        if (data.hasOwnProperty('r')) {
          obj['r'] = _ApiClient["default"].convertToType(data['r'], 'String');
        }

        if (data.hasOwnProperty('s')) {
          obj['s'] = _ApiClient["default"].convertToType(data['s'], 'String');
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], 'String');
        }

        if (data.hasOwnProperty('transaction_index')) {
          obj['transaction_index'] = _ApiClient["default"].convertToType(data['transaction_index'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('v')) {
          obj['v'] = _ApiClient["default"].convertToType(data['v'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EthereumTransaction;
}();
/**
 * @member {Object} access_list
 */


EthereumTransaction.prototype['access_list'] = undefined;
/**
 * @member {String} block_hash
 */

EthereumTransaction.prototype['block_hash'] = undefined;
/**
 * @member {String} block_number
 */

EthereumTransaction.prototype['block_number'] = undefined;
/**
 * @member {String} chain_id
 */

EthereumTransaction.prototype['chain_id'] = undefined;
/**
 * @member {String} from
 */

EthereumTransaction.prototype['from'] = undefined;
/**
 * @member {String} gas
 */

EthereumTransaction.prototype['gas'] = undefined;
/**
 * @member {String} gas_price
 */

EthereumTransaction.prototype['gas_price'] = undefined;
/**
 * @member {String} hash
 */

EthereumTransaction.prototype['hash'] = undefined;
/**
 * @member {String} input
 */

EthereumTransaction.prototype['input'] = undefined;
/**
 * @member {String} max_fee_per_gas
 */

EthereumTransaction.prototype['max_fee_per_gas'] = undefined;
/**
 * @member {String} max_priority_fee_per_gas
 */

EthereumTransaction.prototype['max_priority_fee_per_gas'] = undefined;
/**
 * @member {String} nonce
 */

EthereumTransaction.prototype['nonce'] = undefined;
/**
 * @member {String} r
 */

EthereumTransaction.prototype['r'] = undefined;
/**
 * @member {String} s
 */

EthereumTransaction.prototype['s'] = undefined;
/**
 * @member {String} to
 */

EthereumTransaction.prototype['to'] = undefined;
/**
 * @member {String} transaction_index
 */

EthereumTransaction.prototype['transaction_index'] = undefined;
/**
 * @member {String} type
 */

EthereumTransaction.prototype['type'] = undefined;
/**
 * @member {String} v
 */

EthereumTransaction.prototype['v'] = undefined;
/**
 * @member {String} value
 */

EthereumTransaction.prototype['value'] = undefined;
var _default = EthereumTransaction;
exports["default"] = _default;