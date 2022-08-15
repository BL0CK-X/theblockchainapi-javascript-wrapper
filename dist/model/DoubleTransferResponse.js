"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransferResponse = _interopRequireDefault(require("./TransferResponse"));

var _TransferResponseCompiled = _interopRequireDefault(require("./TransferResponseCompiled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The DoubleTransferResponse model module.
 * @module model/DoubleTransferResponse
 * @version 1.0.9407
 */
var DoubleTransferResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DoubleTransferResponse</code>.
   * @alias module:model/DoubleTransferResponse
   * @implements module:model/TransferResponse
   * @implements module:model/TransferResponseCompiled
   */
  function DoubleTransferResponse() {
    _classCallCheck(this, DoubleTransferResponse);

    _TransferResponse["default"].initialize(this);

    _TransferResponseCompiled["default"].initialize(this);

    DoubleTransferResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DoubleTransferResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DoubleTransferResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DoubleTransferResponse} obj Optional instance to populate.
     * @return {module:model/DoubleTransferResponse} The populated <code>DoubleTransferResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DoubleTransferResponse();

        _TransferResponse["default"].constructFromObject(data, obj);

        _TransferResponseCompiled["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('transaction_signature')) {
          obj['transaction_signature'] = _ApiClient["default"].convertToType(data['transaction_signature'], 'String');
        }

        if (data.hasOwnProperty('confirmed')) {
          obj['confirmed'] = _ApiClient["default"].convertToType(data['confirmed'], 'Boolean');
        }

        if (data.hasOwnProperty('b58_compiled_transaction')) {
          obj['b58_compiled_transaction'] = _ApiClient["default"].convertToType(data['b58_compiled_transaction'], 'String');
        }

        if (data.hasOwnProperty('compiled_transaction')) {
          obj['compiled_transaction'] = _ApiClient["default"].convertToType(data['compiled_transaction'], Object);
        }
      }

      return obj;
    }
  }]);

  return DoubleTransferResponse;
}();
/**
 * The signature of the transaction
 * @member {String} transaction_signature
 */


DoubleTransferResponse.prototype['transaction_signature'] = undefined;
/**
 * Whether or not the transaction was confirmed or simply submitted for processing. The status depends on your input for `wait_for_confirmation`. This only is returned when you are submitting a transaction, not when retrieving signatures for a public key, for example.
 * @member {Boolean} confirmed
 */

DoubleTransferResponse.prototype['confirmed'] = undefined;
/**
 * A base58 encoded byte array in string representation. Really easy to submit to Phantom. See <a href=\"https://github.com/BL0CK-X/blockchain-api/blob/main/examples/tutorials/phantom_tutorials/transfer_solana.html\" target=\"_blank\">here</a> for an example on how to submit it to a Phantom wallet for signing.
 * @member {String} b58_compiled_transaction
 */

DoubleTransferResponse.prototype['b58_compiled_transaction'] = undefined;
/**
 * An array of integers representing the bytes of the transaction
 * @member {Object} compiled_transaction
 */

DoubleTransferResponse.prototype['compiled_transaction'] = undefined; // Implement TransferResponse interface:

/**
 * The signature of the transaction
 * @member {String} transaction_signature
 */

_TransferResponse["default"].prototype['transaction_signature'] = undefined;
/**
 * Whether or not the transaction was confirmed or simply submitted for processing. The status depends on your input for `wait_for_confirmation`. This only is returned when you are submitting a transaction, not when retrieving signatures for a public key, for example.
 * @member {Boolean} confirmed
 */

_TransferResponse["default"].prototype['confirmed'] = undefined; // Implement TransferResponseCompiled interface:

/**
 * A base58 encoded byte array in string representation. Really easy to submit to Phantom. See <a href=\"https://github.com/BL0CK-X/blockchain-api/blob/main/examples/tutorials/phantom_tutorials/transfer_solana.html\" target=\"_blank\">here</a> for an example on how to submit it to a Phantom wallet for signing.
 * @member {String} b58_compiled_transaction
 */

_TransferResponseCompiled["default"].prototype['b58_compiled_transaction'] = undefined;
/**
 * An array of integers representing the bytes of the transaction
 * @member {Object} compiled_transaction
 */

_TransferResponseCompiled["default"].prototype['compiled_transaction'] = undefined;
var _default = DoubleTransferResponse;
exports["default"] = _default;