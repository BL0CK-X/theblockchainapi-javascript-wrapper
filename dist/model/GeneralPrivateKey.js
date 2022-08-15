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
 * The GeneralPrivateKey model module.
 * @module model/GeneralPrivateKey
 * @version 1.0.9407
 */
var GeneralPrivateKey = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GeneralPrivateKey</code>.
   * @alias module:model/GeneralPrivateKey
   * @param privateKey {Object} A private key corresponds to exactly one public key address. A private key can be used to move assets out of the wallet and sign transaction with the corresponding public key.  A private key is an array of integers (e.g.,   `[185,108,153,165,57,193,166,167,58,148,133,121,92,252,242,13,233,246,35,103,185,20,27,56,111,169,12,50,50,36,83,156,173,195,143,75,135,78,204,129,217,231,58,129,69,180,185,86,119,43,200,193,94,112,31,135,68,128,207,26,85,150,68,181]`).  <a href=\"https://solflare.com\" target=\"_blank\">Solflare</a> is a popular wallet interface on Solana that allows you to export your private key in this format.  You can use `private_key` for Chains: `avalanche`, `binance_smart_chain`, `ethereum`, `solana`, `near`.
   */
  function GeneralPrivateKey(privateKey) {
    _classCallCheck(this, GeneralPrivateKey);

    GeneralPrivateKey.initialize(this, privateKey);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GeneralPrivateKey, null, [{
    key: "initialize",
    value: function initialize(obj, privateKey) {
      obj['private_key'] = privateKey;
    }
    /**
     * Constructs a <code>GeneralPrivateKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GeneralPrivateKey} obj Optional instance to populate.
     * @return {module:model/GeneralPrivateKey} The populated <code>GeneralPrivateKey</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GeneralPrivateKey();

        if (data.hasOwnProperty('private_key')) {
          obj['private_key'] = _ApiClient["default"].convertToType(data['private_key'], Object);
        }
      }

      return obj;
    }
  }]);

  return GeneralPrivateKey;
}();
/**
 * A private key corresponds to exactly one public key address. A private key can be used to move assets out of the wallet and sign transaction with the corresponding public key.  A private key is an array of integers (e.g.,   `[185,108,153,165,57,193,166,167,58,148,133,121,92,252,242,13,233,246,35,103,185,20,27,56,111,169,12,50,50,36,83,156,173,195,143,75,135,78,204,129,217,231,58,129,69,180,185,86,119,43,200,193,94,112,31,135,68,128,207,26,85,150,68,181]`).  <a href=\"https://solflare.com\" target=\"_blank\">Solflare</a> is a popular wallet interface on Solana that allows you to export your private key in this format.  You can use `private_key` for Chains: `avalanche`, `binance_smart_chain`, `ethereum`, `solana`, `near`.
 * @member {Object} private_key
 */


GeneralPrivateKey.prototype['private_key'] = undefined;
var _default = GeneralPrivateKey;
exports["default"] = _default;