"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NFT = _interopRequireDefault(require("./NFT"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetAllNFTsResponseMinted model module.
 * @module model/GetAllNFTsResponseMinted
 * @version 1.0.9
 */
var GetAllNFTsResponseMinted = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetAllNFTsResponseMinted</code>.
   * @alias module:model/GetAllNFTsResponseMinted
   */
  function GetAllNFTsResponseMinted() {
    _classCallCheck(this, GetAllNFTsResponseMinted);

    GetAllNFTsResponseMinted.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetAllNFTsResponseMinted, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetAllNFTsResponseMinted</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAllNFTsResponseMinted} obj Optional instance to populate.
     * @return {module:model/GetAllNFTsResponseMinted} The populated <code>GetAllNFTsResponseMinted</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetAllNFTsResponseMinted();

        if (data.hasOwnProperty('nft_metadata')) {
          obj['nft_metadata'] = _NFT["default"].constructFromObject(data['nft_metadata']);
        }

        if (data.hasOwnProperty('pub_key_hash')) {
          obj['pub_key_hash'] = _ApiClient["default"].convertToType(data['pub_key_hash'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetAllNFTsResponseMinted;
}();
/**
 * @member {module:model/NFT} nft_metadata
 */


GetAllNFTsResponseMinted.prototype['nft_metadata'] = undefined;
/**
 * Use this to verify the NFT
 * @member {String} pub_key_hash
 */

GetAllNFTsResponseMinted.prototype['pub_key_hash'] = undefined;
var _default = GetAllNFTsResponseMinted;
exports["default"] = _default;