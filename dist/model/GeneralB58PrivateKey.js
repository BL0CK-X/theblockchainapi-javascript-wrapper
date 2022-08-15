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
 * The GeneralB58PrivateKey model module.
 * @module model/GeneralB58PrivateKey
 * @version 1.0.9407
 */
var GeneralB58PrivateKey = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GeneralB58PrivateKey</code>.
   * @alias module:model/GeneralB58PrivateKey
   * @param b58PrivateKey {String} A private key corresponds to exactly one public key address. A private key can be used to move assets out of the wallet and sign transaction with the corresponding public key.  A base58-encoded private key is a base58-encoded version of the typical private key. It is represented as a string (e.g., `4waBTVeAVWEAczSdx36uMrR19668ACgQDs7r386vrUes3UCzvXCQ2FPSCVGb1zJrwcULgpNzgABreyQaWSpGBwfx`).  <a href=\"https://phantom.app\" target=\"_blank\">Phantom</a> is a popular wallet interface on Solana that allows you to export your private key in this format.  You can use `b58_private_key` for Chains: `solana`, `near`
   */
  function GeneralB58PrivateKey(b58PrivateKey) {
    _classCallCheck(this, GeneralB58PrivateKey);

    GeneralB58PrivateKey.initialize(this, b58PrivateKey);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GeneralB58PrivateKey, null, [{
    key: "initialize",
    value: function initialize(obj, b58PrivateKey) {
      obj['b58_private_key'] = b58PrivateKey;
    }
    /**
     * Constructs a <code>GeneralB58PrivateKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GeneralB58PrivateKey} obj Optional instance to populate.
     * @return {module:model/GeneralB58PrivateKey} The populated <code>GeneralB58PrivateKey</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GeneralB58PrivateKey();

        if (data.hasOwnProperty('b58_private_key')) {
          obj['b58_private_key'] = _ApiClient["default"].convertToType(data['b58_private_key'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GeneralB58PrivateKey;
}();
/**
 * A private key corresponds to exactly one public key address. A private key can be used to move assets out of the wallet and sign transaction with the corresponding public key.  A base58-encoded private key is a base58-encoded version of the typical private key. It is represented as a string (e.g., `4waBTVeAVWEAczSdx36uMrR19668ACgQDs7r386vrUes3UCzvXCQ2FPSCVGb1zJrwcULgpNzgABreyQaWSpGBwfx`).  <a href=\"https://phantom.app\" target=\"_blank\">Phantom</a> is a popular wallet interface on Solana that allows you to export your private key in this format.  You can use `b58_private_key` for Chains: `solana`, `near`
 * @member {String} b58_private_key
 */


GeneralB58PrivateKey.prototype['b58_private_key'] = undefined;
var _default = GeneralB58PrivateKey;
exports["default"] = _default;