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
 * The GetCandyMetadataErrorResponse model module.
 * @module model/GetCandyMetadataErrorResponse
 * @version null
 */
var GetCandyMetadataErrorResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetCandyMetadataErrorResponse</code>.
   * @alias module:model/GetCandyMetadataErrorResponse
   */
  function GetCandyMetadataErrorResponse() {
    _classCallCheck(this, GetCandyMetadataErrorResponse);

    GetCandyMetadataErrorResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetCandyMetadataErrorResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetCandyMetadataErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCandyMetadataErrorResponse} obj Optional instance to populate.
     * @return {module:model/GetCandyMetadataErrorResponse} The populated <code>GetCandyMetadataErrorResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetCandyMetadataErrorResponse();

        if (data.hasOwnProperty('error')) {
          obj['error'] = _ApiClient["default"].convertToType(data['error'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetCandyMetadataErrorResponse;
}();
/**
 * @member {String} error
 */


GetCandyMetadataErrorResponse.prototype['error'] = undefined;
var _default = GetCandyMetadataErrorResponse;
exports["default"] = _default;