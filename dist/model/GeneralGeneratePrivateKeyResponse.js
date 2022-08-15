"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GeneralB58PrivateKey = _interopRequireDefault(require("./GeneralB58PrivateKey"));

var _GeneralPrivateKey = _interopRequireDefault(require("./GeneralPrivateKey"));

var _HexPrivateKey = _interopRequireDefault(require("./HexPrivateKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GeneralGeneratePrivateKeyResponse model module.
 * @module model/GeneralGeneratePrivateKeyResponse
 * @version 1.0.9407
 */
var GeneralGeneratePrivateKeyResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GeneralGeneratePrivateKeyResponse</code>.
   * @alias module:model/GeneralGeneratePrivateKeyResponse
   * @implements module:model/HexPrivateKey
   * @implements module:model/GeneralPrivateKey
   * @implements module:model/GeneralB58PrivateKey
   * @param hexPrivateKey {String} A hex private key is the typical private key used on Ethereum, for example. It looks like this: `0x200b9e5baa38b0dc7551645be11b394e9bf2b04532e4af8824bed2b3de2e0dc0`.  You can use `hex_private_key` for chains: `avalanche`, `binance_smart_chain`, `ethereum`.
   * @param privateKey {Object} A private key corresponds to exactly one public key address. A private key can be used to move assets out of the wallet and sign transaction with the corresponding public key.  A private key is an array of integers (e.g.,   `[185,108,153,165,57,193,166,167,58,148,133,121,92,252,242,13,233,246,35,103,185,20,27,56,111,169,12,50,50,36,83,156,173,195,143,75,135,78,204,129,217,231,58,129,69,180,185,86,119,43,200,193,94,112,31,135,68,128,207,26,85,150,68,181]`).  <a href=\"https://solflare.com\" target=\"_blank\">Solflare</a> is a popular wallet interface on Solana that allows you to export your private key in this format.  You can use `private_key` for Chains: `avalanche`, `binance_smart_chain`, `ethereum`, `solana`, `near`.
   * @param b58PrivateKey {String} A private key corresponds to exactly one public key address. A private key can be used to move assets out of the wallet and sign transaction with the corresponding public key.  A base58-encoded private key is a base58-encoded version of the typical private key. It is represented as a string (e.g., `4waBTVeAVWEAczSdx36uMrR19668ACgQDs7r386vrUes3UCzvXCQ2FPSCVGb1zJrwcULgpNzgABreyQaWSpGBwfx`).  <a href=\"https://phantom.app\" target=\"_blank\">Phantom</a> is a popular wallet interface on Solana that allows you to export your private key in this format.  You can use `b58_private_key` for Chains: `solana`, `near`
   */
  function GeneralGeneratePrivateKeyResponse(hexPrivateKey, privateKey, b58PrivateKey) {
    _classCallCheck(this, GeneralGeneratePrivateKeyResponse);

    _HexPrivateKey["default"].initialize(this, hexPrivateKey);

    _GeneralPrivateKey["default"].initialize(this, privateKey);

    _GeneralB58PrivateKey["default"].initialize(this, b58PrivateKey);

    GeneralGeneratePrivateKeyResponse.initialize(this, hexPrivateKey, privateKey, b58PrivateKey);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GeneralGeneratePrivateKeyResponse, null, [{
    key: "initialize",
    value: function initialize(obj, hexPrivateKey, privateKey, b58PrivateKey) {
      obj['hex_private_key'] = hexPrivateKey;
      obj['private_key'] = privateKey;
      obj['b58_private_key'] = b58PrivateKey;
    }
    /**
     * Constructs a <code>GeneralGeneratePrivateKeyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GeneralGeneratePrivateKeyResponse} obj Optional instance to populate.
     * @return {module:model/GeneralGeneratePrivateKeyResponse} The populated <code>GeneralGeneratePrivateKeyResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GeneralGeneratePrivateKeyResponse();

        _HexPrivateKey["default"].constructFromObject(data, obj);

        _GeneralPrivateKey["default"].constructFromObject(data, obj);

        _GeneralB58PrivateKey["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('hex_private_key')) {
          obj['hex_private_key'] = _ApiClient["default"].convertToType(data['hex_private_key'], 'String');
        }

        if (data.hasOwnProperty('private_key')) {
          obj['private_key'] = _ApiClient["default"].convertToType(data['private_key'], Object);
        }

        if (data.hasOwnProperty('b58_private_key')) {
          obj['b58_private_key'] = _ApiClient["default"].convertToType(data['b58_private_key'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GeneralGeneratePrivateKeyResponse;
}();
/**
 * A hex private key is the typical private key used on Ethereum, for example. It looks like this: `0x200b9e5baa38b0dc7551645be11b394e9bf2b04532e4af8824bed2b3de2e0dc0`.  You can use `hex_private_key` for chains: `avalanche`, `binance_smart_chain`, `ethereum`.
 * @member {String} hex_private_key
 */


GeneralGeneratePrivateKeyResponse.prototype['hex_private_key'] = undefined;
/**
 * A private key corresponds to exactly one public key address. A private key can be used to move assets out of the wallet and sign transaction with the corresponding public key.  A private key is an array of integers (e.g.,   `[185,108,153,165,57,193,166,167,58,148,133,121,92,252,242,13,233,246,35,103,185,20,27,56,111,169,12,50,50,36,83,156,173,195,143,75,135,78,204,129,217,231,58,129,69,180,185,86,119,43,200,193,94,112,31,135,68,128,207,26,85,150,68,181]`).  <a href=\"https://solflare.com\" target=\"_blank\">Solflare</a> is a popular wallet interface on Solana that allows you to export your private key in this format.  You can use `private_key` for Chains: `avalanche`, `binance_smart_chain`, `ethereum`, `solana`, `near`.
 * @member {Object} private_key
 */

GeneralGeneratePrivateKeyResponse.prototype['private_key'] = undefined;
/**
 * A private key corresponds to exactly one public key address. A private key can be used to move assets out of the wallet and sign transaction with the corresponding public key.  A base58-encoded private key is a base58-encoded version of the typical private key. It is represented as a string (e.g., `4waBTVeAVWEAczSdx36uMrR19668ACgQDs7r386vrUes3UCzvXCQ2FPSCVGb1zJrwcULgpNzgABreyQaWSpGBwfx`).  <a href=\"https://phantom.app\" target=\"_blank\">Phantom</a> is a popular wallet interface on Solana that allows you to export your private key in this format.  You can use `b58_private_key` for Chains: `solana`, `near`
 * @member {String} b58_private_key
 */

GeneralGeneratePrivateKeyResponse.prototype['b58_private_key'] = undefined; // Implement HexPrivateKey interface:

/**
 * A hex private key is the typical private key used on Ethereum, for example. It looks like this: `0x200b9e5baa38b0dc7551645be11b394e9bf2b04532e4af8824bed2b3de2e0dc0`.  You can use `hex_private_key` for chains: `avalanche`, `binance_smart_chain`, `ethereum`.
 * @member {String} hex_private_key
 */

_HexPrivateKey["default"].prototype['hex_private_key'] = undefined; // Implement GeneralPrivateKey interface:

/**
 * A private key corresponds to exactly one public key address. A private key can be used to move assets out of the wallet and sign transaction with the corresponding public key.  A private key is an array of integers (e.g.,   `[185,108,153,165,57,193,166,167,58,148,133,121,92,252,242,13,233,246,35,103,185,20,27,56,111,169,12,50,50,36,83,156,173,195,143,75,135,78,204,129,217,231,58,129,69,180,185,86,119,43,200,193,94,112,31,135,68,128,207,26,85,150,68,181]`).  <a href=\"https://solflare.com\" target=\"_blank\">Solflare</a> is a popular wallet interface on Solana that allows you to export your private key in this format.  You can use `private_key` for Chains: `avalanche`, `binance_smart_chain`, `ethereum`, `solana`, `near`.
 * @member {Object} private_key
 */

_GeneralPrivateKey["default"].prototype['private_key'] = undefined; // Implement GeneralB58PrivateKey interface:

/**
 * A private key corresponds to exactly one public key address. A private key can be used to move assets out of the wallet and sign transaction with the corresponding public key.  A base58-encoded private key is a base58-encoded version of the typical private key. It is represented as a string (e.g., `4waBTVeAVWEAczSdx36uMrR19668ACgQDs7r386vrUes3UCzvXCQ2FPSCVGb1zJrwcULgpNzgABreyQaWSpGBwfx`).  <a href=\"https://phantom.app\" target=\"_blank\">Phantom</a> is a popular wallet interface on Solana that allows you to export your private key in this format.  You can use `b58_private_key` for Chains: `solana`, `near`
 * @member {String} b58_private_key
 */

_GeneralB58PrivateKey["default"].prototype['b58_private_key'] = undefined;
var _default = GeneralGeneratePrivateKeyResponse;
exports["default"] = _default;