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
 * The BuyResponse model module.
 * @module model/BuyResponse
 * @version 1.0.9
 */
var BuyResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BuyResponse</code>.
   * @alias module:model/BuyResponse
   */
  function BuyResponse() {
    _classCallCheck(this, BuyResponse);

    BuyResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BuyResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BuyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BuyResponse} obj Optional instance to populate.
     * @return {module:model/BuyResponse} The populated <code>BuyResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BuyResponse();

        if (data.hasOwnProperty('transaction_signature')) {
          obj['transaction_signature'] = _ApiClient["default"].convertToType(data['transaction_signature'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BuyResponse;
}();
/**
 * The signature of the `buy` transaction 
 * @member {String} transaction_signature
 */


BuyResponse.prototype['transaction_signature'] = undefined;
var _default = BuyResponse;
exports["default"] = _default;