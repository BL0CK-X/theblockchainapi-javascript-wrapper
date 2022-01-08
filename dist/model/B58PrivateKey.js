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
 * The B58PrivateKey model module.
 * @module model/B58PrivateKey
 * @version 1.0.9
 */
var B58PrivateKey = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>B58PrivateKey</code>.
   * @alias module:model/B58PrivateKey
   * @param b58PrivateKey {String} A private key corresponds to exactly one public key address. A private key can be used to move assets out of the wallet and sign transaction with the corresponding public key.  A base58-encoded private key is a base58-encoded version of the typical private key. It is represented as a string (e.g., `4waBTVeAVWEAczSdx36uMrR19668ACgQDs7r386vrUes3UCzvXCQ2FPSCVGb1zJrwcULgpNzgABreyQaWSpGBwfx`).  <a href=\"https://phantom.app\" target=\"_blank\">Phantom</a> is a popular wallet interface on Solana that allows you to export your private key in this format.
   */
  function B58PrivateKey(b58PrivateKey) {
    _classCallCheck(this, B58PrivateKey);

    B58PrivateKey.initialize(this, b58PrivateKey);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(B58PrivateKey, null, [{
    key: "initialize",
    value: function initialize(obj, b58PrivateKey) {
      obj['b58_private_key'] = b58PrivateKey;
    }
    /**
     * Constructs a <code>B58PrivateKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/B58PrivateKey} obj Optional instance to populate.
     * @return {module:model/B58PrivateKey} The populated <code>B58PrivateKey</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new B58PrivateKey();

        if (data.hasOwnProperty('b58_private_key')) {
          obj['b58_private_key'] = _ApiClient["default"].convertToType(data['b58_private_key'], 'String');
        }
      }

      return obj;
    }
  }]);

  return B58PrivateKey;
}();
/**
 * A private key corresponds to exactly one public key address. A private key can be used to move assets out of the wallet and sign transaction with the corresponding public key.  A base58-encoded private key is a base58-encoded version of the typical private key. It is represented as a string (e.g., `4waBTVeAVWEAczSdx36uMrR19668ACgQDs7r386vrUes3UCzvXCQ2FPSCVGb1zJrwcULgpNzgABreyQaWSpGBwfx`).  <a href=\"https://phantom.app\" target=\"_blank\">Phantom</a> is a popular wallet interface on Solana that allows you to export your private key in this format.
 * @member {String} b58_private_key
 */


B58PrivateKey.prototype['b58_private_key'] = undefined;
var _default = B58PrivateKey;
exports["default"] = _default;