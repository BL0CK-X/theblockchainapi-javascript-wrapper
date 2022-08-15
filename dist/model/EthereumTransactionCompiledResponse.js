"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EthereumTransactionCompiledResponse model module.
 * @module model/EthereumTransactionCompiledResponse
 * @version 1.0.9407
 */
var EthereumTransactionCompiledResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EthereumTransactionCompiledResponse</code>.
   * @alias module:model/EthereumTransactionCompiledResponse
   */
  function EthereumTransactionCompiledResponse() {
    _classCallCheck(this, EthereumTransactionCompiledResponse);

    EthereumTransactionCompiledResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EthereumTransactionCompiledResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EthereumTransactionCompiledResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EthereumTransactionCompiledResponse} obj Optional instance to populate.
     * @return {module:model/EthereumTransactionCompiledResponse} The populated <code>EthereumTransactionCompiledResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EthereumTransactionCompiledResponse();

        if (data.hasOwnProperty('chain_id')) {
          obj['chain_id'] = _ApiClient["default"].convertToType(data['chain_id'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], 'String');
        }

        if (data.hasOwnProperty('from')) {
          obj['from'] = _ApiClient["default"].convertToType(data['from'], 'String');
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], 'String');
        }

        if (data.hasOwnProperty('gas')) {
          obj['gas'] = _ApiClient["default"].convertToType(data['gas'], 'Number');
        }

        if (data.hasOwnProperty('max_fee_per_gas')) {
          obj['max_fee_per_gas'] = _ApiClient["default"].convertToType(data['max_fee_per_gas'], 'Number');
        }

        if (data.hasOwnProperty('max_priority_fee_per_gas')) {
          obj['max_priority_fee_per_gas'] = _ApiClient["default"].convertToType(data['max_priority_fee_per_gas'], 'Number');
        }

        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'Number');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EthereumTransactionCompiledResponse;
}();
/**
 * Indicates the chain that the transaction was compiled for (e.g., ropsten or mainnet). 
 * @member {String} chain_id
 */


EthereumTransactionCompiledResponse.prototype['chain_id'] = undefined;
/**
 * The transaction data 
 * @member {String} data
 */

EthereumTransactionCompiledResponse.prototype['data'] = undefined;
/**
 * The address expected to sign and submit the transaction 
 * @member {String} from
 */

EthereumTransactionCompiledResponse.prototype['from'] = undefined;
/**
 * The contract. This should match your provided value for `token_blockchain_identifier`. 
 * @member {String} to
 */

EthereumTransactionCompiledResponse.prototype['to'] = undefined;
/**
 * @member {Number} gas
 */

EthereumTransactionCompiledResponse.prototype['gas'] = undefined;
/**
 * @member {Number} max_fee_per_gas
 */

EthereumTransactionCompiledResponse.prototype['max_fee_per_gas'] = undefined;
/**
 * @member {Number} max_priority_fee_per_gas
 */

EthereumTransactionCompiledResponse.prototype['max_priority_fee_per_gas'] = undefined;
/**
 * @member {Number} nonce
 */

EthereumTransactionCompiledResponse.prototype['nonce'] = undefined;
/**
 * @member {Number} value
 */

EthereumTransactionCompiledResponse.prototype['value'] = undefined;
var _default = EthereumTransactionCompiledResponse;
exports["default"] = _default;