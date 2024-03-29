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
 * The ATAResponse model module.
 * @module model/ATAResponse
 * @version 1.0.9407
 */
var ATAResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ATAResponse</code>.
   * @alias module:model/ATAResponse
   * @param associatedTokenAddress {String} The associated token address
   */
  function ATAResponse(associatedTokenAddress) {
    _classCallCheck(this, ATAResponse);

    ATAResponse.initialize(this, associatedTokenAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ATAResponse, null, [{
    key: "initialize",
    value: function initialize(obj, associatedTokenAddress) {
      obj['associated_token_address'] = associatedTokenAddress;
    }
    /**
     * Constructs a <code>ATAResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ATAResponse} obj Optional instance to populate.
     * @return {module:model/ATAResponse} The populated <code>ATAResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ATAResponse();

        if (data.hasOwnProperty('associated_token_address')) {
          obj['associated_token_address'] = _ApiClient["default"].convertToType(data['associated_token_address'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ATAResponse;
}();
/**
 * The associated token address
 * @member {String} associated_token_address
 */


ATAResponse.prototype['associated_token_address'] = undefined;
var _default = ATAResponse;
exports["default"] = _default;