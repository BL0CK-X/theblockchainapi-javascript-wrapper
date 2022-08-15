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
 * The SecretRecoveryPhrase model module.
 * @module model/SecretRecoveryPhrase
 * @version 1.0.9407
 */
var SecretRecoveryPhrase = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SecretRecoveryPhrase</code>.
   * @alias module:model/SecretRecoveryPhrase
   * @param secretRecoveryPhrase {String} The twelve word phrase that can be used to derive many public key addresses (e.g., bottom army bless castle alter habit dish embody child flame smooth zone).  To derive a public key, you need a secret recovery phrase, a derivation path, and an optional passphrase.   Alternatively, you can derive a public key with a private key.
   */
  function SecretRecoveryPhrase(secretRecoveryPhrase) {
    _classCallCheck(this, SecretRecoveryPhrase);

    SecretRecoveryPhrase.initialize(this, secretRecoveryPhrase);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SecretRecoveryPhrase, null, [{
    key: "initialize",
    value: function initialize(obj, secretRecoveryPhrase) {
      obj['secret_recovery_phrase'] = secretRecoveryPhrase;
    }
    /**
     * Constructs a <code>SecretRecoveryPhrase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecretRecoveryPhrase} obj Optional instance to populate.
     * @return {module:model/SecretRecoveryPhrase} The populated <code>SecretRecoveryPhrase</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SecretRecoveryPhrase();

        if (data.hasOwnProperty('secret_recovery_phrase')) {
          obj['secret_recovery_phrase'] = _ApiClient["default"].convertToType(data['secret_recovery_phrase'], 'String');
        }

        if (data.hasOwnProperty('derivation_path')) {
          obj['derivation_path'] = _ApiClient["default"].convertToType(data['derivation_path'], 'String');
        }

        if (data.hasOwnProperty('passphrase')) {
          obj['passphrase'] = _ApiClient["default"].convertToType(data['passphrase'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SecretRecoveryPhrase;
}();
/**
 * The twelve word phrase that can be used to derive many public key addresses (e.g., bottom army bless castle alter habit dish embody child flame smooth zone).  To derive a public key, you need a secret recovery phrase, a derivation path, and an optional passphrase.   Alternatively, you can derive a public key with a private key.
 * @member {String} secret_recovery_phrase
 */


SecretRecoveryPhrase.prototype['secret_recovery_phrase'] = undefined;
/**
 * Derivation paths are used to derive the public key from the secret recovery phrase. Only certain paths are accepted.  If you provide the empty string \"\" as the value for the derivation path, then we will derive your public key with the same behavior as the default behavior of the Solana CLI.  By default, we use \"m/44/501/0/0\". This is the path that the Phantom and Sollet wallets use.  You can also arbitrarily increment the default path (\"m/44/501/0/0\") to generate more wallets (e.g., \"m/44/501/0/1\", \"m/44/501/0/2\", ... AND/OR \"m/44/501/1/0\", \"m/44/501/2/0\", ...).  Phantom's Wallet increments the first digit (e.g., \"m/44/501/0/0\", \"m/44/501/1/0\", \"m/44/501/2/0\", ...) to generate more public key addresses.  The SolFlare recommended path is \"m/44/501/0\".  To learn more about derivation paths, check out <a href=\"https://learnmeabitcoin.com/technical/derivation-paths\" target=\"_blank\">this tutorial</a>.
 * @member {String} derivation_path
 * @default 'm/44/501/0/0'
 */

SecretRecoveryPhrase.prototype['derivation_path'] = 'm/44/501/0/0';
/**
 * PASSPHRASE != PASSWORD. This is NOT your Phantom password or any other password. It is an optional string you use when creating a wallet. This provides an additional layer of security because a hacker would need both the secret recovery phrase and the passphrase to access the output public key. By default, most wallet UI extensions do not use a passphrase. (You probably did not use a passphrase.) Limited to 500 characters. 
 * @member {String} passphrase
 * @default ''
 */

SecretRecoveryPhrase.prototype['passphrase'] = '';
var _default = SecretRecoveryPhrase;
exports["default"] = _default;