"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NFTAnalyticsResponseTransactionHistory = _interopRequireDefault(require("./NFTAnalyticsResponseTransactionHistory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NFTAnalyticsResponse model module.
 * @module model/NFTAnalyticsResponse
 * @version 1.0.9
 */
var NFTAnalyticsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NFTAnalyticsResponse</code>.
   * @alias module:model/NFTAnalyticsResponse
   */
  function NFTAnalyticsResponse() {
    _classCallCheck(this, NFTAnalyticsResponse);

    NFTAnalyticsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NFTAnalyticsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NFTAnalyticsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NFTAnalyticsResponse} obj Optional instance to populate.
     * @return {module:model/NFTAnalyticsResponse} The populated <code>NFTAnalyticsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NFTAnalyticsResponse();

        if (data.hasOwnProperty('start_time')) {
          obj['start_time'] = _ApiClient["default"].convertToType(data['start_time'], Object);
        }

        if (data.hasOwnProperty('end_time')) {
          obj['end_time'] = _ApiClient["default"].convertToType(data['end_time'], Object);
        }

        if (data.hasOwnProperty('transaction_history')) {
          obj['transaction_history'] = _NFTAnalyticsResponseTransactionHistory["default"].constructFromObject(data['transaction_history']);
        }

        if (data.hasOwnProperty('floor')) {
          obj['floor'] = _ApiClient["default"].convertToType(data['floor'], 'Number');
        }

        if (data.hasOwnProperty('volume')) {
          obj['volume'] = _ApiClient["default"].convertToType(data['volume'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return NFTAnalyticsResponse;
}();
/**
 * The start time used in the API request. 
 * @member {Object} start_time
 */


NFTAnalyticsResponse.prototype['start_time'] = undefined;
/**
 * The end time used in the API request.  
 * @member {Object} end_time
 */

NFTAnalyticsResponse.prototype['end_time'] = undefined;
/**
 * @member {module:model/NFTAnalyticsResponseTransactionHistory} transaction_history
 */

NFTAnalyticsResponse.prototype['transaction_history'] = undefined;
/**
 * The minimum active listing price for the collection in the given time period. The listing must have been processed before `end_time` and still active (not delisted or purchased) by `end_time` in order to affect the floor calculation. 
 * @member {Number} floor
 */

NFTAnalyticsResponse.prototype['floor'] = undefined;
/**
 * The sum of the sale prices for the given time period. 
 * @member {Number} volume
 */

NFTAnalyticsResponse.prototype['volume'] = undefined;
var _default = NFTAnalyticsResponse;
exports["default"] = _default;