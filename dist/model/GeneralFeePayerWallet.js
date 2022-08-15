"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GeneralB58PrivateKey = _interopRequireDefault(require("./GeneralB58PrivateKey"));

var _GeneralPrivateKey = _interopRequireDefault(require("./GeneralPrivateKey"));

var _GeneralSecretRecoveryPhrase = _interopRequireDefault(require("./GeneralSecretRecoveryPhrase"));

var _HexPrivateKey = _interopRequireDefault(require("./HexPrivateKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GeneralFeePayerWallet model module.
 * @module model/GeneralFeePayerWallet
 * @version 1.0.9407
 */
var GeneralFeePayerWallet = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GeneralFeePayerWallet</code>.
   * This feature is only supported for &#x60;solana&#x60;.  If you do NOT provide a wallet here, the fee payer of the transaction will be the &#x60;wallet&#x60; you provide or the &#x60;sender_blockchain_identifier&#x60;.        If you do provide a wallet, then the &#x60;fee_payer_wallet&#x60; will pay the fees of the transaction and any costs associated with creating a new associated token account (only if necessary; approx. 0.002 SOL when necessary). A new account is necessary if you are sending an NFT or SPL token to a user that has not received the same NFT or one of the SPL tokens before (thus, a new associated token account is needed).
   * @alias module:model/GeneralFeePayerWallet
   * @implements module:model/GeneralSecretRecoveryPhrase
   * @implements module:model/HexPrivateKey
   * @implements module:model/GeneralPrivateKey
   * @implements module:model/GeneralB58PrivateKey
   * @param secretRecoveryPhrase {String} The 12, 15, 18, 21, or 24 word phrase that can be used to derive many public key addresses (e.g., bottom army bless castle alter habit dish embody child flame smooth zone).  To derive a wallet identifier (e.g., public key, public address, etc.), you need a secret recovery phrase, a derivation path, and an optional passphrase.   Alternatively, you can derive a wallet identifier with a private key.  Default Lengths: - Avalanche (C): 24 - Avalanche (X, P): 24 - Binance: 12 - Ethereum: 12 - Near: 12 - Solana: 12  You can use `secret_recovery_phrase` for Chains: `avalanche`, `binance`, `ethereum`, `near`, `solana`.
   * @param hexPrivateKey {String} A hex private key is the typical private key used on Ethereum, for example. It looks like this: `0x200b9e5baa38b0dc7551645be11b394e9bf2b04532e4af8824bed2b3de2e0dc0`.  You can use `hex_private_key` for chains: `avalanche`, `binance_smart_chain`, `ethereum`.
   * @param privateKey {Object} A private key corresponds to exactly one public key address. A private key can be used to move assets out of the wallet and sign transaction with the corresponding public key.  A private key is an array of integers (e.g.,   `[185,108,153,165,57,193,166,167,58,148,133,121,92,252,242,13,233,246,35,103,185,20,27,56,111,169,12,50,50,36,83,156,173,195,143,75,135,78,204,129,217,231,58,129,69,180,185,86,119,43,200,193,94,112,31,135,68,128,207,26,85,150,68,181]`).  <a href=\"https://solflare.com\" target=\"_blank\">Solflare</a> is a popular wallet interface on Solana that allows you to export your private key in this format.  You can use `private_key` for Chains: `avalanche`, `binance_smart_chain`, `ethereum`, `solana`, `near`.
   * @param b58PrivateKey {String} A private key corresponds to exactly one public key address. A private key can be used to move assets out of the wallet and sign transaction with the corresponding public key.  A base58-encoded private key is a base58-encoded version of the typical private key. It is represented as a string (e.g., `4waBTVeAVWEAczSdx36uMrR19668ACgQDs7r386vrUes3UCzvXCQ2FPSCVGb1zJrwcULgpNzgABreyQaWSpGBwfx`).  <a href=\"https://phantom.app\" target=\"_blank\">Phantom</a> is a popular wallet interface on Solana that allows you to export your private key in this format.  You can use `b58_private_key` for Chains: `solana`, `near`
   */
  function GeneralFeePayerWallet(secretRecoveryPhrase, hexPrivateKey, privateKey, b58PrivateKey) {
    _classCallCheck(this, GeneralFeePayerWallet);

    _GeneralSecretRecoveryPhrase["default"].initialize(this, secretRecoveryPhrase);

    _HexPrivateKey["default"].initialize(this, hexPrivateKey);

    _GeneralPrivateKey["default"].initialize(this, privateKey);

    _GeneralB58PrivateKey["default"].initialize(this, b58PrivateKey);

    GeneralFeePayerWallet.initialize(this, secretRecoveryPhrase, hexPrivateKey, privateKey, b58PrivateKey);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GeneralFeePayerWallet, null, [{
    key: "initialize",
    value: function initialize(obj, secretRecoveryPhrase, hexPrivateKey, privateKey, b58PrivateKey) {
      obj['secret_recovery_phrase'] = secretRecoveryPhrase;
      obj['hex_private_key'] = hexPrivateKey;
      obj['private_key'] = privateKey;
      obj['b58_private_key'] = b58PrivateKey;
    }
    /**
     * Constructs a <code>GeneralFeePayerWallet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GeneralFeePayerWallet} obj Optional instance to populate.
     * @return {module:model/GeneralFeePayerWallet} The populated <code>GeneralFeePayerWallet</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GeneralFeePayerWallet();

        _GeneralSecretRecoveryPhrase["default"].constructFromObject(data, obj);

        _HexPrivateKey["default"].constructFromObject(data, obj);

        _GeneralPrivateKey["default"].constructFromObject(data, obj);

        _GeneralB58PrivateKey["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('secret_recovery_phrase')) {
          obj['secret_recovery_phrase'] = _ApiClient["default"].convertToType(data['secret_recovery_phrase'], 'String');
        }

        if (data.hasOwnProperty('derivation_path')) {
          obj['derivation_path'] = _ApiClient["default"].convertToType(data['derivation_path'], 'String');
        }

        if (data.hasOwnProperty('passphrase')) {
          obj['passphrase'] = _ApiClient["default"].convertToType(data['passphrase'], 'String');
        }

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

  return GeneralFeePayerWallet;
}();
/**
 * The 12, 15, 18, 21, or 24 word phrase that can be used to derive many public key addresses (e.g., bottom army bless castle alter habit dish embody child flame smooth zone).  To derive a wallet identifier (e.g., public key, public address, etc.), you need a secret recovery phrase, a derivation path, and an optional passphrase.   Alternatively, you can derive a wallet identifier with a private key.  Default Lengths: - Avalanche (C): 24 - Avalanche (X, P): 24 - Binance: 12 - Ethereum: 12 - Near: 12 - Solana: 12  You can use `secret_recovery_phrase` for Chains: `avalanche`, `binance`, `ethereum`, `near`, `solana`.
 * @member {String} secret_recovery_phrase
 */


GeneralFeePayerWallet.prototype['secret_recovery_phrase'] = undefined;
/**
 * Derivation paths are used to derive the wallet identifier from the secret recovery phrase. Only correctly typed paths are accepted.  Defaults: - Avalanche (C): m/44'/60'/0'/0/0 - Avalanche (X, P): m/44'/60'/0'/0/0 - Binance: m/44'/60'/0'/0/0 - Ethereum: m/44'/60'/0'/0/0 - Near: m/44/397/0 - Solana: m/44/501/0/0  *Solana Behavior*  If you provide the empty string \"\" as the value for the derivation path, then we will derive your public key with the same behavior as the default behavior of the Solana CLI.  By default, we use \"m/44/501/0/0\". This is the path that the Phantom and Sollet wallets use.  You can also arbitrarily increment the default path (\"m/44/501/0/0\") to generate more wallets (e.g., \"m/44/501/0/1\", \"m/44/501/0/2\", ... AND/OR \"m/44/501/1/0\", \"m/44/501/2/0\", ...).  Phantom's Wallet increments the first digit (e.g., \"m/44/501/0/0\", \"m/44/501/1/0\", \"m/44/501/2/0\", ...) to generate more public key addresses.  The SolFlare recommended path is \"m/44/501/0\".  To learn more about derivation paths, check out <a href=\"https://learnmeabitcoin.com/technical/derivation-paths\" target=\"_blank\">this tutorial</a>.
 * @member {String} derivation_path
 */

GeneralFeePayerWallet.prototype['derivation_path'] = undefined;
/**
 * PASSPHRASE != PASSWORD. This is NOT your Phantom password or any other password. It is an optional string you use when creating a wallet. This provides an additional layer of security because a hacker would need both the secret recovery phrase and the passphrase to access the output public key. By default, most wallet UI extensions do not use a passphrase. (You probably did not use a passphrase.) Limited to 500 characters. 
 * @member {String} passphrase
 * @default ''
 */

GeneralFeePayerWallet.prototype['passphrase'] = '';
/**
 * A hex private key is the typical private key used on Ethereum, for example. It looks like this: `0x200b9e5baa38b0dc7551645be11b394e9bf2b04532e4af8824bed2b3de2e0dc0`.  You can use `hex_private_key` for chains: `avalanche`, `binance_smart_chain`, `ethereum`.
 * @member {String} hex_private_key
 */

GeneralFeePayerWallet.prototype['hex_private_key'] = undefined;
/**
 * A private key corresponds to exactly one public key address. A private key can be used to move assets out of the wallet and sign transaction with the corresponding public key.  A private key is an array of integers (e.g.,   `[185,108,153,165,57,193,166,167,58,148,133,121,92,252,242,13,233,246,35,103,185,20,27,56,111,169,12,50,50,36,83,156,173,195,143,75,135,78,204,129,217,231,58,129,69,180,185,86,119,43,200,193,94,112,31,135,68,128,207,26,85,150,68,181]`).  <a href=\"https://solflare.com\" target=\"_blank\">Solflare</a> is a popular wallet interface on Solana that allows you to export your private key in this format.  You can use `private_key` for Chains: `avalanche`, `binance_smart_chain`, `ethereum`, `solana`, `near`.
 * @member {Object} private_key
 */

GeneralFeePayerWallet.prototype['private_key'] = undefined;
/**
 * A private key corresponds to exactly one public key address. A private key can be used to move assets out of the wallet and sign transaction with the corresponding public key.  A base58-encoded private key is a base58-encoded version of the typical private key. It is represented as a string (e.g., `4waBTVeAVWEAczSdx36uMrR19668ACgQDs7r386vrUes3UCzvXCQ2FPSCVGb1zJrwcULgpNzgABreyQaWSpGBwfx`).  <a href=\"https://phantom.app\" target=\"_blank\">Phantom</a> is a popular wallet interface on Solana that allows you to export your private key in this format.  You can use `b58_private_key` for Chains: `solana`, `near`
 * @member {String} b58_private_key
 */

GeneralFeePayerWallet.prototype['b58_private_key'] = undefined; // Implement GeneralSecretRecoveryPhrase interface:

/**
 * The 12, 15, 18, 21, or 24 word phrase that can be used to derive many public key addresses (e.g., bottom army bless castle alter habit dish embody child flame smooth zone).  To derive a wallet identifier (e.g., public key, public address, etc.), you need a secret recovery phrase, a derivation path, and an optional passphrase.   Alternatively, you can derive a wallet identifier with a private key.  Default Lengths: - Avalanche (C): 24 - Avalanche (X, P): 24 - Binance: 12 - Ethereum: 12 - Near: 12 - Solana: 12  You can use `secret_recovery_phrase` for Chains: `avalanche`, `binance`, `ethereum`, `near`, `solana`.
 * @member {String} secret_recovery_phrase
 */

_GeneralSecretRecoveryPhrase["default"].prototype['secret_recovery_phrase'] = undefined;
/**
 * Derivation paths are used to derive the wallet identifier from the secret recovery phrase. Only correctly typed paths are accepted.  Defaults: - Avalanche (C): m/44'/60'/0'/0/0 - Avalanche (X, P): m/44'/60'/0'/0/0 - Binance: m/44'/60'/0'/0/0 - Ethereum: m/44'/60'/0'/0/0 - Near: m/44/397/0 - Solana: m/44/501/0/0  *Solana Behavior*  If you provide the empty string \"\" as the value for the derivation path, then we will derive your public key with the same behavior as the default behavior of the Solana CLI.  By default, we use \"m/44/501/0/0\". This is the path that the Phantom and Sollet wallets use.  You can also arbitrarily increment the default path (\"m/44/501/0/0\") to generate more wallets (e.g., \"m/44/501/0/1\", \"m/44/501/0/2\", ... AND/OR \"m/44/501/1/0\", \"m/44/501/2/0\", ...).  Phantom's Wallet increments the first digit (e.g., \"m/44/501/0/0\", \"m/44/501/1/0\", \"m/44/501/2/0\", ...) to generate more public key addresses.  The SolFlare recommended path is \"m/44/501/0\".  To learn more about derivation paths, check out <a href=\"https://learnmeabitcoin.com/technical/derivation-paths\" target=\"_blank\">this tutorial</a>.
 * @member {String} derivation_path
 */

_GeneralSecretRecoveryPhrase["default"].prototype['derivation_path'] = undefined;
/**
 * PASSPHRASE != PASSWORD. This is NOT your Phantom password or any other password. It is an optional string you use when creating a wallet. This provides an additional layer of security because a hacker would need both the secret recovery phrase and the passphrase to access the output public key. By default, most wallet UI extensions do not use a passphrase. (You probably did not use a passphrase.) Limited to 500 characters. 
 * @member {String} passphrase
 * @default ''
 */

_GeneralSecretRecoveryPhrase["default"].prototype['passphrase'] = ''; // Implement HexPrivateKey interface:

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
var _default = GeneralFeePayerWallet;
exports["default"] = _default;