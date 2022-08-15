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
 * The SolanaTransactionCompiledResponse model module.
 * @module model/SolanaTransactionCompiledResponse
 * @version 1.0.9407
 */
var SolanaTransactionCompiledResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SolanaTransactionCompiledResponse</code>.
   * @alias module:model/SolanaTransactionCompiledResponse
   */
  function SolanaTransactionCompiledResponse() {
    _classCallCheck(this, SolanaTransactionCompiledResponse);

    SolanaTransactionCompiledResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SolanaTransactionCompiledResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SolanaTransactionCompiledResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SolanaTransactionCompiledResponse} obj Optional instance to populate.
     * @return {module:model/SolanaTransactionCompiledResponse} The populated <code>SolanaTransactionCompiledResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SolanaTransactionCompiledResponse();

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

  return SolanaTransactionCompiledResponse;
}();
/**
 * A base58 encoded byte array in string representation. Really easy to submit to Phantom. See <a href=\"https://github.com/BL0CK-X/blockchain-api/blob/main/examples/tutorials/phantom_tutorials/transfer_solana.html\" target=\"_blank\">here</a> for an example on how to submit it to a Phantom wallet for signing.
 * @member {String} b58_compiled_transaction
 */


SolanaTransactionCompiledResponse.prototype['b58_compiled_transaction'] = undefined;
/**
 * An array of integers representing the bytes of the transaction
 * @member {Object} compiled_transaction
 */

SolanaTransactionCompiledResponse.prototype['compiled_transaction'] = undefined;
var _default = SolanaTransactionCompiledResponse;
exports["default"] = _default;