"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CCPaymentBlockchainPaymentDetails = _interopRequireDefault(require("./CCPaymentBlockchainPaymentDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CCPayment model module.
 * @module model/CCPayment
 * @version 1.0.9407
 */
var CCPayment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CCPayment</code>.
   * @alias module:model/CCPayment
   */
  function CCPayment() {
    _classCallCheck(this, CCPayment);

    CCPayment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CCPayment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CCPayment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CCPayment} obj Optional instance to populate.
     * @return {module:model/CCPayment} The populated <code>CCPayment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CCPayment();

        if (data.hasOwnProperty('project_id')) {
          obj['project_id'] = _ApiClient["default"].convertToType(data['project_id'], 'String');
        }

        if (data.hasOwnProperty('product_id')) {
          obj['product_id'] = _ApiClient["default"].convertToType(data['product_id'], 'String');
        }

        if (data.hasOwnProperty('plan_id')) {
          obj['plan_id'] = _ApiClient["default"].convertToType(data['plan_id'], 'String');
        }

        if (data.hasOwnProperty('payment_id')) {
          obj['payment_id'] = _ApiClient["default"].convertToType(data['payment_id'], 'String');
        }

        if (data.hasOwnProperty('blockchain_identifier')) {
          obj['blockchain_identifier'] = _ApiClient["default"].convertToType(data['blockchain_identifier'], 'String');
        }

        if (data.hasOwnProperty('blockchain_payment_details')) {
          obj['blockchain_payment_details'] = _CCPaymentBlockchainPaymentDetails["default"].constructFromObject(data['blockchain_payment_details']);
        }

        if (data.hasOwnProperty('customer_id')) {
          obj['customer_id'] = _ApiClient["default"].convertToType(data['customer_id'], 'String');
        }

        if (data.hasOwnProperty('payment_validation_code')) {
          obj['payment_validation_code'] = _ApiClient["default"].convertToType(data['payment_validation_code'], 'String');
        }

        if (data.hasOwnProperty('period_end')) {
          obj['period_end'] = _ApiClient["default"].convertToType(data['period_end'], 'Number');
        }

        if (data.hasOwnProperty('period_start')) {
          obj['period_start'] = _ApiClient["default"].convertToType(data['period_start'], 'Number');
        }

        if (data.hasOwnProperty('transaction_blockchain_identifier')) {
          obj['transaction_blockchain_identifier'] = _ApiClient["default"].convertToType(data['transaction_blockchain_identifier'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CCPayment;
}();
/**
 * The ID of the project 
 * @member {String} project_id
 */


CCPayment.prototype['project_id'] = undefined;
/**
 * The ID of the associated product 
 * @member {String} product_id
 */

CCPayment.prototype['product_id'] = undefined;
/**
 * The ID of the respective plan 
 * @member {String} plan_id
 */

CCPayment.prototype['plan_id'] = undefined;
/**
 * The unique ID of the payment 
 * @member {String} payment_id
 */

CCPayment.prototype['payment_id'] = undefined;
/**
 * The unique identifier of the wallet from which the payment was made. 
 * @member {String} blockchain_identifier
 */

CCPayment.prototype['blockchain_identifier'] = undefined;
/**
 * @member {module:model/CCPaymentBlockchainPaymentDetails} blockchain_payment_details
 */

CCPayment.prototype['blockchain_payment_details'] = undefined;
/**
 * The ID of the customer 
 * @member {String} customer_id
 */

CCPayment.prototype['customer_id'] = undefined;
/**
 * The validation code shown to the customer. This is only visible to the customer who paid. They can use this code to redeem their subscription to their product. 
 * @member {String} payment_validation_code
 */

CCPayment.prototype['payment_validation_code'] = undefined;
/**
 * A UNIX time stamp, in seconds, that identifies the end of the period of the subscription 
 * @member {Number} period_end
 */

CCPayment.prototype['period_end'] = undefined;
/**
 * A UNIX time stamp, in seconds, that identifies the start of the period of the subscription 
 * @member {Number} period_start
 */

CCPayment.prototype['period_start'] = undefined;
/**
 * The string that uniquely identifies the blockchain transaction 
 * @member {String} transaction_blockchain_identifier
 */

CCPayment.prototype['transaction_blockchain_identifier'] = undefined;
var _default = CCPayment;
exports["default"] = _default;