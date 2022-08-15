"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FeePayerWallet = _interopRequireDefault(require("./FeePayerWallet"));

var _Wallet = _interopRequireDefault(require("./Wallet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TransferRequest model module.
 * @module model/TransferRequest
 * @version 1.0.9407
 */
var TransferRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransferRequest</code>.
   * @alias module:model/TransferRequest
   * @param recipientAddress {String} The public key address of the recipient to whom you want to send a token or NFT
   */
  function TransferRequest(recipientAddress) {
    _classCallCheck(this, TransferRequest);

    TransferRequest.initialize(this, recipientAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransferRequest, null, [{
    key: "initialize",
    value: function initialize(obj, recipientAddress) {
      obj['recipient_address'] = recipientAddress;
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

        if (data.hasOwnProperty('wait_for_confirmation')) {
          obj['wait_for_confirmation'] = _ApiClient["default"].convertToType(data['wait_for_confirmation'], 'Boolean');
        }

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

        if (data.hasOwnProperty('return_compiled_transaction')) {
          obj['return_compiled_transaction'] = _ApiClient["default"].convertToType(data['return_compiled_transaction'], 'Boolean');
        }

        if (data.hasOwnProperty('sender_public_key')) {
          obj['sender_public_key'] = _ApiClient["default"].convertToType(data['sender_public_key'], 'String');
        }

        if (data.hasOwnProperty('fee_payer_wallet')) {
          obj['fee_payer_wallet'] = _FeePayerWallet["default"].constructFromObject(data['fee_payer_wallet']);
        }
      }

      return obj;
    }
  }]);

  return TransferRequest;
}();
/**
 * Whether to wait for the transaction to be confirmed on the blockchain or simply be processed.  Processed means that our node has picked up the transaction request, but not that it was confirmed by the Solana cluster.  Confirmed means that the cluster voted on your transaction and approved it. To be completely sure that the transaction succeeded, you can either set `wait_for_confirmation=True` (call takes 20 seconds with True; about 4 seconds for processed) or you can [get the transaction metadata](/#tag/Solana-Transaction/operation/solanaGetTransaction) using the signature in the response returned. Once it returns the metadata, then the transaction should have succeeded. 
 * @member {Boolean} wait_for_confirmation
 * @default true
 */


TransferRequest.prototype['wait_for_confirmation'] = true;
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
 * If `false`, we sign and submit the transaction (`wallet` is required in this case; do not provide a value for `sender_public_key`).  If `true`, we compile the transaction (either `wallet` or `sender_public_key` is required in this case; do not provide both). 
 * @member {Boolean} return_compiled_transaction
 * @default false
 */

TransferRequest.prototype['return_compiled_transaction'] = false;
/**
 * To understand the purpose of `sender_public_key` first note the following: There are two ways you can complete a transfer transaction: (1) we complete it for you with your `wallet` information or (2) we return the raw instruction data that you can sign and submit yourself (no private keys required). When you provide your `wallet` authentication, we are able to determine your wallet's public key, which is the sender public key of the transaction. When you are not providing your `wallet` as authentication, we still need the `sender_public_key` to be able to return the compiled transaction. Thus, you provide `sender_public_key` only if you are not providing `wallet` authentication information and you are returning a compiled transaction. You will receive an error if you provide both `wallet` and `sender_public_key`. You will receive an error if you provide neither `wallet` nor `sender_public_key`. 
 * @member {String} sender_public_key
 * @default 'null'
 */

TransferRequest.prototype['sender_public_key'] = 'null';
/**
 * @member {module:model/FeePayerWallet} fee_payer_wallet
 */

TransferRequest.prototype['fee_payer_wallet'] = undefined;
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