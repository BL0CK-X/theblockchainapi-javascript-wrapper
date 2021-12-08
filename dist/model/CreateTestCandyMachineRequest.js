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
 * The CreateTestCandyMachineRequest model module.
 * @module model/CreateTestCandyMachineRequest
 * @version 1.0.9
 */
var CreateTestCandyMachineRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateTestCandyMachineRequest</code>.
   * @alias module:model/CreateTestCandyMachineRequest
   * @param secretRecoveryPhrase {String} The twelve word phrase that can be used to derive many public key addresses. To derive a public key, you need a secret recovery phrase, a derivation path, and an optional passphrase. See our Security section <a href=\"#section/Security\">here</a>.
   */
  function CreateTestCandyMachineRequest(secretRecoveryPhrase) {
    _classCallCheck(this, CreateTestCandyMachineRequest);

    CreateTestCandyMachineRequest.initialize(this, secretRecoveryPhrase);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateTestCandyMachineRequest, null, [{
    key: "initialize",
    value: function initialize(obj, secretRecoveryPhrase) {
      obj['secret_recovery_phrase'] = secretRecoveryPhrase;
    }
    /**
     * Constructs a <code>CreateTestCandyMachineRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTestCandyMachineRequest} obj Optional instance to populate.
     * @return {module:model/CreateTestCandyMachineRequest} The populated <code>CreateTestCandyMachineRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTestCandyMachineRequest();

        if (data.hasOwnProperty('secret_recovery_phrase')) {
          obj['secret_recovery_phrase'] = _ApiClient["default"].convertToType(data['secret_recovery_phrase'], 'String');
        }

        if (data.hasOwnProperty('derivation_path')) {
          obj['derivation_path'] = _ApiClient["default"].convertToType(data['derivation_path'], 'String');
        }

        if (data.hasOwnProperty('passphrase')) {
          obj['passphrase'] = _ApiClient["default"].convertToType(data['passphrase'], 'String');
        }

        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateTestCandyMachineRequest;
}();
/**
 * The twelve word phrase that can be used to derive many public key addresses. To derive a public key, you need a secret recovery phrase, a derivation path, and an optional passphrase. See our Security section <a href=\"#section/Security\">here</a>.
 * @member {String} secret_recovery_phrase
 */


CreateTestCandyMachineRequest.prototype['secret_recovery_phrase'] = undefined;
/**
 * Derivation paths are used to derive the public key from the secret recovery phrase. Only certain paths are accepted.  We use \"m/44/501/0/0\" by default, if it is not provided. This is the path that the Phantom and Sollet wallets use. If you provide the empty string \"\" as the value for the derivation path, then we will use the Solana CLI default value. The SolFlare recommended path is \"m/44/501/0\".  You can also arbitrarily increment the default path (\"m/44/501/0/0\") to generate more wallets (e.g., \"m/44/501/0/1\", \"m/44/501/0/2\", ...). This is how Phantom generates more wallets.  To learn more about derivation paths, check out <a href=\"https://learnmeabitcoin.com/technical/derivation-paths\" target=\"_blank\">this tutorial</a>.
 * @member {String} derivation_path
 * @default 'm/44/501/0/0'
 */

CreateTestCandyMachineRequest.prototype['derivation_path'] = 'm/44/501/0/0';
/**
 * PASSPHRASE != PASSWORD. This is NOT your Phantom password or any other password. It is an optional string you use when creating a wallet. This provides an additional layer of security because a hacker would need both the secret recovery phrase and the passphrase to access the output public key. By default, most wallet UI extensions do not use a passphrase. (You probably did not use a passphrase.) Limited to 500 characters. 
 * @member {String} passphrase
 * @default ''
 */

CreateTestCandyMachineRequest.prototype['passphrase'] = '';
/**
 * @member {module:model/CreateTestCandyMachineRequest.NetworkEnum} network
 * @default 'devnet'
 */

CreateTestCandyMachineRequest.prototype['network'] = 'devnet';
/**
 * Allowed values for the <code>network</code> property.
 * @enum {String}
 * @readonly
 */

CreateTestCandyMachineRequest['NetworkEnum'] = {
  /**
   * value: "devnet"
   * @const
   */
  "devnet": "devnet",

  /**
   * value: "mainnet-beta"
   * @const
   */
  "mainnet-beta": "mainnet-beta"
};
var _default = CreateTestCandyMachineRequest;
exports["default"] = _default;