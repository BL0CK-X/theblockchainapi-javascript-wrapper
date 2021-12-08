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
 * The TransferRequest model module.
 * @module model/TransferRequest
 * @version 1.0.9
 */
var TransferRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransferRequest</code>.
   * @alias module:model/TransferRequest
   * @param recipientAddress {String} The public key address of the recipient to whom you want to send a token or NFT
   * @param secretRecoveryPhrase {String} The twelve word phrase that can be used to derive many public key addresses. To derive a public key, you need a secret recovery phrase, a derivation path, and an optional passphrase. See our Security section <a href=\"#section/Security\">here</a>.
   */
  function TransferRequest(recipientAddress, secretRecoveryPhrase) {
    _classCallCheck(this, TransferRequest);

    TransferRequest.initialize(this, recipientAddress, secretRecoveryPhrase);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransferRequest, null, [{
    key: "initialize",
    value: function initialize(obj, recipientAddress, secretRecoveryPhrase) {
      obj['recipient_address'] = recipientAddress;
      obj['secret_recovery_phrase'] = secretRecoveryPhrase;
    }
    /**
     * Constructs a <code>TransferRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransferRequest} obj Optional instance to populate.
     * @return {module:model/TransferRequest} The populated <code>TransferRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransferRequest();

        if (data.hasOwnProperty('recipient_address')) {
          obj['recipient_address'] = _ApiClient["default"].convertToType(data['recipient_address'], 'String');
        }

        if (data.hasOwnProperty('secret_recovery_phrase')) {
          obj['secret_recovery_phrase'] = _ApiClient["default"].convertToType(data['secret_recovery_phrase'], 'String');
        }

        if (data.hasOwnProperty('derivation_path')) {
          obj['derivation_path'] = _ApiClient["default"].convertToType(data['derivation_path'], 'String');
        }

        if (data.hasOwnProperty('passphrase')) {
          obj['passphrase'] = _ApiClient["default"].convertToType(data['passphrase'], 'String');
        }

        if (data.hasOwnProperty('token_address')) {
          obj['token_address'] = _ApiClient["default"].convertToType(data['token_address'], 'String');
        }

        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TransferRequest;
}();
/**
 * The public key address of the recipient to whom you want to send a token or NFT
 * @member {String} recipient_address
 */


TransferRequest.prototype['recipient_address'] = undefined;
/**
 * The twelve word phrase that can be used to derive many public key addresses. To derive a public key, you need a secret recovery phrase, a derivation path, and an optional passphrase. See our Security section <a href=\"#section/Security\">here</a>.
 * @member {String} secret_recovery_phrase
 */

TransferRequest.prototype['secret_recovery_phrase'] = undefined;
/**
 * Derivation paths are used to derive the public key from the secret recovery phrase. Only certain paths are accepted.  We use \"m/44/501/0/0\" by default, if it is not provided. This is the path that the Phantom and Sollet wallets use. If you provide the empty string \"\" as the value for the derivation path, then we will use the Solana CLI default value. The SolFlare recommended path is \"m/44/501/0\".  You can also arbitrarily increment the default path (\"m/44/501/0/0\") to generate more wallets (e.g., \"m/44/501/0/1\", \"m/44/501/0/2\", ...). This is how Phantom generates more wallets.  To learn more about derivation paths, check out <a href=\"https://learnmeabitcoin.com/technical/derivation-paths\" target=\"_blank\">this tutorial</a>.
 * @member {String} derivation_path
 * @default 'm/44/501/0/0'
 */

TransferRequest.prototype['derivation_path'] = 'm/44/501/0/0';
/**
 * PASSPHRASE != PASSWORD. This is NOT your Phantom password or any other password. It is an optional string you use when creating a wallet. This provides an additional layer of security because a hacker would need both the secret recovery phrase and the passphrase to access the output public key. By default, most wallet UI extensions do not use a passphrase. (You probably did not use a passphrase.) Limited to 500 characters. 
 * @member {String} passphrase
 * @default ''
 */

TransferRequest.prototype['passphrase'] = '';
/**
 * If you're transfering an NFT, supply the `mint` (the address of the mint) for the `token_address`. If you're transfering a token, supply the token address found on the explorer (e.g., see `SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt` for <a href=\"https://explorer.solana.com/address/SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt\" target=\"_blank\">Serum Token</a>) for the `token_address`. If you're transferring SOL, do not supply a value for `token_address`. 
 * @member {String} token_address
 */

TransferRequest.prototype['token_address'] = undefined;
/**
 * @member {module:model/TransferRequest.NetworkEnum} network
 * @default 'devnet'
 */

TransferRequest.prototype['network'] = 'devnet';
/**
 * The quantity of the token or NFT you want to send. If sending an NFT, there is no need to supply this value.  This value must be a string. You can supply a float value (e.g., \"0.0005\"). 
 * @member {String} amount
 * @default '1'
 */

TransferRequest.prototype['amount'] = '1';
/**
 * Allowed values for the <code>network</code> property.
 * @enum {String}
 * @readonly
 */

TransferRequest['NetworkEnum'] = {
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
var _default = TransferRequest;
exports["default"] = _default;