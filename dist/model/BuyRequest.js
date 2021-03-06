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
 * The BuyRequest model module.
 * @module model/BuyRequest
 * @version 1.0.9
 */
var BuyRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BuyRequest</code>.
   * @alias module:model/BuyRequest
   * @param wallet {module:model/Wallet} 
   * @param nftPrice {Number} The number of lamports you are expecting to purchase the NFT for. We check the price of the NFT before  purchasing it to ensure that it matches your expectation. There are 1e9 (1 billion) Lamports in a SOL. 
   */
  function BuyRequest(wallet, nftPrice) {
    _classCallCheck(this, BuyRequest);

    BuyRequest.initialize(this, wallet, nftPrice);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BuyRequest, null, [{
    key: "initialize",
    value: function initialize(obj, wallet, nftPrice) {
      obj['wallet'] = wallet;
      obj['nft_price'] = nftPrice;
    }
    /**
     * Constructs a <code>BuyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BuyRequest} obj Optional instance to populate.
     * @return {module:model/BuyRequest} The populated <code>BuyRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BuyRequest();

        if (data.hasOwnProperty('wallet')) {
          obj['wallet'] = _Wallet["default"].constructFromObject(data['wallet']);
        }

        if (data.hasOwnProperty('skip_checks')) {
          obj['skip_checks'] = _ApiClient["default"].convertToType(data['skip_checks'], 'Boolean');
        }

        if (data.hasOwnProperty('seller_public_key')) {
          obj['seller_public_key'] = _ApiClient["default"].convertToType(data['seller_public_key'], 'String');
        }

        if (data.hasOwnProperty('nft_price')) {
          obj['nft_price'] = _ApiClient["default"].convertToType(data['nft_price'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return BuyRequest;
}();
/**
 * @member {module:model/Wallet} wallet
 */


BuyRequest.prototype['wallet'] = undefined;
/**
 * Whether or not to skip the provided checks (e.g., Is this NFT not listed? Is this NFT listed for a different price than you set?) and proceed with the transaction. 
 * @member {Boolean} skip_checks
 * @default false
 */

BuyRequest.prototype['skip_checks'] = false;
/**
 * The public key of the seller. Only required if providing `skip_checks`. Otherwise, don't provide it. 
 * @member {String} seller_public_key
 * @default 'null'
 */

BuyRequest.prototype['seller_public_key'] = 'null';
/**
 * The number of lamports you are expecting to purchase the NFT for. We check the price of the NFT before  purchasing it to ensure that it matches your expectation. There are 1e9 (1 billion) Lamports in a SOL. 
 * @member {Number} nft_price
 */

BuyRequest.prototype['nft_price'] = undefined;
var _default = BuyRequest;
exports["default"] = _default;