"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EthereumTransaction = _interopRequireDefault(require("./EthereumTransaction"));

var _SolanaTransaction = _interopRequireDefault(require("./SolanaTransaction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GeneralTransaction model module.
 * @module model/GeneralTransaction
 * @version 1.0.9407
 */
var GeneralTransaction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GeneralTransaction</code>.
   * @alias module:model/GeneralTransaction
   * @implements module:model/EthereumTransaction
   * @implements module:model/SolanaTransaction
   */
  function GeneralTransaction() {
    _classCallCheck(this, GeneralTransaction);

    _EthereumTransaction["default"].initialize(this);

    _SolanaTransaction["default"].initialize(this);

    GeneralTransaction.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GeneralTransaction, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GeneralTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GeneralTransaction} obj Optional instance to populate.
     * @return {module:model/GeneralTransaction} The populated <code>GeneralTransaction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GeneralTransaction();

        _EthereumTransaction["default"].constructFromObject(data, obj);

        _SolanaTransaction["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('block_time')) {
          obj['block_time'] = _ApiClient["default"].convertToType(data['block_time'], 'Number');
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _ApiClient["default"].convertToType(data['meta'], Object);
        }

        if (data.hasOwnProperty('slot')) {
          obj['slot'] = _ApiClient["default"].convertToType(data['slot'], 'Number');
        }

        if (data.hasOwnProperty('transaction')) {
          obj['transaction'] = _ApiClient["default"].convertToType(data['transaction'], Object);
        }
      }

      return obj;
    }
  }]);

  return GeneralTransaction;
}();
/**
 * @member {Object} access_list
 */


GeneralTransaction.prototype['access_list'] = undefined;
/**
 * @member {String} block_hash
 */

GeneralTransaction.prototype['block_hash'] = undefined;
/**
 * @member {String} block_number
 */

GeneralTransaction.prototype['block_number'] = undefined;
/**
 * @member {String} chain_id
 */

GeneralTransaction.prototype['chain_id'] = undefined;
/**
 * @member {String} from
 */

GeneralTransaction.prototype['from'] = undefined;
/**
 * @member {String} gas
 */

GeneralTransaction.prototype['gas'] = undefined;
/**
 * @member {String} gas_price
 */

GeneralTransaction.prototype['gas_price'] = undefined;
/**
 * @member {String} hash
 */

GeneralTransaction.prototype['hash'] = undefined;
/**
 * @member {String} input
 */

GeneralTransaction.prototype['input'] = undefined;
/**
 * @member {String} max_fee_per_gas
 */

GeneralTransaction.prototype['max_fee_per_gas'] = undefined;
/**
 * @member {String} max_priority_fee_per_gas
 */

GeneralTransaction.prototype['max_priority_fee_per_gas'] = undefined;
/**
 * @member {String} nonce
 */

GeneralTransaction.prototype['nonce'] = undefined;
/**
 * @member {String} r
 */

GeneralTransaction.prototype['r'] = undefined;
/**
 * @member {String} s
 */

GeneralTransaction.prototype['s'] = undefined;
/**
 * @member {String} to
 */

GeneralTransaction.prototype['to'] = undefined;
/**
 * @member {String} transaction_index
 */

GeneralTransaction.prototype['transaction_index'] = undefined;
/**
 * @member {String} type
 */

GeneralTransaction.prototype['type'] = undefined;
/**
 * @member {String} v
 */

GeneralTransaction.prototype['v'] = undefined;
/**
 * @member {String} value
 */

GeneralTransaction.prototype['value'] = undefined;
/**
 * @member {Number} block_time
 */

GeneralTransaction.prototype['block_time'] = undefined;
/**
 * @member {Object} meta
 */

GeneralTransaction.prototype['meta'] = undefined;
/**
 * @member {Number} slot
 */

GeneralTransaction.prototype['slot'] = undefined;
/**
 * @member {Object} transaction
 */

GeneralTransaction.prototype['transaction'] = undefined; // Implement EthereumTransaction interface:

/**
 * @member {Object} access_list
 */

_EthereumTransaction["default"].prototype['access_list'] = undefined;
/**
 * @member {String} block_hash
 */

_EthereumTransaction["default"].prototype['block_hash'] = undefined;
/**
 * @member {String} block_number
 */

_EthereumTransaction["default"].prototype['block_number'] = undefined;
/**
 * @member {String} chain_id
 */

_EthereumTransaction["default"].prototype['chain_id'] = undefined;
/**
 * @member {String} from
 */

_EthereumTransaction["default"].prototype['from'] = undefined;
/**
 * @member {String} gas
 */

_EthereumTransaction["default"].prototype['gas'] = undefined;
/**
 * @member {String} gas_price
 */

_EthereumTransaction["default"].prototype['gas_price'] = undefined;
/**
 * @member {String} hash
 */

_EthereumTransaction["default"].prototype['hash'] = undefined;
/**
 * @member {String} input
 */

_EthereumTransaction["default"].prototype['input'] = undefined;
/**
 * @member {String} max_fee_per_gas
 */

_EthereumTransaction["default"].prototype['max_fee_per_gas'] = undefined;
/**
 * @member {String} max_priority_fee_per_gas
 */

_EthereumTransaction["default"].prototype['max_priority_fee_per_gas'] = undefined;
/**
 * @member {String} nonce
 */

_EthereumTransaction["default"].prototype['nonce'] = undefined;
/**
 * @member {String} r
 */

_EthereumTransaction["default"].prototype['r'] = undefined;
/**
 * @member {String} s
 */

_EthereumTransaction["default"].prototype['s'] = undefined;
/**
 * @member {String} to
 */

_EthereumTransaction["default"].prototype['to'] = undefined;
/**
 * @member {String} transaction_index
 */

_EthereumTransaction["default"].prototype['transaction_index'] = undefined;
/**
 * @member {String} type
 */

_EthereumTransaction["default"].prototype['type'] = undefined;
/**
 * @member {String} v
 */

_EthereumTransaction["default"].prototype['v'] = undefined;
/**
 * @member {String} value
 */

_EthereumTransaction["default"].prototype['value'] = undefined; // Implement SolanaTransaction interface:

/**
 * @member {Number} block_time
 */

_SolanaTransaction["default"].prototype['block_time'] = undefined;
/**
 * @member {Object} meta
 */

_SolanaTransaction["default"].prototype['meta'] = undefined;
/**
 * @member {Number} slot
 */

_SolanaTransaction["default"].prototype['slot'] = undefined;
/**
 * @member {Object} transaction
 */

_SolanaTransaction["default"].prototype['transaction'] = undefined;
var _default = GeneralTransaction;
exports["default"] = _default;