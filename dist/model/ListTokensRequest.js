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
 * The ListTokensRequest model module.
 * @module model/ListTokensRequest
 * @version null
 */
var ListTokensRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTokensRequest</code>.
   * @alias module:model/ListTokensRequest
   */
  function ListTokensRequest() {
    _classCallCheck(this, ListTokensRequest);

    ListTokensRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTokensRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ListTokensRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTokensRequest} obj Optional instance to populate.
     * @return {module:model/ListTokensRequest} The populated <code>ListTokensRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTokensRequest();

        if (data.hasOwnProperty('include_nfts')) {
          obj['include_nfts'] = _ApiClient["default"].convertToType(data['include_nfts'], 'Boolean');
        }

        if (data.hasOwnProperty('include_zero_balance_holdings')) {
          obj['include_zero_balance_holdings'] = _ApiClient["default"].convertToType(data['include_zero_balance_holdings'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ListTokensRequest;
}();
/**
 * Whether or not to include NFTs in the response
 * @member {Boolean} include_nfts
 * @default false
 */


ListTokensRequest.prototype['include_nfts'] = false;
/**
 * Whether or not to include holdings that have zero balance. This indicates that the wallet held this token or NFT in the past, but no longer holds it.
 * @member {Boolean} include_zero_balance_holdings
 * @default false
 */

ListTokensRequest.prototype['include_zero_balance_holdings'] = false;
var _default = ListTokensRequest;
exports["default"] = _default;