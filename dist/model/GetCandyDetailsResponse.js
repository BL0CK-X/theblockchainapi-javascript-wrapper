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
 * The GetCandyDetailsResponse model module.
 * @module model/GetCandyDetailsResponse
 * @version 1.0.9
 */
var GetCandyDetailsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetCandyDetailsResponse</code>.
   * @alias module:model/GetCandyDetailsResponse
   */
  function GetCandyDetailsResponse() {
    _classCallCheck(this, GetCandyDetailsResponse);

    GetCandyDetailsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetCandyDetailsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetCandyDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCandyDetailsResponse} obj Optional instance to populate.
     * @return {module:model/GetCandyDetailsResponse} The populated <code>GetCandyDetailsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetCandyDetailsResponse();

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('go_live_date')) {
          obj['go_live_date'] = _ApiClient["default"].convertToType(data['go_live_date'], 'Number');
        }

        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'Number');
        }

        if (data.hasOwnProperty('items_available')) {
          obj['items_available'] = _ApiClient["default"].convertToType(data['items_available'], 'Number');
        }

        if (data.hasOwnProperty('items_redeemed')) {
          obj['items_redeemed'] = _ApiClient["default"].convertToType(data['items_redeemed'], 'Number');
        }

        if (data.hasOwnProperty('token_mint')) {
          obj['token_mint'] = _ApiClient["default"].convertToType(data['token_mint'], 'String');
        }

        if (data.hasOwnProperty('config_address')) {
          obj['config_address'] = _ApiClient["default"].convertToType(data['config_address'], 'String');
        }

        if (data.hasOwnProperty('wallet')) {
          obj['wallet'] = _ApiClient["default"].convertToType(data['wallet'], 'String');
        }

        if (data.hasOwnProperty('bump')) {
          obj['bump'] = _ApiClient["default"].convertToType(data['bump'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GetCandyDetailsResponse;
}();
/**
 * The uuid of the candy machine
 * @member {String} uuid
 */


GetCandyDetailsResponse.prototype['uuid'] = undefined;
/**
 * The unix timestamp of the start date of the candy machine 
 * @member {Number} go_live_date
 */

GetCandyDetailsResponse.prototype['go_live_date'] = undefined;
/**
 * The price in Lamports for minting an NFT from the candy machine. 1e9 Lamport  = 1 SOL 
 * @member {Number} price
 */

GetCandyDetailsResponse.prototype['price'] = undefined;
/**
 * The number of NFTs available for mint from the candy machine 
 * @member {Number} items_available
 */

GetCandyDetailsResponse.prototype['items_available'] = undefined;
/**
 * The number of NFTs minted already from the candy machine 
 * @member {Number} items_redeemed
 */

GetCandyDetailsResponse.prototype['items_redeemed'] = undefined;
/**
 * @member {String} token_mint
 */

GetCandyDetailsResponse.prototype['token_mint'] = undefined;
/**
 * The configuration public key address of the candy machine 
 * @member {String} config_address
 */

GetCandyDetailsResponse.prototype['config_address'] = undefined;
/**
 * The public key address of the wallet that recevies the proceeds from NFT mints 
 * @member {String} wallet
 */

GetCandyDetailsResponse.prototype['wallet'] = undefined;
/**
 * @member {Number} bump
 */

GetCandyDetailsResponse.prototype['bump'] = undefined;
var _default = GetCandyDetailsResponse;
exports["default"] = _default;