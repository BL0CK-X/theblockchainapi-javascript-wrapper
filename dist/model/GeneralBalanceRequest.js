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
 * The GeneralBalanceRequest model module.
 * @module model/GeneralBalanceRequest
 * @version 1.0.9
 */
var GeneralBalanceRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GeneralBalanceRequest</code>.
   * @alias module:model/GeneralBalanceRequest
   */
  function GeneralBalanceRequest() {
    _classCallCheck(this, GeneralBalanceRequest);

    GeneralBalanceRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GeneralBalanceRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GeneralBalanceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GeneralBalanceRequest} obj Optional instance to populate.
     * @return {module:model/GeneralBalanceRequest} The populated <code>GeneralBalanceRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GeneralBalanceRequest();

        if (data.hasOwnProperty('blockchain_identifier')) {
          obj['blockchain_identifier'] = _ApiClient["default"].convertToType(data['blockchain_identifier'], 'String');
        }

        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }

        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }

        if (data.hasOwnProperty('token_blockchain_identifier')) {
          obj['token_blockchain_identifier'] = _ApiClient["default"].convertToType(data['token_blockchain_identifier'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GeneralBalanceRequest;
}();
/**
 * The address / public key of the wallet you're querying.  Examples: - Solana: `GKNcUmNacSJo4S2Kq3DuYRYRGw3sNUfJ4tyqd198t6vQ` - Ethereum: `0xa84b9478d203cd25dF722e83C87590f8028f6aAA`
 * @member {String} blockchain_identifier
 */


GeneralBalanceRequest.prototype['blockchain_identifier'] = undefined;
/**
 * The `unit` parameter is only applicable if you are trying to retrieve the balance of the native token (e.g., SOL, ETH, BNB).   Applicable units: - Solana: `lamport`, `sol` (1 SOL = 1e9 Lamports) - Ethereum: `wei`, `gwei`, `eth`
 * @member {String} unit
 */

GeneralBalanceRequest.prototype['unit'] = undefined;
/**
 * The network of the blockchain you selected  - Solana: `devnet`, `mainnet-beta` - Ethereum: `ropsten`, `mainnet`  Defaults when not provided (not applicable to path parameters): - Solana: `devnet` - Ethereum: `ropsten`
 * @member {String} network
 */

GeneralBalanceRequest.prototype['network'] = undefined;
/**
 * The `token_blockchain_identifier` identifies the token you wish to transfer.  - If you're transferring a native blockchain currency (e.g., SOL, ETH, BNB), then simply do not supply this value. - If you're transfering an NFT, then supply the token address of the NFT. On Solana, this is the `mint_address` or `mint` (the address of the mint). - If you're transfering a token, supply the token address. For Solana, you can find on this on the Solana Explorer (e.g., see `SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt` for <a href=\"https://explorer.solana.com/address/SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt\" target=\"_blank\">Serum Token</a>) for the `token_address`.  Examples: - Ethereum: `0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48` - Solana: `CK1LHEANTu7RFqN3XMzo2AnZhyus2W1vue1njrxLEM1d`
 * @member {String} token_blockchain_identifier
 * @default 'null'
 */

GeneralBalanceRequest.prototype['token_blockchain_identifier'] = 'null';
var _default = GeneralBalanceRequest;
exports["default"] = _default;