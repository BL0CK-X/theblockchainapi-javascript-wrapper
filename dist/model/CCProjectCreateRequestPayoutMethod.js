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
 * The CCProjectCreateRequestPayoutMethod model module.
 * @module model/CCProjectCreateRequestPayoutMethod
 * @version 1.0.9407
 */
var CCProjectCreateRequestPayoutMethod = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CCProjectCreateRequestPayoutMethod</code>.
   * The method by which we pay out earnings to you. Currently, we only support paying out directly to your Solana wallet. In the future, we will support other wallets and support bank payouts. 
   * @alias module:model/CCProjectCreateRequestPayoutMethod
   * @param blockchainIdentifier {String} The identifier of the wallet that will receive the payments. On Solana, this is your wallet's public key.  
   */
  function CCProjectCreateRequestPayoutMethod(blockchainIdentifier) {
    _classCallCheck(this, CCProjectCreateRequestPayoutMethod);

    CCProjectCreateRequestPayoutMethod.initialize(this, blockchainIdentifier);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CCProjectCreateRequestPayoutMethod, null, [{
    key: "initialize",
    value: function initialize(obj, blockchainIdentifier) {
      obj['blockchain_identifier'] = blockchainIdentifier;
    }
    /**
     * Constructs a <code>CCProjectCreateRequestPayoutMethod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CCProjectCreateRequestPayoutMethod} obj Optional instance to populate.
     * @return {module:model/CCProjectCreateRequestPayoutMethod} The populated <code>CCProjectCreateRequestPayoutMethod</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CCProjectCreateRequestPayoutMethod();

        if (data.hasOwnProperty('blockchain_identifier')) {
          obj['blockchain_identifier'] = _ApiClient["default"].convertToType(data['blockchain_identifier'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CCProjectCreateRequestPayoutMethod;
}();
/**
 * The identifier of the wallet that will receive the payments. On Solana, this is your wallet's public key.  
 * @member {String} blockchain_identifier
 */


CCProjectCreateRequestPayoutMethod.prototype['blockchain_identifier'] = undefined;
var _default = CCProjectCreateRequestPayoutMethod;
exports["default"] = _default;