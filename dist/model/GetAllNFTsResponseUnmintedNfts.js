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
 * The GetAllNFTsResponseUnmintedNfts model module.
 * @module model/GetAllNFTsResponseUnmintedNfts
 * @version null
 */
var GetAllNFTsResponseUnmintedNfts = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetAllNFTsResponseUnmintedNfts</code>.
   * @alias module:model/GetAllNFTsResponseUnmintedNfts
   */
  function GetAllNFTsResponseUnmintedNfts() {
    _classCallCheck(this, GetAllNFTsResponseUnmintedNfts);

    GetAllNFTsResponseUnmintedNfts.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetAllNFTsResponseUnmintedNfts, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetAllNFTsResponseUnmintedNfts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAllNFTsResponseUnmintedNfts} obj Optional instance to populate.
     * @return {module:model/GetAllNFTsResponseUnmintedNfts} The populated <code>GetAllNFTsResponseUnmintedNfts</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetAllNFTsResponseUnmintedNfts();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('uri')) {
          obj['uri'] = _ApiClient["default"].convertToType(data['uri'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetAllNFTsResponseUnmintedNfts;
}();
/**
 * The name of the unminted NFT
 * @member {String} name
 */


GetAllNFTsResponseUnmintedNfts.prototype['name'] = undefined;
/**
 * The uri of the unminted NFT
 * @member {String} uri
 */

GetAllNFTsResponseUnmintedNfts.prototype['uri'] = undefined;
var _default = GetAllNFTsResponseUnmintedNfts;
exports["default"] = _default;