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
 * The SolSeaBuyRequest model module.
 * @module model/SolSeaBuyRequest
 * @version 1.0.9
 */
var SolSeaBuyRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SolSeaBuyRequest</code>.
   * @alias module:model/SolSeaBuyRequest
   * @param wallet {module:model/Wallet} 
   * @param nftPrice {Number} The number of lamports you are expecting to purchase the NFT for. We check the price of the NFT before  purchasing it to ensure that it matches your expectation. There are 1e9 (1 billion) Lamports in a SOL. 
   */
  function SolSeaBuyRequest(wallet, nftPrice) {
    _classCallCheck(this, SolSeaBuyRequest);

    SolSeaBuyRequest.initialize(this, wallet, nftPrice);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SolSeaBuyRequest, null, [{
    key: "initialize",
    value: function initialize(obj, wallet, nftPrice) {
      obj['wallet'] = wallet;
      obj['nft_price'] = nftPrice;
    }
    /**
     * Constructs a <code>SolSeaBuyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SolSeaBuyRequest} obj Optional instance to populate.
     * @return {module:model/SolSeaBuyRequest} The populated <code>SolSeaBuyRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SolSeaBuyRequest();

        if (data.hasOwnProperty('wallet')) {
          obj['wallet'] = _Wallet["default"].constructFromObject(data['wallet']);
        }

        if (data.hasOwnProperty('nft_price')) {
          obj['nft_price'] = _ApiClient["default"].convertToType(data['nft_price'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SolSeaBuyRequest;
}();
/**
 * @member {module:model/Wallet} wallet
 */


SolSeaBuyRequest.prototype['wallet'] = undefined;
/**
 * The number of lamports you are expecting to purchase the NFT for. We check the price of the NFT before  purchasing it to ensure that it matches your expectation. There are 1e9 (1 billion) Lamports in a SOL. 
 * @member {Number} nft_price
 */

SolSeaBuyRequest.prototype['nft_price'] = undefined;
var _default = SolSeaBuyRequest;
exports["default"] = _default;