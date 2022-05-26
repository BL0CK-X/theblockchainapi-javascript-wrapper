"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GeneralFeePayerWallet = _interopRequireDefault(require("./GeneralFeePayerWallet"));

var _GeneralWallet = _interopRequireDefault(require("./GeneralWallet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GeneralTransferRequest model module.
 * @module model/GeneralTransferRequest
 * @version 1.0.9
 */
var GeneralTransferRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GeneralTransferRequest</code>.
   * @alias module:model/GeneralTransferRequest
   * @param recipientBlockchainIdentifier {String} The blockchain identifier of the recipient to whom you want to send a token or NFT.  On Ethereum, this is the hex public address of the recipient (e.g., `0x150865ca659204a9a0cd0da00296c6b5db441172`)  On Solana, this is the public key of the recipient (e.g., `EW3nXn7X4NTWFKWaJgxKrFNoTSkop1cBUVHA21zrfF6u`). 
   */
  function GeneralTransferRequest(recipientBlockchainIdentifier) {
    _classCallCheck(this, GeneralTransferRequest);

    GeneralTransferRequest.initialize(this, recipientBlockchainIdentifier);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GeneralTransferRequest, null, [{
    key: "initialize",
    value: function initialize(obj, recipientBlockchainIdentifier) {
      obj['recipient_blockchain_identifier'] = recipientBlockchainIdentifier;
    }
    /**
     * Constructs a <code>GeneralTransferRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GeneralTransferRequest} obj Optional instance to populate.
     * @return {module:model/GeneralTransferRequest} The populated <code>GeneralTransferRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GeneralTransferRequest();

        if (data.hasOwnProperty('recipient_blockchain_identifier')) {
          obj['recipient_blockchain_identifier'] = _ApiClient["default"].convertToType(data['recipient_blockchain_identifier'], 'String');
        }

        if (data.hasOwnProperty('wallet')) {
          obj['wallet'] = _GeneralWallet["default"].constructFromObject(data['wallet']);
        }

        if (data.hasOwnProperty('token_blockchain_identifier')) {
          obj['token_blockchain_identifier'] = _ApiClient["default"].convertToType(data['token_blockchain_identifier'], 'String');
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

        if (data.hasOwnProperty('sender_blockchain_identifier')) {
          obj['sender_blockchain_identifier'] = _ApiClient["default"].convertToType(data['sender_blockchain_identifier'], 'String');
        }

        if (data.hasOwnProperty('fee_payer_wallet')) {
          obj['fee_payer_wallet'] = _GeneralFeePayerWallet["default"].constructFromObject(data['fee_payer_wallet']);
        }
      }

      return obj;
    }
  }]);

  return GeneralTransferRequest;
}();
/**
 * The blockchain identifier of the recipient to whom you want to send a token or NFT.  On Ethereum, this is the hex public address of the recipient (e.g., `0x150865ca659204a9a0cd0da00296c6b5db441172`)  On Solana, this is the public key of the recipient (e.g., `EW3nXn7X4NTWFKWaJgxKrFNoTSkop1cBUVHA21zrfF6u`). 
 * @member {String} recipient_blockchain_identifier
 */


GeneralTransferRequest.prototype['recipient_blockchain_identifier'] = undefined;
/**
 * @member {module:model/GeneralWallet} wallet
 */

GeneralTransferRequest.prototype['wallet'] = undefined;
/**
 * The `token_blockchain_identifier` identifies the token you wish to transfer.  - If you're transferring a native blockchain currency (e.g., SOL, ETH, BNB), then simply do not supply this value. - If you're transfering an NFT, then supply the token address of the NFT. On Solana, this is the `mint_address` or `mint` (the address of the mint). - If you're transfering a token, supply the token address. For Solana, you can find on this on the Solana Explorer (e.g., see `SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt` for <a href=\"https://explorer.solana.com/address/SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt\" target=\"_blank\">Serum Token</a>) for the `token_address`.  Examples: - Ethereum: `0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48` - Solana: `CK1LHEANTu7RFqN3XMzo2AnZhyus2W1vue1njrxLEM1d`
 * @member {String} token_blockchain_identifier
 */

GeneralTransferRequest.prototype['token_blockchain_identifier'] = undefined;
/**
 * The network of the blockchain you selected  - Solana: `devnet`, `mainnet-beta` - Ethereum: `ropsten`, `mainnet`  Defaults when not provided (not applicable to path parameters): - Solana: `devnet` - Ethereum: `ropsten`
 * @member {String} network
 */

GeneralTransferRequest.prototype['network'] = undefined;
/**
 * This value must be a string. What you provide here depends on if you are sending an NFT, an SPL token, or SOL.  - Native Currency (e.g., SOL, ETH, BNB): Supply this value denominated in the native currency (e.g., in SOL (but not in Lamports), or in ETH (but not in Wei)) in a string format. This does not need to be an integer. For example, if you want to send 0.0005 SOL, then `amount = \"0.0005\"`. If you want to send 0.0005 ETH, then `amount = \"0.0005\"`. - NFT: This must be `1`. - Token: This must be an integer in string format. To convert from what you see on a wallet UI (e.g., 1 ATLAS, 1 USDC) to an integer value, you have to multiply that value by 10^<i>x</i> where <i>x</i> is the number of decimals. For example, to transfer 0.2 USDC, if USDC uses 6 decimals, then the amount is 0.2 * 10^6 = 200000.    - For Solana, you can get the number of decimals for a given SPL token <a href=\"#operation/solanaGetSPLToken\">here</a>. We are working on analogues of this endpoint for other blockchains.
 * @member {String} amount
 * @default '1'
 */

GeneralTransferRequest.prototype['amount'] = '1';
/**
 * - If `false`, we sign and submit the transaction (`wallet` is required in this case; do not provide a value for `sender_blockchain_identifier`).  - If `true`, we compile the transaction (either `wallet` or `sender_blockchain_identifier` is required in this case; do not provide both).   
 * @member {Boolean} return_compiled_transaction
 * @default false
 */

GeneralTransferRequest.prototype['return_compiled_transaction'] = false;
/**
 * To understand the purpose of `sender_blockchain_identifier` first note the following: There are two ways you can complete a transfer transaction:  - (1) we complete it for you with your `wallet` information or  - (2) we return the raw instruction data that you can sign and submit yourself (no private keys required).  When you provide your `wallet` authentication, we are able to determine your wallet's blockchain identifier (public key or address) which is the sender public key of the transaction.  When you are not providing your `wallet` as authentication, we still need the `sender_blockchain_identifier` to be able to return the compiled transaction. Thus, you provide `sender_blockchain_identifier` if and only if you are not providing `wallet` authentication information **and** you are returning a compiled transaction.  You will receive an error if you provide both `wallet` and `sender_blockchain_identifier`. You will receive an error if you provide neither `wallet` nor `sender_blockchain_identifier`.
 * @member {String} sender_blockchain_identifier
 * @default 'null'
 */

GeneralTransferRequest.prototype['sender_blockchain_identifier'] = 'null';
/**
 * @member {module:model/GeneralFeePayerWallet} fee_payer_wallet
 */

GeneralTransferRequest.prototype['fee_payer_wallet'] = undefined;
var _default = GeneralTransferRequest;
exports["default"] = _default;