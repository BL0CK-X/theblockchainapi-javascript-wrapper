"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Wallet = _interopRequireDefault(require("./Wallet"));

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
   * @param wallet {module:model/Wallet} 
   */
  function TransferRequest(recipientAddress, wallet) {
    _classCallCheck(this, TransferRequest);

    TransferRequest.initialize(this, recipientAddress, wallet);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransferRequest, null, [{
    key: "initialize",
    value: function initialize(obj, recipientAddress, wallet) {
      obj['recipient_address'] = recipientAddress;
      obj['wallet'] = wallet;
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

        if (data.hasOwnProperty('wallet')) {
          obj['wallet'] = _Wallet["default"].constructFromObject(data['wallet']);
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
 * @member {module:model/Wallet} wallet
 */

TransferRequest.prototype['wallet'] = undefined;
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
 * This value must be a string. What you provide here depends on if you are sending an NFT, an SPL token, or SOL.  - NFT: This must be '1'. - SPL Token: This must be an integer in string format. To convert from what you see on a wallet UI (e.g., 1 ATLAS, 1 USDC) to an integer value, you have to multiply that value by 10^<i>x</i> where <i>x</i> is the number of decimals. For example, to transfer 0.2 USDC, if USDC uses 6 decimals, then the amount is 0.2 * 10^6 = 200000. You can get the number of decimals for a given SPL token <a href=\"#operation/solanaGetSPLToken\">here</a>. - SOL: Supply this value denominated in SOL in a string format. This does not need to be an integer. For example, if you want to send 0.0005 SOL, then amount = \"0.0005\".
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