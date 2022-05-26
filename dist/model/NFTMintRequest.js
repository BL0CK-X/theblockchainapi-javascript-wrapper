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
 * The NFTMintRequest model module.
 * @module model/NFTMintRequest
 * @version 1.0.9
 */
var NFTMintRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NFTMintRequest</code>.
   * @alias module:model/NFTMintRequest
   */
  function NFTMintRequest() {
    _classCallCheck(this, NFTMintRequest);

    NFTMintRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NFTMintRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NFTMintRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NFTMintRequest} obj Optional instance to populate.
     * @return {module:model/NFTMintRequest} The populated <code>NFTMintRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NFTMintRequest();

        if (data.hasOwnProperty('wallet')) {
          obj['wallet'] = _Wallet["default"].constructFromObject(data['wallet']);
        }

        if (data.hasOwnProperty('return_compiled_transaction')) {
          obj['return_compiled_transaction'] = _ApiClient["default"].convertToType(data['return_compiled_transaction'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('upload_method')) {
          obj['upload_method'] = _ApiClient["default"].convertToType(data['upload_method'], 'String');
        }

        if (data.hasOwnProperty('uri')) {
          obj['uri'] = _ApiClient["default"].convertToType(data['uri'], 'String');
        }

        if (data.hasOwnProperty('image_url')) {
          obj['image_url'] = _ApiClient["default"].convertToType(data['image_url'], 'String');
        }

        if (data.hasOwnProperty('uri_metadata')) {
          obj['uri_metadata'] = _ApiClient["default"].convertToType(data['uri_metadata'], Object);
        }

        if (data.hasOwnProperty('is_mutable')) {
          obj['is_mutable'] = _ApiClient["default"].convertToType(data['is_mutable'], 'Boolean');
        }

        if (data.hasOwnProperty('is_master_edition')) {
          obj['is_master_edition'] = _ApiClient["default"].convertToType(data['is_master_edition'], 'Boolean');
        }

        if (data.hasOwnProperty('seller_fee_basis_points')) {
          obj['seller_fee_basis_points'] = _ApiClient["default"].convertToType(data['seller_fee_basis_points'], 'Number');
        }

        if (data.hasOwnProperty('creators')) {
          obj['creators'] = _ApiClient["default"].convertToType(data['creators'], ['String']);
        }

        if (data.hasOwnProperty('share')) {
          obj['share'] = _ApiClient["default"].convertToType(data['share'], ['Number']);
        }

        if (data.hasOwnProperty('mint_to_public_key')) {
          obj['mint_to_public_key'] = _ApiClient["default"].convertToType(data['mint_to_public_key'], 'String');
        }

        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NFTMintRequest;
}();
/**
 * @member {module:model/Wallet} wallet
 */


NFTMintRequest.prototype['wallet'] = undefined;
/**
 * If `true`, the transaction to mint the NFT will not be submitted or signed. It will be returned to you in a raw form that you can then sign with a wallet (e.g., Phantom) or code. No `wallet` authentication information is required (thus, you do you have to supply a seed phrase or private key). See a Python example [here](https://github.com/BL0CK-X/blockchain-api/blob/main/third-party-api-examples/me-buy-sell.py). If `false` (the default option), then `wallet` is required. We sign and submit the transaction for you, which uses your wallet to mint the NFT. No further action is required on your part, and the NFT is minted. Read more on security [here](#section/Security). 
 * @member {Boolean} return_compiled_transaction
 * @default false
 */

NFTMintRequest.prototype['return_compiled_transaction'] = false;
/**
 * The name of the token. Limited to 32 characters. Stored on the blockchain.
 * @member {String} name
 * @default ''
 */

NFTMintRequest.prototype['name'] = '';
/**
 * The symbol of the token. Limited to 10 characters. Stored on the blockchain.
 * @member {String} symbol
 * @default ''
 */

NFTMintRequest.prototype['symbol'] = '';
/**
 * The description of the NFT. Limited to 2000 characters. Not stored on the blockchain.         If you are providing your own `uri` (see above), then you do not need to provide this.  If you are not providing your own `uri` and you do not provide this, then there wills simply be no description.  Only provide a value for `description` if the `upload_method` is set to `S3` (see the description for `upload_method` above).
 * @member {String} description
 * @default ''
 */

NFTMintRequest.prototype['description'] = '';
/**
 * When you choose `S3`, all of the `name`, `description`, `symbol`, `uri_metadata`, and `image_url` are put into a JSON dictionary and uploaded to S3 as a JSON file.  This is uploaded to an AWS S3 bucket we own, and is an option we provide at no charge. The S3 link to this file is stored in the NFT's account on the blockchain. Learn more  <a href=\"https://blockchainapi.com/2022/01/18/how-to-format-off-chain-nft-metadata.html\" target=\"_blank\">here</a>.  When you choose `URI`, the `uri` you provide is stored on the blockchain, and the `uri_metadata`, `description`, and `image_url` are ignored and not stored anywhere. `S3` is NOT involved in this case.   An example of a `uri` you would provide is an Arweave URL, like this: `https://arweave.net/_Y8tETU3FbAFZSM1wXNeWPweWwrW9K6oSF1SYi_bH9A`.
 * @member {module:model/NFTMintRequest.UploadMethodEnum} upload_method
 * @default 'S3'
 */

NFTMintRequest.prototype['upload_method'] = 'S3';
/**
 * The `uri` you provide is stored on the blockchain, and the `uri_metadata`, `description`, and `image_url` are ignored and not stored anywhere. `S3` is NOT involved in this case.   Read more <a href=\"https://blockchainapi.com/2022/01/18/how-to-format-off-chain-nft-metadata.html\" target=\"_blank\">here</a>.  An example of a `uri` you would provide is an Arweave URL, like this: `https://arweave.net/_Y8tETU3FbAFZSM1wXNeWPweWwrW9K6oSF1SYi_bH9A`.  Only provide a value for `uri` if the `upload_method` is set to `URI` (see the description for `upload_method` above).
 * @member {String} uri
 * @default ''
 */

NFTMintRequest.prototype['uri'] = '';
/**
 * The URL of the image of the NFT.         If you are providing your own `uri` (see above), then you do not need to provide this.  If you are not providing your own `uri` and you do not provide this, then there wills simply be no image.  Only provide a value for `image_url` if the `upload_method` is set to `S3` (see the description for `upload_method` above).
 * @member {String} image_url
 * @default ''
 */

NFTMintRequest.prototype['image_url'] = '';
/**
 * The off-chain metadata.        If you are providing your own `uri` (see above), then you do not need to provide this.  If you are not providing your own `uri` and you do not provide this, then there wills simply be no image.  Only provide a value for `uri_metadata` if the `upload_method` is set to `S3` (see the description for `upload_method` above).  Learn more about how to format this metadata <a href=\"https://blockchainapi.com/2022/01/18/how-to-format-off-chain-nft-metadata.html\" target=\"_blank\">here</a>.
 * @member {Object} uri_metadata
 */

NFTMintRequest.prototype['uri_metadata'] = undefined;
/**
 * Indicates whether or not the NFT created is mutable. If mutable, the NFT can be updated later. Once set to immutable, the NFT is unable to be changed. 
 * @member {Boolean} is_mutable
 * @default true
 */

NFTMintRequest.prototype['is_mutable'] = true;
/**
 * Whether or not the NFT is a master edition NFT. Saves about 0.001 SOL in transaction costs when set to false. 
 * @member {Boolean} is_master_edition
 * @default true
 */

NFTMintRequest.prototype['is_master_edition'] = true;
/**
 * Valid values from 0 to 10000. Must be an integer.  Represents the number of basis points that the seller receives as a fee upon sale.  E.g., 100 indicates a 1% seller fee. Seller does not receive a fee when \"primary_sale_has_happened\" is set to true.  Will be set to false after first sale has occurred. 
 * @member {Number} seller_fee_basis_points
 * @default 0
 */

NFTMintRequest.prototype['seller_fee_basis_points'] = 0;
/**
 * A JSON encoded string representing an array / list.  The designated creators of the NFT. Length of the creator list must match length of the list of share.  Valid lengths of the list range from 1 to 5. Each item in the list must be a valid public key address.    Only the public key corresponding to the seed phrase provided will be marked as verified. Any other creators supplied will be marked as unverified. 
 * @member {Array.<String>} creators
 */

NFTMintRequest.prototype['creators'] = undefined;
/**
 * A JSON encoded string representing an array / list.  The share of the royalty that each creator gets. Valid values range from 0 to 100. Sum of the values must equal 100.  Only integer value accepted. Length of the share list must match length of the list of creators. 
 * @member {Array.<Number>} share
 */

NFTMintRequest.prototype['share'] = undefined;
/**
 * Assign ownership of the NFT to the public key address given by `mint_to_public_key` 
 * @member {String} mint_to_public_key
 * @default 'The public key of the wallet provided'
 */

NFTMintRequest.prototype['mint_to_public_key'] = 'The public key of the wallet provided';
/**
 * This determines which network you choose to run the API calls on. We recommend first testing on the devnet, because minting an NFT costs a little above 0.01 SOL, which is about $1.60 at the time of this writing.  When you run on the mainnet-beta, each successful call will deduct approximately that much. When you run on the devnet, that amount is deducted from a simulated amount, so you are not paying with real SOL. To get SOL on the devnet,   airdrop SOL to this address using the CLI. Keep in mind that you can only do this every so often. If you are rate-limited, consider using a VPN and trying again, or just waiting. To get SOL on the mainnet-beta, you    must transfer real SOL to this account from another wallet (e.g., from another wallet you own, from an exchange, etc.). We hope to make this process easier in the future, and if you have any suggestions, please add them    as an issue on our <a href=\"https://github.com/BL0CK-X/the-blockchain-api\" target=\"_blank\">GitHub repository</a> for the API. To get a fee estimate, make a GET requests to the <a href=\"#tag/Solana-NFT/paths/~1solana~1nft~1mint~1fee/get\">v1/solana/nft/mint/fee endpoint</a> (details in sidebar). 
 * @member {module:model/NFTMintRequest.NetworkEnum} network
 * @default 'devnet'
 */

NFTMintRequest.prototype['network'] = 'devnet';
/**
 * Allowed values for the <code>upload_method</code> property.
 * @enum {String}
 * @readonly
 */

NFTMintRequest['UploadMethodEnum'] = {
  /**
   * value: "S3"
   * @const
   */
  "S3": "S3",

  /**
   * value: "URI"
   * @const
   */
  "URI": "URI"
};
/**
 * Allowed values for the <code>network</code> property.
 * @enum {String}
 * @readonly
 */

NFTMintRequest['NetworkEnum'] = {
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
var _default = NFTMintRequest;
exports["default"] = _default;