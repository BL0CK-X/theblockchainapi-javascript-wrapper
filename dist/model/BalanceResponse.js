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
 * The BalanceResponse model module.
 * @module model/BalanceResponse
 * @version 1.0.9407
 */
var BalanceResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BalanceResponse</code>.
   * @alias module:model/BalanceResponse
   * @param balance {Number} The balance of the token in the wallet
   * @param network {module:model/BalanceResponse.NetworkEnum} 
   */
  function BalanceResponse(balance, network) {
    _classCallCheck(this, BalanceResponse);

    BalanceResponse.initialize(this, balance, network);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BalanceResponse, null, [{
    key: "initialize",
    value: function initialize(obj, balance, network) {
      obj['balance'] = balance;
      obj['network'] = network;
    }
    /**
     * Constructs a <code>BalanceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BalanceResponse} obj Optional instance to populate.
     * @return {module:model/BalanceResponse} The populated <code>BalanceResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BalanceResponse();

        if (data.hasOwnProperty('balance')) {
          obj['balance'] = _ApiClient["default"].convertToType(data['balance'], 'Number');
        }

        if (data.hasOwnProperty('integer_balance')) {
          obj['integer_balance'] = _ApiClient["default"].convertToType(data['integer_balance'], 'Number');
        }

        if (data.hasOwnProperty('decimals')) {
          obj['decimals'] = _ApiClient["default"].convertToType(data['decimals'], 'Number');
        }

        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }

        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BalanceResponse;
}();
/**
 * The balance of the token in the wallet
 * @member {Number} balance
 */


BalanceResponse.prototype['balance'] = undefined;
/**
 * Not included if retreiving SOL balance
 * @member {Number} integer_balance
 */

BalanceResponse.prototype['integer_balance'] = undefined;
/**
 * Not included if retreiving SOL balance. Sometimes not included if the balance of the token is '0'.
 * @member {Number} decimals
 */

BalanceResponse.prototype['decimals'] = undefined;
/**
 * @member {module:model/BalanceResponse.NetworkEnum} network
 */

BalanceResponse.prototype['network'] = undefined;
/**
 * Not included if retreiving an SPL token/NFT balance
 * @member {module:model/BalanceResponse.UnitEnum} unit
 */

BalanceResponse.prototype['unit'] = undefined;
/**
 * Allowed values for the <code>network</code> property.
 * @enum {String}
 * @readonly
 */

BalanceResponse['NetworkEnum'] = {
  /**
   * value: "devnet"
   * @const
   */
  "devnet": "devnet",

  /**
   * value: "mainnet-beta"
   * @const
   */
  "mainnet-beta": "mainnet-beta"
};
/**
 * Allowed values for the <code>unit</code> property.
 * @enum {String}
 * @readonly
 */

BalanceResponse['UnitEnum'] = {
  /**
   * value: "lamport"
   * @const
   */
  "lamport": "lamport",

  /**
   * value: "sol"
   * @const
   */
  "sol": "sol"
};
var _default = BalanceResponse;
exports["default"] = _default;