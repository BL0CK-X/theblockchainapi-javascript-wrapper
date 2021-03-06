"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetConfigInfoResponseCreators = _interopRequireDefault(require("./GetConfigInfoResponseCreators"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetConfigInfoResponse model module.
 * @module model/GetConfigInfoResponse
 * @version 1.0.9
 */
var GetConfigInfoResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetConfigInfoResponse</code>.
   * @alias module:model/GetConfigInfoResponse
   */
  function GetConfigInfoResponse() {
    _classCallCheck(this, GetConfigInfoResponse);

    GetConfigInfoResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetConfigInfoResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetConfigInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetConfigInfoResponse} obj Optional instance to populate.
     * @return {module:model/GetConfigInfoResponse} The populated <code>GetConfigInfoResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetConfigInfoResponse();

        if (data.hasOwnProperty('authority')) {
          obj['authority'] = _ApiClient["default"].convertToType(data['authority'], 'String');
        }

        if (data.hasOwnProperty('creators')) {
          obj['creators'] = _ApiClient["default"].convertToType(data['creators'], [_GetConfigInfoResponseCreators["default"]]);
        }

        if (data.hasOwnProperty('is_mutable')) {
          obj['is_mutable'] = _ApiClient["default"].convertToType(data['is_mutable'], 'Boolean');
        }

        if (data.hasOwnProperty('retain_authority')) {
          obj['retain_authority'] = _ApiClient["default"].convertToType(data['retain_authority'], 'String');
        }

        if (data.hasOwnProperty('seller_fee_basis_points')) {
          obj['seller_fee_basis_points'] = _ApiClient["default"].convertToType(data['seller_fee_basis_points'], 'Number');
        }

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetConfigInfoResponse;
}();
/**
 * @member {String} authority
 */


GetConfigInfoResponse.prototype['authority'] = undefined;
/**
 * @member {Array.<module:model/GetConfigInfoResponseCreators>} creators
 */

GetConfigInfoResponse.prototype['creators'] = undefined;
/**
 * @member {Boolean} is_mutable
 */

GetConfigInfoResponse.prototype['is_mutable'] = undefined;
/**
 * A public key address
 * @member {String} retain_authority
 */

GetConfigInfoResponse.prototype['retain_authority'] = undefined;
/**
 * The fee of each sale the creators receive. 100 basis points = 1%
 * @member {Number} seller_fee_basis_points
 */

GetConfigInfoResponse.prototype['seller_fee_basis_points'] = undefined;
/**
 * The symbol of the candy machine NFT colletion
 * @member {String} symbol
 */

GetConfigInfoResponse.prototype['symbol'] = undefined;
var _default = GetConfigInfoResponse;
exports["default"] = _default;