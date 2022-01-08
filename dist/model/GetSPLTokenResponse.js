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
 * The GetSPLTokenResponse model module.
 * @module model/GetSPLTokenResponse
 * @version 1.0.9
 */
var GetSPLTokenResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetSPLTokenResponse</code>.
   * @alias module:model/GetSPLTokenResponse
   */
  function GetSPLTokenResponse() {
    _classCallCheck(this, GetSPLTokenResponse);

    GetSPLTokenResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetSPLTokenResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetSPLTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSPLTokenResponse} obj Optional instance to populate.
     * @return {module:model/GetSPLTokenResponse} The populated <code>GetSPLTokenResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetSPLTokenResponse();

        if (data.hasOwnProperty('decimals')) {
          obj['decimals'] = _ApiClient["default"].convertToType(data['decimals'], 'Number');
        }

        if (data.hasOwnProperty('freeze_authority')) {
          obj['freeze_authority'] = _ApiClient["default"].convertToType(data['freeze_authority'], 'String');
        }

        if (data.hasOwnProperty('mint_authority')) {
          obj['mint_authority'] = _ApiClient["default"].convertToType(data['mint_authority'], 'String');
        }

        if (data.hasOwnProperty('is_initialized')) {
          obj['is_initialized'] = _ApiClient["default"].convertToType(data['is_initialized'], 'Boolean');
        }

        if (data.hasOwnProperty('supply')) {
          obj['supply'] = _ApiClient["default"].convertToType(data['supply'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetSPLTokenResponse;
}();
/**
 * The number of decimals of the token. For example, if the USDC token has 6 decimals, then you need 1 * 10e6 = 1,000,000 tokens to have 1 USDC. The purpose of this is that everything must be stored as  an integer. Thus, if there are $100 USDC in total, there must be $100 * 10e6 tokens in order for the $100 to be divisible into lower denominations than $1. 
 * @member {Number} decimals
 */


GetSPLTokenResponse.prototype['decimals'] = undefined;
/**
 * Public key address
 * @member {String} freeze_authority
 */

GetSPLTokenResponse.prototype['freeze_authority'] = undefined;
/**
 * Public key address
 * @member {String} mint_authority
 */

GetSPLTokenResponse.prototype['mint_authority'] = undefined;
/**
 * @member {Boolean} is_initialized
 */

GetSPLTokenResponse.prototype['is_initialized'] = undefined;
/**
 * The supply of the token
 * @member {String} supply
 */

GetSPLTokenResponse.prototype['supply'] = undefined;
var _default = GetSPLTokenResponse;
exports["default"] = _default;