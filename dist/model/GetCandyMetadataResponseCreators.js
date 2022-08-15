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
 * The GetCandyMetadataResponseCreators model module.
 * @module model/GetCandyMetadataResponseCreators
 * @version 1.0.9407
 */
var GetCandyMetadataResponseCreators = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetCandyMetadataResponseCreators</code>.
   * @alias module:model/GetCandyMetadataResponseCreators
   */
  function GetCandyMetadataResponseCreators() {
    _classCallCheck(this, GetCandyMetadataResponseCreators);

    GetCandyMetadataResponseCreators.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetCandyMetadataResponseCreators, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetCandyMetadataResponseCreators</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCandyMetadataResponseCreators} obj Optional instance to populate.
     * @return {module:model/GetCandyMetadataResponseCreators} The populated <code>GetCandyMetadataResponseCreators</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetCandyMetadataResponseCreators();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('share')) {
          obj['share'] = _ApiClient["default"].convertToType(data['share'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GetCandyMetadataResponseCreators;
}();
/**
 * The public key of a creator
 * @member {String} address
 */


GetCandyMetadataResponseCreators.prototype['address'] = undefined;
/**
 * The share of the royalty that each creator receives
 * @member {Number} share
 */

GetCandyMetadataResponseCreators.prototype['share'] = undefined;
var _default = GetCandyMetadataResponseCreators;
exports["default"] = _default;