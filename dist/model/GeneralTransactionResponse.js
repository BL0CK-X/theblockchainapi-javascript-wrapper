"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EthereumTransactionCompiledResponse = _interopRequireDefault(require("./EthereumTransactionCompiledResponse"));

var _EthereumTransactionMadeResponse = _interopRequireDefault(require("./EthereumTransactionMadeResponse"));

var _SolanaTransactionCompiledResponse = _interopRequireDefault(require("./SolanaTransactionCompiledResponse"));

var _SolanaTransactionMadeResponse = _interopRequireDefault(require("./SolanaTransactionMadeResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GeneralTransactionResponse model module.
 * @module model/GeneralTransactionResponse
 * @version 1.0.9
 */
var GeneralTransactionResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GeneralTransactionResponse</code>.
   * @alias module:model/GeneralTransactionResponse
   * @implements module:model/SolanaTransactionMadeResponse
   * @implements module:model/SolanaTransactionCompiledResponse
   * @implements module:model/EthereumTransactionMadeResponse
   * @implements module:model/EthereumTransactionCompiledResponse
   */
  function GeneralTransactionResponse() {
    _classCallCheck(this, GeneralTransactionResponse);

    _SolanaTransactionMadeResponse["default"].initialize(this);

    _SolanaTransactionCompiledResponse["default"].initialize(this);

    _EthereumTransactionMadeResponse["default"].initialize(this);

    _EthereumTransactionCompiledResponse["default"].initialize(this);

    GeneralTransactionResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GeneralTransactionResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GeneralTransactionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GeneralTransactionResponse} obj Optional instance to populate.
     * @return {module:model/GeneralTransactionResponse} The populated <code>GeneralTransactionResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GeneralTransactionResponse();

        _SolanaTransactionMadeResponse["default"].constructFromObject(data, obj);

        _SolanaTransactionCompiledResponse["default"].constructFromObject(data, obj);

        _EthereumTransactionMadeResponse["default"].constructFromObject(data, obj);

        _EthereumTransactionCompiledResponse["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('transaction_blockchain_identifier')) {
          obj['transaction_blockchain_identifier'] = _ApiClient["default"].convertToType(data['transaction_blockchain_identifier'], 'String');
        }

        if (data.hasOwnProperty('transaction_confirmed')) {
          obj['transaction_confirmed'] = _ApiClient["default"].convertToType(data['transaction_confirmed'], 'Boolean');
        }

        if (data.hasOwnProperty('b58_compiled_transaction')) {
          obj['b58_compiled_transaction'] = _ApiClient["default"].convertToType(data['b58_compiled_transaction'], 'String');
        }

        if (data.hasOwnProperty('compiled_transaction')) {
          obj['compiled_transaction'] = _ApiClient["default"].convertToType(data['compiled_transaction'], Object);
        }

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

  return GeneralTransactionResponse;
}();
/**
 * The identifier of the transaction
 * @member {String} transaction_blockchain_identifier
 */


GeneralTransactionResponse.prototype['transaction_blockchain_identifier'] = undefined;
/**
 * Whether or not the transaction was confirmed
 * @member {Boolean} transaction_confirmed
 */

GeneralTransactionResponse.prototype['transaction_confirmed'] = undefined;
/**
 * A base58 encoded byte array in string representation. Really easy to submit to Phantom. See <a href=\"https://github.com/BL0CK-X/blockchain-api/blob/main/examples/tutorials/phantom_tutorials/transfer_solana.html\" target=\"_blank\">here</a> for an example on how to submit it to a Phantom wallet for signing.
 * @member {String} b58_compiled_transaction
 */

GeneralTransactionResponse.prototype['b58_compiled_transaction'] = undefined;
/**
 * An array of integers representing the bytes of the transaction
 * @member {Object} compiled_transaction
 */

GeneralTransactionResponse.prototype['compiled_transaction'] = undefined;
/**
 * Indicates the chain that the transaction was compiled for (e.g., ropsten or mainnet). 
 * @member {String} chain_id
 */

GeneralTransactionResponse.prototype['chain_id'] = undefined;
/**
 * The transaction data 
 * @member {String} data
 */

GeneralTransactionResponse.prototype['data'] = undefined;
/**
 * The address expected to sign and submit the transaction 
 * @member {String} from
 */

GeneralTransactionResponse.prototype['from'] = undefined;
/**
 * The contract. This should match your provided value for `token_blockchain_identifier`. 
 * @member {String} to
 */

GeneralTransactionResponse.prototype['to'] = undefined;
/**
 * @member {Number} gas
 */

GeneralTransactionResponse.prototype['gas'] = undefined;
/**
 * @member {Number} max_fee_per_gas
 */

GeneralTransactionResponse.prototype['max_fee_per_gas'] = undefined;
/**
 * @member {Number} max_priority_fee_per_gas
 */

GeneralTransactionResponse.prototype['max_priority_fee_per_gas'] = undefined;
/**
 * @member {Number} nonce
 */

GeneralTransactionResponse.prototype['nonce'] = undefined;
/**
 * @member {Number} value
 */

GeneralTransactionResponse.prototype['value'] = undefined; // Implement SolanaTransactionMadeResponse interface:

/**
 * The identifier of the transaction
 * @member {String} transaction_blockchain_identifier
 */

_SolanaTransactionMadeResponse["default"].prototype['transaction_blockchain_identifier'] = undefined;
/**
 * Whether or not the transaction was confirmed
 * @member {Boolean} transaction_confirmed
 */

_SolanaTransactionMadeResponse["default"].prototype['transaction_confirmed'] = undefined; // Implement SolanaTransactionCompiledResponse interface:

/**
 * A base58 encoded byte array in string representation. Really easy to submit to Phantom. See <a href=\"https://github.com/BL0CK-X/blockchain-api/blob/main/examples/tutorials/phantom_tutorials/transfer_solana.html\" target=\"_blank\">here</a> for an example on how to submit it to a Phantom wallet for signing.
 * @member {String} b58_compiled_transaction
 */

_SolanaTransactionCompiledResponse["default"].prototype['b58_compiled_transaction'] = undefined;
/**
 * An array of integers representing the bytes of the transaction
 * @member {Object} compiled_transaction
 */

_SolanaTransactionCompiledResponse["default"].prototype['compiled_transaction'] = undefined; // Implement EthereumTransactionMadeResponse interface:

/**
 * The identifier of the transaction
 * @member {String} transaction_blockchain_identifier
 */

_EthereumTransactionMadeResponse["default"].prototype['transaction_blockchain_identifier'] = undefined;
/**
 * Whether or not the transaction was confirmed
 * @member {Boolean} transaction_confirmed
 */

_EthereumTransactionMadeResponse["default"].prototype['transaction_confirmed'] = undefined; // Implement EthereumTransactionCompiledResponse interface:

/**
 * Indicates the chain that the transaction was compiled for (e.g., ropsten or mainnet). 
 * @member {String} chain_id
 */

_EthereumTransactionCompiledResponse["default"].prototype['chain_id'] = undefined;
/**
 * The transaction data 
 * @member {String} data
 */

_EthereumTransactionCompiledResponse["default"].prototype['data'] = undefined;
/**
 * The address expected to sign and submit the transaction 
 * @member {String} from
 */

_EthereumTransactionCompiledResponse["default"].prototype['from'] = undefined;
/**
 * The contract. This should match your provided value for `token_blockchain_identifier`. 
 * @member {String} to
 */

_EthereumTransactionCompiledResponse["default"].prototype['to'] = undefined;
/**
 * @member {Number} gas
 */

_EthereumTransactionCompiledResponse["default"].prototype['gas'] = undefined;
/**
 * @member {Number} max_fee_per_gas
 */

_EthereumTransactionCompiledResponse["default"].prototype['max_fee_per_gas'] = undefined;
/**
 * @member {Number} max_priority_fee_per_gas
 */

_EthereumTransactionCompiledResponse["default"].prototype['max_priority_fee_per_gas'] = undefined;
/**
 * @member {Number} nonce
 */

_EthereumTransactionCompiledResponse["default"].prototype['nonce'] = undefined;
/**
 * @member {Number} value
 */

_EthereumTransactionCompiledResponse["default"].prototype['value'] = undefined;
var _default = GeneralTransactionResponse;
exports["default"] = _default;