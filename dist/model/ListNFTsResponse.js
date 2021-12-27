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
 * The ListNFTsResponse model module.
 * @module model/ListNFTsResponse
 * @version null
 */
var ListNFTsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListNFTsResponse</code>.
   * @alias module:model/ListNFTsResponse
   */
  function ListNFTsResponse() {
    _classCallCheck(this, ListNFTsResponse);

    ListNFTsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListNFTsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ListNFTsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListNFTsResponse} obj Optional instance to populate.
     * @return {module:model/ListNFTsResponse} The populated <code>ListNFTsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListNFTsResponse();

        if (data.hasOwnProperty('nfts_owned')) {
          obj['nfts_owned'] = _ApiClient["default"].convertToType(data['nfts_owned'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ListNFTsResponse;
}();
/**
 * A list of mint addresses represented by a string
 * @member {Array.<String>} nfts_owned
 */


ListNFTsResponse.prototype['nfts_owned'] = undefined;
var _default = ListNFTsResponse;
exports["default"] = _default;