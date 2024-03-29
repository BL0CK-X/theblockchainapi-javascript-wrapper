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
 * The BalanceRequest model module.
 * @module model/BalanceRequest
 * @version 1.0.9407
 */
var BalanceRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BalanceRequest</code>.
   * @alias module:model/BalanceRequest
   * @param publicKey {String} The public key address of the wallet
   */
  function BalanceRequest(publicKey) {
    _classCallCheck(this, BalanceRequest);

    BalanceRequest.initialize(this, publicKey);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BalanceRequest, null, [{
    key: "initialize",
    value: function initialize(obj, publicKey) {
      obj['public_key'] = publicKey;
    }
    /**
     * Constructs a <code>BalanceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BalanceRequest} obj Optional instance to populate.
     * @return {module:model/BalanceRequest} The populated <code>BalanceRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BalanceRequest();

        if (data.hasOwnProperty('public_key')) {
          obj['public_key'] = _ApiClient["default"].convertToType(data['public_key'], 'String');
        }

        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }

        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }

        if (data.hasOwnProperty('mint_address')) {
          obj['mint_address'] = _ApiClient["default"].convertToType(data['mint_address'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BalanceRequest;
}();
/**
 * The public key address of the wallet
 * @member {String} public_key
 */


BalanceRequest.prototype['public_key'] = undefined;
/**
 * If you are retrieving the SOL balance, you can select whether to retrieve this in SOL or Lamport units (1 SOL = 1e9 Lamports).
 * @member {module:model/BalanceRequest.UnitEnum} unit
 * @default 'lamport'
 */

BalanceRequest.prototype['unit'] = 'lamport';
/**
 * @member {module:model/BalanceRequest.NetworkEnum} network
 * @default 'devnet'
 */

BalanceRequest.prototype['network'] = 'devnet';
/**
 * The mint address of the SPL token or NFT. If not provided, the balance returned is in SOL. Make sure to use the correct network.  You can see the mint addresses of popular SPL tokens <a href=\"https://raw.githubusercontent.com/solana-labs/token-list/main/src/tokens/solana.tokenlist.json\" target=\"_blank\">here</a>.  Some example mint addresses of SPL tokens: - USDC: EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v - Mango: MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac - Serum: SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt - Raydium: 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R - wSOL: So11111111111111111111111111111111111111112 - ATLAS: ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx
 * @member {String} mint_address
 * @default 'null'
 */

BalanceRequest.prototype['mint_address'] = 'null';
/**
 * Allowed values for the <code>unit</code> property.
 * @enum {String}
 * @readonly
 */

BalanceRequest['UnitEnum'] = {
  /**
   * value: "lamport"
   * @const
   */
  "lamport": "lamport",

  /**
   * value: "sol"
   * @const
   */
  "sol": "sol"
};
/**
 * Allowed values for the <code>network</code> property.
 * @enum {String}
 * @readonly
 */

BalanceRequest['NetworkEnum'] = {
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
var _default = BalanceRequest;
exports["default"] = _default;