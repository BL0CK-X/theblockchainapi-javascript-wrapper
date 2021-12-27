"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NFTData = _interopRequireDefault(require("./NFTData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NFT model module.
 * @module model/NFT
 * @version null
 */
var NFT = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NFT</code>.
   * @alias module:model/NFT
   */
  function NFT() {
    _classCallCheck(this, NFT);

    NFT.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NFT, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NFT</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NFT} obj Optional instance to populate.
     * @return {module:model/NFT} The populated <code>NFT</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      try {
        data = JSON.parse(data);
      } catch (_unused) {}

      if (data) {
        obj = obj || new NFT();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _NFTData["default"].constructFromObject(data['data']);
        }

        if (data.hasOwnProperty('is_mutable')) {
          obj['is_mutable'] = _ApiClient["default"].convertToType(data['is_mutable'], 'Boolean');
        }

        if (data.hasOwnProperty('mint')) {
          obj['mint'] = _ApiClient["default"].convertToType(data['mint'], 'String');
        }

        if (data.hasOwnProperty('primary_sale_happened')) {
          obj['primary_sale_happened'] = _ApiClient["default"].convertToType(data['primary_sale_happened'], 'Boolean');
        }

        if (data.hasOwnProperty('update_authority')) {
          obj['update_authority'] = _ApiClient["default"].convertToType(data['update_authority'], 'String');
        }

        if (data.hasOwnProperty('seller_fee_basis_points')) {
          obj['seller_fee_basis_points'] = _ApiClient["default"].convertToType(data['seller_fee_basis_points'], 'Number');
        }

        if (data.hasOwnProperty('mint_secret_recovery_phrase')) {
          obj['mint_secret_recovery_phrase'] = _ApiClient["default"].convertToType(data['mint_secret_recovery_phrase'], 'String');
        }

        if (data.hasOwnProperty('explorer_url')) {
          obj['explorer_url'] = _ApiClient["default"].convertToType(data['explorer_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NFT;
}();
/**
 * @member {module:model/NFTData} data
 */


NFT.prototype['data'] = undefined;
/**
 * @member {Boolean} is_mutable
 */

NFT.prototype['is_mutable'] = undefined;
/**
 * The public key address of the NFT 
 * @member {String} mint
 */

NFT.prototype['mint'] = undefined;
/**
 * @member {Boolean} primary_sale_happened
 */

NFT.prototype['primary_sale_happened'] = undefined;
/**
 * A public key address that is usually that of the person who minted the NFT 
 * @member {String} update_authority
 */

NFT.prototype['update_authority'] = undefined;
/**
 * @member {Number} seller_fee_basis_points
 */

NFT.prototype['seller_fee_basis_points'] = undefined;
/**
 * @member {String} mint_secret_recovery_phrase
 */

NFT.prototype['mint_secret_recovery_phrase'] = undefined;
/**
 * @member {String} explorer_url
 */

NFT.prototype['explorer_url'] = undefined;
var _default = NFT;
exports["default"] = _default;