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
 * The GeneralSecretPhrase model module.
 * @module model/GeneralSecretPhrase
 * @version 1.0.9407
 */
var GeneralSecretPhrase = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GeneralSecretPhrase</code>.
   * @alias module:model/GeneralSecretPhrase
   */
  function GeneralSecretPhrase() {
    _classCallCheck(this, GeneralSecretPhrase);

    GeneralSecretPhrase.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GeneralSecretPhrase, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GeneralSecretPhrase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GeneralSecretPhrase} obj Optional instance to populate.
     * @return {module:model/GeneralSecretPhrase} The populated <code>GeneralSecretPhrase</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GeneralSecretPhrase();

        if (data.hasOwnProperty('secret_recovery_phrase')) {
          obj['secret_recovery_phrase'] = _ApiClient["default"].convertToType(data['secret_recovery_phrase'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GeneralSecretPhrase;
}();
/**
 * The 12, 15, 18, 21, or 24 word phrase that can be used to derive many public key addresses (e.g., bottom army bless castle alter habit dish embody child flame smooth zone).  To derive a wallet identifier (e.g., public key, public address, etc.), you need a secret recovery phrase, a derivation path, and an optional passphrase.   Alternatively, you can derive a wallet identifier with a private key.  Default Lengths: - Avalanche (C): 24 - Avalanche (X, P): 24 - Binance: 12 - Ethereum: 12 - Near: 12 - Solana: 12  You can use `secret_recovery_phrase` for Chains: `avalanche`, `binance`, `ethereum`, `near`, `solana`.
 * @member {String} secret_recovery_phrase
 */


GeneralSecretPhrase.prototype['secret_recovery_phrase'] = undefined;
var _default = GeneralSecretPhrase;
exports["default"] = _default;