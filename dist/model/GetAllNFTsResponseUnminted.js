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
 * The GetAllNFTsResponseUnminted model module.
 * @module model/GetAllNFTsResponseUnminted
 * @version 1.0.9
 */
var GetAllNFTsResponseUnminted = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetAllNFTsResponseUnminted</code>.
   * @alias module:model/GetAllNFTsResponseUnminted
   */
  function GetAllNFTsResponseUnminted() {
    _classCallCheck(this, GetAllNFTsResponseUnminted);

    GetAllNFTsResponseUnminted.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetAllNFTsResponseUnminted, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetAllNFTsResponseUnminted</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAllNFTsResponseUnminted} obj Optional instance to populate.
     * @return {module:model/GetAllNFTsResponseUnminted} The populated <code>GetAllNFTsResponseUnminted</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetAllNFTsResponseUnminted();

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

  return GetAllNFTsResponseUnminted;
}();
/**
 * The name of the unminted NFT
 * @member {String} name
 */


GetAllNFTsResponseUnminted.prototype['name'] = undefined;
/**
 * The uri of the unminted NFT
 * @member {String} uri
 */

GetAllNFTsResponseUnminted.prototype['uri'] = undefined;
var _default = GetAllNFTsResponseUnminted;
exports["default"] = _default;