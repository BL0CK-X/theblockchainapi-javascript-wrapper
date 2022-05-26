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
 * The SolanaPublicKey model module.
 * @module model/SolanaPublicKey
 * @version 1.0.9
 */
var SolanaPublicKey = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SolanaPublicKey</code>.
   * @alias module:model/SolanaPublicKey
   */
  function SolanaPublicKey() {
    _classCallCheck(this, SolanaPublicKey);

    SolanaPublicKey.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SolanaPublicKey, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SolanaPublicKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SolanaPublicKey} obj Optional instance to populate.
     * @return {module:model/SolanaPublicKey} The populated <code>SolanaPublicKey</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SolanaPublicKey();

        if (data.hasOwnProperty('public_key')) {
          obj['public_key'] = _ApiClient["default"].convertToType(data['public_key'], 'String');
        }

        if (data.hasOwnProperty('hex_public_key')) {
          obj['hex_public_key'] = _ApiClient["default"].convertToType(data['hex_public_key'], 'String');
        }

        if (data.hasOwnProperty('hex_public_address')) {
          obj['hex_public_address'] = _ApiClient["default"].convertToType(data['hex_public_address'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SolanaPublicKey;
}();
/**
 * The public key in base58 form. This is used in the Solana blockchain. (e.g., `3Gdu3Uf97jw4Kac8xHEm5Hqmob3BrvJhf3We8s9t5Q2c`) 
 * @member {String} public_key
 */


SolanaPublicKey.prototype['public_key'] = undefined;
/**
 * The public key in hex form. This is used in the Near blockchain. (e.g., `0xdf96e3094ab33558dbe14e743aceded3779307b931e12bd6f526fe450db70910`) 
 * @member {String} hex_public_key
 */

SolanaPublicKey.prototype['hex_public_key'] = undefined;
/**
 * The public address in hex form of the wallet. This is commonly used in Ethereum, Binance, and Avalanche C-Chain. (e.g., `0xB2b2d42C3adA171633E36b427F062f85A642F453`) 
 * @member {String} hex_public_address
 */

SolanaPublicKey.prototype['hex_public_address'] = undefined;
var _default = SolanaPublicKey;
exports["default"] = _default;