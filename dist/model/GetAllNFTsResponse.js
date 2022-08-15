"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetAllNFTsResponseMintedNfts = _interopRequireDefault(require("./GetAllNFTsResponseMintedNfts"));

var _GetAllNFTsResponseUnmintedNfts = _interopRequireDefault(require("./GetAllNFTsResponseUnmintedNfts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetAllNFTsResponse model module.
 * @module model/GetAllNFTsResponse
 * @version 1.0.9407
 */
var GetAllNFTsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetAllNFTsResponse</code>.
   * @alias module:model/GetAllNFTsResponse
   */
  function GetAllNFTsResponse() {
    _classCallCheck(this, GetAllNFTsResponse);

    GetAllNFTsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetAllNFTsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetAllNFTsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAllNFTsResponse} obj Optional instance to populate.
     * @return {module:model/GetAllNFTsResponse} The populated <code>GetAllNFTsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetAllNFTsResponse();

        if (data.hasOwnProperty('minted_nfts')) {
          obj['minted_nfts'] = _ApiClient["default"].convertToType(data['minted_nfts'], [_GetAllNFTsResponseMintedNfts["default"]]);
        }

        if (data.hasOwnProperty('unminted_nfts')) {
          obj['unminted_nfts'] = _ApiClient["default"].convertToType(data['unminted_nfts'], [_GetAllNFTsResponseUnmintedNfts["default"]]);
        }

        if (data.hasOwnProperty('all_nfts')) {
          obj['all_nfts'] = _ApiClient["default"].convertToType(data['all_nfts'], [_GetAllNFTsResponseUnmintedNfts["default"]]);
        }

        if (data.hasOwnProperty('accurate')) {
          obj['accurate'] = _ApiClient["default"].convertToType(data['accurate'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return GetAllNFTsResponse;
}();
/**
 * The minted NFTs. Only filled in for `v1` candy machines. Left empty for `v2`.
 * @member {Array.<module:model/GetAllNFTsResponseMintedNfts>} minted_nfts
 */


GetAllNFTsResponse.prototype['minted_nfts'] = undefined;
/**
 * The unminted NFTs. Only filled in for `v1` candy machines. Left empty for `v2`.
 * @member {Array.<module:model/GetAllNFTsResponseUnmintedNfts>} unminted_nfts
 */

GetAllNFTsResponse.prototype['unminted_nfts'] = undefined;
/**
 * The list of all NFTs. Filled in for both `v1` and `v2` NFTs.
 * @member {Array.<module:model/GetAllNFTsResponseUnmintedNfts>} all_nfts
 */

GetAllNFTsResponse.prototype['all_nfts'] = undefined;
/**
 * Whether or not the division of NFTs among minted and unminted is accurate. If it is not accurate, then it is possible that NFTs have been included in the `minted` list that are not actually minted. If it is accurate, then the split of  minted and unminted is correct. `v1` candy machines always return a correct minted/unminted split.  
 * @member {Boolean} accurate
 */

GetAllNFTsResponse.prototype['accurate'] = undefined;
var _default = GetAllNFTsResponse;
exports["default"] = _default;