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
 * The NFTAnalyticsRequest model module.
 * @module model/NFTAnalyticsRequest
 * @version 1.0.9
 */
var NFTAnalyticsRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NFTAnalyticsRequest</code>.
   * @alias module:model/NFTAnalyticsRequest
   * @param mintAddresses {Array.<String>} The list of mint addresses. Each address must be a valid public key.
   */
  function NFTAnalyticsRequest(mintAddresses) {
    _classCallCheck(this, NFTAnalyticsRequest);

    NFTAnalyticsRequest.initialize(this, mintAddresses);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NFTAnalyticsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, mintAddresses) {
      obj['mint_addresses'] = mintAddresses;
    }
    /**
     * Constructs a <code>NFTAnalyticsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NFTAnalyticsRequest} obj Optional instance to populate.
     * @return {module:model/NFTAnalyticsRequest} The populated <code>NFTAnalyticsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NFTAnalyticsRequest();

        if (data.hasOwnProperty('mint_addresses')) {
          obj['mint_addresses'] = _ApiClient["default"].convertToType(data['mint_addresses'], ['String']);
        }

        if (data.hasOwnProperty('start_time')) {
          obj['start_time'] = _ApiClient["default"].convertToType(data['start_time'], 'Number');
        }

        if (data.hasOwnProperty('end_time')) {
          obj['end_time'] = _ApiClient["default"].convertToType(data['end_time'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return NFTAnalyticsRequest;
}();
/**
 * The list of mint addresses. Each address must be a valid public key.
 * @member {Array.<String>} mint_addresses
 */


NFTAnalyticsRequest.prototype['mint_addresses'] = undefined;
/**
 * Response will not include transactions before `start_time`. Set this to `-1` in order to get the entire history we have stored. 
 * @member {Number} start_time
 */

NFTAnalyticsRequest.prototype['start_time'] = undefined;
/**
 * Response will not include transactions after `end_time`  
 * @member {Number} end_time
 */

NFTAnalyticsRequest.prototype['end_time'] = undefined;
var _default = NFTAnalyticsRequest;
exports["default"] = _default;