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
 * The CCPaymentBlockchainPaymentDetails model module.
 * @module model/CCPaymentBlockchainPaymentDetails
 * @version 1.0.9407
 */
var CCPaymentBlockchainPaymentDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CCPaymentBlockchainPaymentDetails</code>.
   * The information necessary to verify the payment.  
   * @alias module:model/CCPaymentBlockchainPaymentDetails
   */
  function CCPaymentBlockchainPaymentDetails() {
    _classCallCheck(this, CCPaymentBlockchainPaymentDetails);

    CCPaymentBlockchainPaymentDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CCPaymentBlockchainPaymentDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CCPaymentBlockchainPaymentDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CCPaymentBlockchainPaymentDetails} obj Optional instance to populate.
     * @return {module:model/CCPaymentBlockchainPaymentDetails} The populated <code>CCPaymentBlockchainPaymentDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CCPaymentBlockchainPaymentDetails();

        if (data.hasOwnProperty('chain')) {
          obj['chain'] = _ApiClient["default"].convertToType(data['chain'], 'String');
        }

        if (data.hasOwnProperty('fee_amount')) {
          obj['fee_amount'] = _ApiClient["default"].convertToType(data['fee_amount'], 'String');
        }

        if (data.hasOwnProperty('payout_amount')) {
          obj['payout_amount'] = _ApiClient["default"].convertToType(data['payout_amount'], 'String');
        }

        if (data.hasOwnProperty('token_blockchain_identifier')) {
          obj['token_blockchain_identifier'] = _ApiClient["default"].convertToType(data['token_blockchain_identifier'], 'String');
        }

        if (data.hasOwnProperty('total_paid')) {
          obj['total_paid'] = _ApiClient["default"].convertToType(data['total_paid'], 'String');
        }

        if (data.hasOwnProperty('transaction_signature')) {
          obj['transaction_signature'] = _ApiClient["default"].convertToType(data['transaction_signature'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CCPaymentBlockchainPaymentDetails;
}();
/**
 * The chain on which the payment was made. 
 * @member {module:model/CCPaymentBlockchainPaymentDetails.ChainEnum} chain
 */


CCPaymentBlockchainPaymentDetails.prototype['chain'] = undefined;
/**
 * The fee taken by the blockchain API. This is shown in integer form. 
 * @member {String} fee_amount
 */

CCPaymentBlockchainPaymentDetails.prototype['fee_amount'] = undefined;
/**
 * The amount paid to the project's payout wallet (the recipient of the payment). This is shown in integer form. 
 * @member {String} payout_amount
 */

CCPaymentBlockchainPaymentDetails.prototype['payout_amount'] = undefined;
/**
 * The blockchain identifier of the token used to pay. Currently, we only support payments in USDC. 
 * @member {String} token_blockchain_identifier
 */

CCPaymentBlockchainPaymentDetails.prototype['token_blockchain_identifier'] = undefined;
/**
 * The total paid by the user when making the payment. This should match the amount set in the respective plan. 
 * @member {String} total_paid
 */

CCPaymentBlockchainPaymentDetails.prototype['total_paid'] = undefined;
/**
 * The transaction signature which you can use to manually or automatically verify the transaction on the blockchain. 
 * @member {String} transaction_signature
 */

CCPaymentBlockchainPaymentDetails.prototype['transaction_signature'] = undefined;
/**
 * Allowed values for the <code>chain</code> property.
 * @enum {String}
 * @readonly
 */

CCPaymentBlockchainPaymentDetails['ChainEnum'] = {
  /**
   * value: "solana"
   * @const
   */
  "solana": "solana"
};
var _default = CCPaymentBlockchainPaymentDetails;
exports["default"] = _default;