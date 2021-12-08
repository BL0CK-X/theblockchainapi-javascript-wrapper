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
 * The NFTMintRequest model module.
 * @module model/NFTMintRequest
 * @version 1.0.9
 */
var NFTMintRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NFTMintRequest</code>.
   * @alias module:model/NFTMintRequest
   * @param secretRecoveryPhrase {String} The twelve word phrase that can be used to derive many public key addresses. To derive a public key, you need a secret recovery phrase, a derivation path, and an optional passphrase. See our Security section <a href=\"#section/Security\">here</a>.
   */
  function NFTMintRequest(secretRecoveryPhrase) {
    _classCallCheck(this, NFTMintRequest);

    NFTMintRequest.initialize(this, secretRecoveryPhrase);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NFTMintRequest, null, [{
    key: "initialize",
    value: function initialize(obj, secretRecoveryPhrase) {
      obj['secret_recovery_phrase'] = secretRecoveryPhrase;
    }
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

        if (data.hasOwnProperty('secret_recovery_phrase')) {
          obj['secret_recovery_phrase'] = _ApiClient["default"].convertToType(data['secret_recovery_phrase'], 'String');
        }

        if (data.hasOwnProperty('derivation_path')) {
          obj['derivation_path'] = _ApiClient["default"].convertToType(data['derivation_path'], 'String');
        }

        if (data.hasOwnProperty('passphrase')) {
          obj['passphrase'] = _ApiClient["default"].convertToType(data['passphrase'], 'String');
        }

        if (data.hasOwnProperty('nft_name')) {
          obj['nft_name'] = _ApiClient["default"].convertToType(data['nft_name'], 'String');
        }

        if (data.hasOwnProperty('nft_symbol')) {
          obj['nft_symbol'] = _ApiClient["default"].convertToType(data['nft_symbol'], 'String');
        }

        if (data.hasOwnProperty('nft_description')) {
          obj['nft_description'] = _ApiClient["default"].convertToType(data['nft_description'], 'String');
        }

        if (data.hasOwnProperty('nft_url')) {
          obj['nft_url'] = _ApiClient["default"].convertToType(data['nft_url'], 'String');
        }

        if (data.hasOwnProperty('nft_metadata')) {
          obj['nft_metadata'] = _ApiClient["default"].convertToType(data['nft_metadata'], 'String');
        }

        if (data.hasOwnProperty('nft_upload_method')) {
          obj['nft_upload_method'] = _ApiClient["default"].convertToType(data['nft_upload_method'], 'String');
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
 * The twelve word phrase that can be used to derive many public key addresses. To derive a public key, you need a secret recovery phrase, a derivation path, and an optional passphrase. See our Security section <a href=\"#section/Security\">here</a>.
 * @member {String} secret_recovery_phrase
 */


NFTMintRequest.prototype['secret_recovery_phrase'] = undefined;
/**
 * Derivation paths are used to derive the public key from the secret recovery phrase. Only certain paths are accepted.  We use \"m/44/501/0/0\" by default, if it is not provided. This is the path that the Phantom and Sollet wallets use. If you provide the empty string \"\" as the value for the derivation path, then we will use the Solana CLI default value. The SolFlare recommended path is \"m/44/501/0\".  You can also arbitrarily increment the default path (\"m/44/501/0/0\") to generate more wallets (e.g., \"m/44/501/0/1\", \"m/44/501/0/2\", ...). This is how Phantom generates more wallets.  To learn more about derivation paths, check out <a href=\"https://learnmeabitcoin.com/technical/derivation-paths\" target=\"_blank\">this tutorial</a>.
 * @member {String} derivation_path
 * @default 'm/44/501/0/0'
 */

NFTMintRequest.prototype['derivation_path'] = 'm/44/501/0/0';
/**
 * PASSPHRASE != PASSWORD. This is NOT your Phantom password or any other password. It is an optional string you use when creating a wallet. This provides an additional layer of security because a hacker would need both the secret recovery phrase and the passphrase to access the output public key. By default, most wallet UI extensions do not use a passphrase. (You probably did not use a passphrase.) Limited to 500 characters. 
 * @member {String} passphrase
 * @default ''
 */

NFTMintRequest.prototype['passphrase'] = '';
/**
 * The name of the token. Limited to 32 characters. Stored on the blockchain.
 * @member {String} nft_name
 * @default ''
 */

NFTMintRequest.prototype['nft_name'] = '';
/**
 * The symbol of the token. Limited to 10 characters. Stored on the blockchain.
 * @member {String} nft_symbol
 * @default ''
 */

NFTMintRequest.prototype['nft_symbol'] = '';
/**
 * The description of the token. Limited to 2000 characters. Not stored on the blockchain.  This is stored in S3 in a bucket we own, and the link to that file is stored on the blockchain.  If you provide your own link, the link is also stored in that S3 file, which is publicly accessible. However, if you choose the NFT upload method \"LINK\" instead of \"S3\", then we upload the link you  provide for nft_url directly to the blockchain, and S3 is not used at all. Thus, when you provide the \"LINK\" option, the value nft_description is ignored and not used. The Metaplex API does not provide functionality to store any data about your NFT besides a URL. 
 * @member {String} nft_description
 * @default ''
 */

NFTMintRequest.prototype['nft_description'] = '';
/**
 * The URL you provided. Limited to 200 characters. This does not need to be a valid URL. Whether or not this is  stored on the blockchain depends on which upload method you choose. If you choose LINK, then this is stored on the  blockchain directly. If you choose S3, then this link is embedded in a public S3 text file that also contains the metadata, the name,  the symbol, and the description of the NFT. 
 * @member {String} nft_url
 * @default ''
 */

NFTMintRequest.prototype['nft_url'] = '';
/**
 * Any data you provide. Must be a string and properly encoded json. Will be viewable on S3. Limited to 2000 bytes. Not stored on the blockchain.  This is stored in S3 in a bucket we own, and the link to that file is stored on the blockchain.  If you provide your own link, the link is also stored in that S3 file, which is publicly accessible. However, if you choose the NFT upload method \"LINK\" instead of \"S3\", then we upload the link you  provide for nft_url directly to the blockchain, and S3 is not used at all. Thus, when you provide the \"LINK\" option, the value nft_metadata is ignored and not used. The Metaplex API does not provide functionality to store any data about your NFT besides a URL. 
 * @member {String} nft_metadata
 * @default '{}'
 */

NFTMintRequest.prototype['nft_metadata'] = '{}';
/**
 * When you choose S3, all of the nft_description, nft_name, nft_symbol, nft_metadata, and nft_url are put into a json dictionary and uploaded to S3 as a text file.  This is uploaded to an AWS S3 bucket we own, and is an option we provide at no charge. The S3 link to this file is stored on the NFT on the blockchain.   When you choose LINK, the nft_url you provide is stored on the blockchain, and the nft_metadata and nft_description are ignored and not stored anywhere.  
 * @member {module:model/NFTMintRequest.NftUploadMethodEnum} nft_upload_method
 * @default 'S3'
 */

NFTMintRequest.prototype['nft_upload_method'] = 'S3';
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
 * A JSON encoded string representing an array / list.  The share of the royalty that each creator gets. Valid values range from 0 to 100.  Sum of the values must equal 100.  Only integer value accepted. Length of the share list must match length of the list of creators. 
 * @member {Array.<Number>} share
 */

NFTMintRequest.prototype['share'] = undefined;
/**
 * This determines which network you choose to run the API calls on. We recommend first testing on the devnet, because minting an NFT costs a little above 0.01 SOL, which is about $1.60 at the time of this writing.  When you run on the mainnet-beta, each successful call will deduct approximately that much. When you run on the devnet, that amount is deducted from a simulated amount, so you are not paying with real SOL. To get SOL on the devnet,   airdrop SOL to this address using the CLI. Keep in mind that you can only do this every so often. If you are rate-limited, consider using a VPN and trying again, or just waiting. To get SOL on the mainnet-beta, you    must transfer real SOL to this account from another wallet (e.g., from another wallet you own, from an exchange, etc.). We hope to make this process easier in the future, and if you have any suggestions, please add them    as an issue on our <a href=\"https://github.com/BL0CK-X/the-blockchain-api\" target=\"_blank\">GitHub repository</a> for the API. To get a fee estimate, make a GET requests to the <a href=\"#tag/Solana-NFT/paths/~1solana~1nft~1mint~1fee/get\">v1/solana/nft/mint/fee endpoint</a> (details in sidebar). 
 * @member {module:model/NFTMintRequest.NetworkEnum} network
 * @default 'devnet'
 */

NFTMintRequest.prototype['network'] = 'devnet';
/**
 * Allowed values for the <code>nft_upload_method</code> property.
 * @enum {String}
 * @readonly
 */

NFTMintRequest['NftUploadMethodEnum'] = {
  /**
   * value: "S3"
   * @const
   */
  "S3": "S3",

  /**
   * value: "LINK"
   * @const
   */
  "LINK": "LINK"
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