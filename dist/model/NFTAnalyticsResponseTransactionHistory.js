"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NFTTransaction = _interopRequireDefault(require("./NFTTransaction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NFTAnalyticsResponseTransactionHistory model module.
 * @module model/NFTAnalyticsResponseTransactionHistory
 * @version 1.0.9
 */
var NFTAnalyticsResponseTransactionHistory = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NFTAnalyticsResponseTransactionHistory</code>.
   * A dictionary that maps each mint address to its transaction history. See the example to the right (click \&quot;Expand All\&quot;). The transaction history consists of a list of transactions.  Each transaction is represented by an object with the following properties: &#x60;block_time&#x60;, &#x60;exchange&#x60;, &#x60;exchange_readable&#x60;, &#x60;mint_address&#x60;, &#x60;operation&#x60;, &#x60;seller&#x60;, &#x60;buyer&#x60;, and &#x60;transaction_signature&#x60;. 
   * @alias module:model/NFTAnalyticsResponseTransactionHistory
   */
  function NFTAnalyticsResponseTransactionHistory() {
    _classCallCheck(this, NFTAnalyticsResponseTransactionHistory);

    NFTAnalyticsResponseTransactionHistory.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NFTAnalyticsResponseTransactionHistory, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NFTAnalyticsResponseTransactionHistory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NFTAnalyticsResponseTransactionHistory} obj Optional instance to populate.
     * @return {module:model/NFTAnalyticsResponseTransactionHistory} The populated <code>NFTAnalyticsResponseTransactionHistory</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      try {
        data = JSON.parse(data);
      } catch (_unused) {}

      return data;
    }
  }]);

  return NFTAnalyticsResponseTransactionHistory;
}();
/**
 * The address of the NFT 
 * @member {Array.<module:model/NFTTransaction>} mint_address
 */


NFTAnalyticsResponseTransactionHistory.prototype['mint_address'] = undefined;
var _default = NFTAnalyticsResponseTransactionHistory;
exports["default"] = _default;