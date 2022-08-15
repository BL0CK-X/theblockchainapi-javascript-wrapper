"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AvalancheCChainPublicAddress = _interopRequireDefault(require("./AvalancheCChainPublicAddress"));

var _AvalancheXPChainPublicAddress = _interopRequireDefault(require("./AvalancheXPChainPublicAddress"));

var _BSCPublicAddress = _interopRequireDefault(require("./BSCPublicAddress"));

var _EthereumPublicAddress = _interopRequireDefault(require("./EthereumPublicAddress"));

var _NearPublicKey = _interopRequireDefault(require("./NearPublicKey"));

var _SolanaPublicKey = _interopRequireDefault(require("./SolanaPublicKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The WalletIdentifiers model module.
 * @module model/WalletIdentifiers
 * @version 1.0.9407
 */
var WalletIdentifiers = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WalletIdentifiers</code>.
   * The wallet indentification information. Click the &#x60;&gt;&#x60; arrow next to \&quot;wallet\&quot; on the left to see more details. 
   * @alias module:model/WalletIdentifiers
   * @implements module:model/AvalancheCChainPublicAddress
   * @implements module:model/AvalancheXPChainPublicAddress
   * @implements module:model/BSCPublicAddress
   * @implements module:model/EthereumPublicAddress
   * @implements module:model/NearPublicKey
   * @implements module:model/SolanaPublicKey
   */
  function WalletIdentifiers() {
    _classCallCheck(this, WalletIdentifiers);

    _AvalancheCChainPublicAddress["default"].initialize(this);

    _AvalancheXPChainPublicAddress["default"].initialize(this);

    _BSCPublicAddress["default"].initialize(this);

    _EthereumPublicAddress["default"].initialize(this);

    _NearPublicKey["default"].initialize(this);

    _SolanaPublicKey["default"].initialize(this);

    WalletIdentifiers.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WalletIdentifiers, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WalletIdentifiers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WalletIdentifiers} obj Optional instance to populate.
     * @return {module:model/WalletIdentifiers} The populated <code>WalletIdentifiers</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WalletIdentifiers();

        _AvalancheCChainPublicAddress["default"].constructFromObject(data, obj);

        _AvalancheXPChainPublicAddress["default"].constructFromObject(data, obj);

        _BSCPublicAddress["default"].constructFromObject(data, obj);

        _EthereumPublicAddress["default"].constructFromObject(data, obj);

        _NearPublicKey["default"].constructFromObject(data, obj);

        _SolanaPublicKey["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('hex_public_address')) {
          obj['hex_public_address'] = _ApiClient["default"].convertToType(data['hex_public_address'], 'String');
        }

        if (data.hasOwnProperty('hex_public_key')) {
          obj['hex_public_key'] = _ApiClient["default"].convertToType(data['hex_public_key'], 'String');
        }

        if (data.hasOwnProperty('bech_public_address')) {
          obj['bech_public_address'] = _ApiClient["default"].convertToType(data['bech_public_address'], 'String');
        }

        if (data.hasOwnProperty('public_key')) {
          obj['public_key'] = _ApiClient["default"].convertToType(data['public_key'], 'String');
        }
      }

      return obj;
    }
  }]);

  return WalletIdentifiers;
}();
/**
 * The public address in hex form of the wallet. This is commonly used in Ethereum, Binance, and Avalanche C-Chain. (e.g., `0xB2b2d42C3adA171633E36b427F062f85A642F453`) 
 * @member {String} hex_public_address
 */


WalletIdentifiers.prototype['hex_public_address'] = undefined;
/**
 * The public key in hex form. This is used in the Near blockchain. (e.g., `0xdf96e3094ab33558dbe14e743aceded3779307b931e12bd6f526fe450db70910`) 
 * @member {String} hex_public_key
 */

WalletIdentifiers.prototype['hex_public_key'] = undefined;
/**
 * The bech-32 encoded public address of the wallet, commonly used for the X and P chains of Avalanche. (e.g., `X-avax1rlxm7ygahlzfjgj4s965t0lk0ucm8v48rc9r5r`) 
 * @member {String} bech_public_address
 */

WalletIdentifiers.prototype['bech_public_address'] = undefined;
/**
 * The public key in base58 form. This is used in the Solana blockchain. (e.g., `3Gdu3Uf97jw4Kac8xHEm5Hqmob3BrvJhf3We8s9t5Q2c`) 
 * @member {String} public_key
 */

WalletIdentifiers.prototype['public_key'] = undefined; // Implement AvalancheCChainPublicAddress interface:

/**
 * The public address in hex form of the wallet. This is commonly used in Ethereum, Binance, and Avalanche C-Chain. (e.g., `0xB2b2d42C3adA171633E36b427F062f85A642F453`) 
 * @member {String} hex_public_address
 */

_AvalancheCChainPublicAddress["default"].prototype['hex_public_address'] = undefined;
/**
 * To public key in hex form of the wallet. This is hashed to get the hex public address. (e.g., `0x0f7182c2c2f79aca13847bed68c67662c021df868ee5d20a78df6095e4cd162610c63ec9050989a3755a18255cdd707e50678bfd762db3f0feea647610e974c4`) 
 * @member {String} hex_public_key
 */

_AvalancheCChainPublicAddress["default"].prototype['hex_public_key'] = undefined; // Implement AvalancheXPChainPublicAddress interface:

/**
 * The bech-32 encoded public address of the wallet, commonly used for the X and P chains of Avalanche. (e.g., `X-avax1rlxm7ygahlzfjgj4s965t0lk0ucm8v48rc9r5r`) 
 * @member {String} bech_public_address
 */

_AvalancheXPChainPublicAddress["default"].prototype['bech_public_address'] = undefined;
/**
 * The public address in hex form of the wallet. This is commonly used in Ethereum, Binance, and Avalanche C-Chain. (e.g., `0xB2b2d42C3adA171633E36b427F062f85A642F453`) 
 * @member {String} hex_public_address
 */

_AvalancheXPChainPublicAddress["default"].prototype['hex_public_address'] = undefined; // Implement BSCPublicAddress interface:

/**
 * The public address in hex form of the wallet. This is commonly used in Ethereum, Binance, and Avalanche C-Chain. (e.g., `0xB2b2d42C3adA171633E36b427F062f85A642F453`) 
 * @member {String} hex_public_address
 */

_BSCPublicAddress["default"].prototype['hex_public_address'] = undefined;
/**
 * To public key in hex form of the wallet. This is hashed to get the hex public address. (e.g, `0x0f7182c2c2f79aca13847bed68c67662c021df868ee5d20a78df6095e4cd162610c63ec9050989a3755a18255cdd707e50678bfd762db3f0feea647610e974c4`) 
 * @member {String} hex_public_key
 */

_BSCPublicAddress["default"].prototype['hex_public_key'] = undefined; // Implement EthereumPublicAddress interface:

/**
 * The public address in hex form of the wallet. This is commonly used in Ethereum, Binance, and Avalanche C-Chain. (e.g., `0xB2b2d42C3adA171633E36b427F062f85A642F453`) 
 * @member {String} hex_public_address
 */

_EthereumPublicAddress["default"].prototype['hex_public_address'] = undefined;
/**
 * To public key in hex form of the wallet. This is hashed to get the hex public address. (e.g., `0x0f7182c2c2f79aca13847bed68c67662c021df868ee5d20a78df6095e4cd162610c63ec9050989a3755a18255cdd707e50678bfd762db3f0feea647610e974c4`) 
 * @member {String} hex_public_key
 */

_EthereumPublicAddress["default"].prototype['hex_public_key'] = undefined; // Implement NearPublicKey interface:

/**
 * The public key in hex form. This is used in the Near blockchain. (e.g., `0xdf96e3094ab33558dbe14e743aceded3779307b931e12bd6f526fe450db70910`) 
 * @member {String} hex_public_key
 */

_NearPublicKey["default"].prototype['hex_public_key'] = undefined;
/**
 * The public address in hex form of the wallet. This is commonly used in Ethereum, Binance, and Avalanche C-Chain. (e.g., `0xB2b2d42C3adA171633E36b427F062f85A642F453`) 
 * @member {String} hex_public_address
 */

_NearPublicKey["default"].prototype['hex_public_address'] = undefined;
/**
 * The public key in base58 form. This is used in the Solana blockchain. (e.g., `3Gdu3Uf97jw4Kac8xHEm5Hqmob3BrvJhf3We8s9t5Q2c`) 
 * @member {String} public_key
 */

_NearPublicKey["default"].prototype['public_key'] = undefined; // Implement SolanaPublicKey interface:

/**
 * The public key in base58 form. This is used in the Solana blockchain. (e.g., `3Gdu3Uf97jw4Kac8xHEm5Hqmob3BrvJhf3We8s9t5Q2c`) 
 * @member {String} public_key
 */

_SolanaPublicKey["default"].prototype['public_key'] = undefined;
/**
 * The public key in hex form. This is used in the Near blockchain. (e.g., `0xdf96e3094ab33558dbe14e743aceded3779307b931e12bd6f526fe450db70910`) 
 * @member {String} hex_public_key
 */

_SolanaPublicKey["default"].prototype['hex_public_key'] = undefined;
/**
 * The public address in hex form of the wallet. This is commonly used in Ethereum, Binance, and Avalanche C-Chain. (e.g., `0xB2b2d42C3adA171633E36b427F062f85A642F453`) 
 * @member {String} hex_public_address
 */

_SolanaPublicKey["default"].prototype['hex_public_address'] = undefined;
var _default = WalletIdentifiers;
exports["default"] = _default;