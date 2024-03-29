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
 * The NFTMintFee model module.
 * @module model/NFTMintFee
 * @version 1.0.9407
 */
var NFTMintFee = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NFTMintFee</code>.
   * @alias module:model/NFTMintFee
   */
  function NFTMintFee() {
    _classCallCheck(this, NFTMintFee);

    NFTMintFee.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NFTMintFee, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NFTMintFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NFTMintFee} obj Optional instance to populate.
     * @return {module:model/NFTMintFee} The populated <code>NFTMintFee</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NFTMintFee();

        if (data.hasOwnProperty('nft_mint_fee_estimate_lamports')) {
          obj['nft_mint_fee_estimate_lamports'] = _ApiClient["default"].convertToType(data['nft_mint_fee_estimate_lamports'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NFTMintFee;
}();
/**
 * The estimate of the total fee for minting an NFT on Solana
 * @member {Number} nft_mint_fee_estimate_lamports
 */


NFTMintFee.prototype['nft_mint_fee_estimate_lamports'] = undefined;
/**
 * A description of the fee that explains how it was estimated
 * @member {String} description
 */

NFTMintFee.prototype['description'] = undefined;
var _default = NFTMintFee;
exports["default"] = _default;