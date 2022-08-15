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
 * The NFTSearchRequest model module.
 * @module model/NFTSearchRequest
 * @version 1.0.9407
 */
var NFTSearchRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NFTSearchRequest</code>.
   * @alias module:model/NFTSearchRequest
   */
  function NFTSearchRequest() {
    _classCallCheck(this, NFTSearchRequest);

    NFTSearchRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NFTSearchRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NFTSearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NFTSearchRequest} obj Optional instance to populate.
     * @return {module:model/NFTSearchRequest} The populated <code>NFTSearchRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NFTSearchRequest();

        if (data.hasOwnProperty('update_authority')) {
          obj['update_authority'] = _ApiClient["default"].convertToType(data['update_authority'], 'String');
        }

        if (data.hasOwnProperty('update_authority_search_method')) {
          obj['update_authority_search_method'] = _ApiClient["default"].convertToType(data['update_authority_search_method'], 'String');
        }

        if (data.hasOwnProperty('mint_address')) {
          obj['mint_address'] = _ApiClient["default"].convertToType(data['mint_address'], 'String');
        }

        if (data.hasOwnProperty('mint_address_search_method')) {
          obj['mint_address_search_method'] = _ApiClient["default"].convertToType(data['mint_address_search_method'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('name_search_method')) {
          obj['name_search_method'] = _ApiClient["default"].convertToType(data['name_search_method'], 'String');
        }

        if (data.hasOwnProperty('uri')) {
          obj['uri'] = _ApiClient["default"].convertToType(data['uri'], 'String');
        }

        if (data.hasOwnProperty('uri_search_method')) {
          obj['uri_search_method'] = _ApiClient["default"].convertToType(data['uri_search_method'], 'String');
        }

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('symbol_search_method')) {
          obj['symbol_search_method'] = _ApiClient["default"].convertToType(data['symbol_search_method'], 'String');
        }

        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NFTSearchRequest;
}();
/**
 * The public key of the update authority of the NFT
 * @member {String} update_authority
 */


NFTSearchRequest.prototype['update_authority'] = undefined;
/**
 * Only `exact_match` supported at this time
 * @member {module:model/NFTSearchRequest.UpdateAuthoritySearchMethodEnum} update_authority_search_method
 * @default 'exact_match'
 */

NFTSearchRequest.prototype['update_authority_search_method'] = 'exact_match';
/**
 * The mint address of the NFT
 * @member {String} mint_address
 */

NFTSearchRequest.prototype['mint_address'] = undefined;
/**
 * Only `exact_match` supported at this time
 * @member {module:model/NFTSearchRequest.MintAddressSearchMethodEnum} mint_address_search_method
 * @default 'exact_match'
 */

NFTSearchRequest.prototype['mint_address_search_method'] = 'exact_match';
/**
 * The name of the NFT
 * @member {String} name
 */

NFTSearchRequest.prototype['name'] = undefined;
/**
 * @member {module:model/NFTSearchRequest.NameSearchMethodEnum} name_search_method
 * @default 'exact_match'
 */

NFTSearchRequest.prototype['name_search_method'] = 'exact_match';
/**
 * The NFT's uri
 * @member {String} uri
 */

NFTSearchRequest.prototype['uri'] = undefined;
/**
 * @member {module:model/NFTSearchRequest.UriSearchMethodEnum} uri_search_method
 * @default 'exact_match'
 */

NFTSearchRequest.prototype['uri_search_method'] = 'exact_match';
/**
 * The symbol associated with the candy machine
 * @member {String} symbol
 */

NFTSearchRequest.prototype['symbol'] = undefined;
/**
 * @member {module:model/NFTSearchRequest.SymbolSearchMethodEnum} symbol_search_method
 * @default 'exact_match'
 */

NFTSearchRequest.prototype['symbol_search_method'] = 'exact_match';
/**
 * @member {module:model/NFTSearchRequest.NetworkEnum} network
 * @default 'devnet'
 */

NFTSearchRequest.prototype['network'] = 'devnet';
/**
 * Allowed values for the <code>update_authority_search_method</code> property.
 * @enum {String}
 * @readonly
 */

NFTSearchRequest['UpdateAuthoritySearchMethodEnum'] = {
  /**
   * value: "exact_match"
   * @const
   */
  "exact_match": "exact_match"
};
/**
 * Allowed values for the <code>mint_address_search_method</code> property.
 * @enum {String}
 * @readonly
 */

NFTSearchRequest['MintAddressSearchMethodEnum'] = {
  /**
   * value: "exact_match"
   * @const
   */
  "exact_match": "exact_match"
};
/**
 * Allowed values for the <code>name_search_method</code> property.
 * @enum {String}
 * @readonly
 */

NFTSearchRequest['NameSearchMethodEnum'] = {
  /**
   * value: "begins_with"
   * @const
   */
  "begins_with": "begins_with",

  /**
   * value: "exact_match"
   * @const
   */
  "exact_match": "exact_match"
};
/**
 * Allowed values for the <code>uri_search_method</code> property.
 * @enum {String}
 * @readonly
 */

NFTSearchRequest['UriSearchMethodEnum'] = {
  /**
   * value: "begins_with"
   * @const
   */
  "begins_with": "begins_with",

  /**
   * value: "exact_match"
   * @const
   */
  "exact_match": "exact_match"
};
/**
 * Allowed values for the <code>symbol_search_method</code> property.
 * @enum {String}
 * @readonly
 */

NFTSearchRequest['SymbolSearchMethodEnum'] = {
  /**
   * value: "begins_with"
   * @const
   */
  "begins_with": "begins_with",

  /**
   * value: "exact_match"
   * @const
   */
  "exact_match": "exact_match"
};
/**
 * Allowed values for the <code>network</code> property.
 * @enum {String}
 * @readonly
 */

NFTSearchRequest['NetworkEnum'] = {
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
var _default = NFTSearchRequest;
exports["default"] = _default;