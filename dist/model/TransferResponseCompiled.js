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
 * The TransferResponseCompiled model module.
 * @module model/TransferResponseCompiled
 * @version 1.0.9407
 */
var TransferResponseCompiled = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransferResponseCompiled</code>.
   * @alias module:model/TransferResponseCompiled
   */
  function TransferResponseCompiled() {
    _classCallCheck(this, TransferResponseCompiled);

    TransferResponseCompiled.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransferResponseCompiled, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransferResponseCompiled</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransferResponseCompiled} obj Optional instance to populate.
     * @return {module:model/TransferResponseCompiled} The populated <code>TransferResponseCompiled</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransferResponseCompiled();

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

  return TransferResponseCompiled;
}();
/**
 * A base58 encoded byte array in string representation. Really easy to submit to Phantom. See <a href=\"https://github.com/BL0CK-X/blockchain-api/blob/main/examples/tutorials/phantom_tutorials/transfer_solana.html\" target=\"_blank\">here</a> for an example on how to submit it to a Phantom wallet for signing.
 * @member {String} b58_compiled_transaction
 */


TransferResponseCompiled.prototype['b58_compiled_transaction'] = undefined;
/**
 * An array of integers representing the bytes of the transaction
 * @member {Object} compiled_transaction
 */

TransferResponseCompiled.prototype['compiled_transaction'] = undefined;
var _default = TransferResponseCompiled;
exports["default"] = _default;