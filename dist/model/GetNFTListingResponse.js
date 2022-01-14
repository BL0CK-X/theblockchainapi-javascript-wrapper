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
 * The GetNFTListingResponse model module.
 * @module model/GetNFTListingResponse
 * @version 1.0.9
 */
var GetNFTListingResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetNFTListingResponse</code>.
   * @alias module:model/GetNFTListingResponse
   */
  function GetNFTListingResponse() {
    _classCallCheck(this, GetNFTListingResponse);

    GetNFTListingResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetNFTListingResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetNFTListingResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetNFTListingResponse} obj Optional instance to populate.
     * @return {module:model/GetNFTListingResponse} The populated <code>GetNFTListingResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetNFTListingResponse();

        if (data.hasOwnProperty('exchange')) {
          obj['exchange'] = _ApiClient["default"].convertToType(data['exchange'], 'String');
        }

        if (data.hasOwnProperty('exchange_readable')) {
          obj['exchange_readable'] = _ApiClient["default"].convertToType(data['exchange_readable'], 'String');
        }

        if (data.hasOwnProperty('listing_transaction_signature')) {
          obj['listing_transaction_signature'] = _ApiClient["default"].convertToType(data['listing_transaction_signature'], 'String');
        }

        if (data.hasOwnProperty('mint_address')) {
          obj['mint_address'] = _ApiClient["default"].convertToType(data['mint_address'], 'String');
        }

        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GetNFTListingResponse;
}();
/**
 * The ID of the exchange where the NFT is listed 
 * @member {module:model/GetNFTListingResponse.ExchangeEnum} exchange
 */


GetNFTListingResponse.prototype['exchange'] = undefined;
/**
 * A readable version of the exchange ID 
 * @member {String} exchange_readable
 */

GetNFTListingResponse.prototype['exchange_readable'] = undefined;
/**
 * The signature of the listing transaction 
 * @member {String} listing_transaction_signature
 */

GetNFTListingResponse.prototype['listing_transaction_signature'] = undefined;
/**
 * The mint address of the NFT 
 * @member {String} mint_address
 */

GetNFTListingResponse.prototype['mint_address'] = undefined;
/**
 * The price of the NFT in Lamports. Represented as an integer.
 * @member {Number} price
 */

GetNFTListingResponse.prototype['price'] = undefined;
/**
 * Allowed values for the <code>exchange</code> property.
 * @enum {String}
 * @readonly
 */

GetNFTListingResponse['ExchangeEnum'] = {
  /**
   * value: "solsea"
   * @const
   */
  "solsea": "solsea"
};
var _default = GetNFTListingResponse;
exports["default"] = _default;