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
 * The TransferResponse model module.
 * @module model/TransferResponse
 * @version 1.0.9407
 */
var TransferResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransferResponse</code>.
   * @alias module:model/TransferResponse
   */
  function TransferResponse() {
    _classCallCheck(this, TransferResponse);

    TransferResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransferResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransferResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransferResponse} obj Optional instance to populate.
     * @return {module:model/TransferResponse} The populated <code>TransferResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransferResponse();

        if (data.hasOwnProperty('transaction_signature')) {
          obj['transaction_signature'] = _ApiClient["default"].convertToType(data['transaction_signature'], 'String');
        }

        if (data.hasOwnProperty('confirmed')) {
          obj['confirmed'] = _ApiClient["default"].convertToType(data['confirmed'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return TransferResponse;
}();
/**
 * The signature of the transaction
 * @member {String} transaction_signature
 */


TransferResponse.prototype['transaction_signature'] = undefined;
/**
 * Whether or not the transaction was confirmed or simply submitted for processing. The status depends on your input for `wait_for_confirmation`. This only is returned when you are submitting a transaction, not when retrieving signatures for a public key, for example.
 * @member {Boolean} confirmed
 */

TransferResponse.prototype['confirmed'] = undefined;
var _default = TransferResponse;
exports["default"] = _default;