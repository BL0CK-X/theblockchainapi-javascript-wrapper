"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetCandyMetadataResponseCreators = _interopRequireDefault(require("./GetCandyMetadataResponseCreators"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetCandyMetadataResponse model module.
 * @module model/GetCandyMetadataResponse
 * @version null
 */
var GetCandyMetadataResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetCandyMetadataResponse</code>.
   * @alias module:model/GetCandyMetadataResponse
   */
  function GetCandyMetadataResponse() {
    _classCallCheck(this, GetCandyMetadataResponse);

    GetCandyMetadataResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetCandyMetadataResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetCandyMetadataResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCandyMetadataResponse} obj Optional instance to populate.
     * @return {module:model/GetCandyMetadataResponse} The populated <code>GetCandyMetadataResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetCandyMetadataResponse();

        if (data.hasOwnProperty('authority')) {
          obj['authority'] = _ApiClient["default"].convertToType(data['authority'], 'String');
        }

        if (data.hasOwnProperty('bump')) {
          obj['bump'] = _ApiClient["default"].convertToType(data['bump'], 'Number');
        }

        if (data.hasOwnProperty('candy_machine_id')) {
          obj['candy_machine_id'] = _ApiClient["default"].convertToType(data['candy_machine_id'], 'String');
        }

        if (data.hasOwnProperty('config_address')) {
          obj['config_address'] = _ApiClient["default"].convertToType(data['config_address'], 'String');
        }

        if (data.hasOwnProperty('creators')) {
          obj['creators'] = _ApiClient["default"].convertToType(data['creators'], [_GetCandyMetadataResponseCreators["default"]]);
        }

        if (data.hasOwnProperty('go_live_date')) {
          obj['go_live_date'] = _ApiClient["default"].convertToType(data['go_live_date'], 'Number');
        }

        if (data.hasOwnProperty('is_mutable')) {
          obj['is_mutable'] = _ApiClient["default"].convertToType(data['is_mutable'], 'Boolean');
        }

        if (data.hasOwnProperty('items_available')) {
          obj['items_available'] = _ApiClient["default"].convertToType(data['items_available'], 'Number');
        }

        if (data.hasOwnProperty('items_redeemed')) {
          obj['items_redeemed'] = _ApiClient["default"].convertToType(data['items_redeemed'], 'Number');
        }

        if (data.hasOwnProperty('max_number_of_lines')) {
          obj['max_number_of_lines'] = _ApiClient["default"].convertToType(data['max_number_of_lines'], 'Number');
        }

        if (data.hasOwnProperty('max_supply')) {
          obj['max_supply'] = _ApiClient["default"].convertToType(data['max_supply'], 'Number');
        }

        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'Number');
        }

        if (data.hasOwnProperty('retain_authority')) {
          obj['retain_authority'] = _ApiClient["default"].convertToType(data['retain_authority'], 'Boolean');
        }

        if (data.hasOwnProperty('seller_fee_basis_points')) {
          obj['seller_fee_basis_points'] = _ApiClient["default"].convertToType(data['seller_fee_basis_points'], 'Number');
        }

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('token_mint')) {
          obj['token_mint'] = _ApiClient["default"].convertToType(data['token_mint'], 'String');
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('wallet')) {
          obj['wallet'] = _ApiClient["default"].convertToType(data['wallet'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetCandyMetadataResponse;
}();
/**
 * The update authority of the candy machine
 * @member {String} authority
 */


GetCandyMetadataResponse.prototype['authority'] = undefined;
/**
 * @member {Number} bump
 */

GetCandyMetadataResponse.prototype['bump'] = undefined;
/**
 * The ID of the candy machine 
 * @member {String} candy_machine_id
 */

GetCandyMetadataResponse.prototype['candy_machine_id'] = undefined;
/**
 * The configuration public key address of the candy machine 
 * @member {String} config_address
 */

GetCandyMetadataResponse.prototype['config_address'] = undefined;
/**
 * @member {Array.<module:model/GetCandyMetadataResponseCreators>} creators
 */

GetCandyMetadataResponse.prototype['creators'] = undefined;
/**
 * The unix timestamp of the start date of the candy machine 
 * @member {Number} go_live_date
 */

GetCandyMetadataResponse.prototype['go_live_date'] = undefined;
/**
 * @member {Boolean} is_mutable
 */

GetCandyMetadataResponse.prototype['is_mutable'] = undefined;
/**
 * The number of NFTs available for mint from the candy machine 
 * @member {Number} items_available
 */

GetCandyMetadataResponse.prototype['items_available'] = undefined;
/**
 * The number of NFTs minted already from the candy machine 
 * @member {Number} items_redeemed
 */

GetCandyMetadataResponse.prototype['items_redeemed'] = undefined;
/**
 * @member {Number} max_number_of_lines
 */

GetCandyMetadataResponse.prototype['max_number_of_lines'] = undefined;
/**
 * @member {Number} max_supply
 */

GetCandyMetadataResponse.prototype['max_supply'] = undefined;
/**
 * The price in Lamports for minting an NFT from the candy machine. 1e9 Lamport  = 1 SOL 
 * @member {Number} price
 */

GetCandyMetadataResponse.prototype['price'] = undefined;
/**
 * @member {Boolean} retain_authority
 */

GetCandyMetadataResponse.prototype['retain_authority'] = undefined;
/**
 * The royalty the creators receive on each sale after the primary sale (the initial minting) (denominated in basis points (e.g., 75 basis points = 0.75%)) 
 * @member {Number} seller_fee_basis_points
 */

GetCandyMetadataResponse.prototype['seller_fee_basis_points'] = undefined;
/**
 * @member {String} symbol
 */

GetCandyMetadataResponse.prototype['symbol'] = undefined;
/**
 * @member {String} token_mint
 */

GetCandyMetadataResponse.prototype['token_mint'] = undefined;
/**
 * The uuid of the candy machine
 * @member {String} uuid
 */

GetCandyMetadataResponse.prototype['uuid'] = undefined;
/**
 * The public key address of the wallet that recevies the proceeds from NFT mints 
 * @member {String} wallet
 */

GetCandyMetadataResponse.prototype['wallet'] = undefined;
var _default = GetCandyMetadataResponse;
exports["default"] = _default;