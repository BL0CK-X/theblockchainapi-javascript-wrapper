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
 * The GeneralBalanceResponse model module.
 * @module model/GeneralBalanceResponse
 * @version 1.0.9407
 */
var GeneralBalanceResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GeneralBalanceResponse</code>.
   * @alias module:model/GeneralBalanceResponse
   * @param balance {Number} The balance of the token in the wallet 
   * @param network {String} The network of the blockchain you selected  - Solana: `devnet`, `mainnet-beta` - Ethereum: `ropsten`, `mainnet`  Defaults when not provided (not applicable to path parameters): - Solana: `devnet` - Ethereum: `ropsten`
   */
  function GeneralBalanceResponse(balance, network) {
    _classCallCheck(this, GeneralBalanceResponse);

    GeneralBalanceResponse.initialize(this, balance, network);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GeneralBalanceResponse, null, [{
    key: "initialize",
    value: function initialize(obj, balance, network) {
      obj['balance'] = balance;
      obj['network'] = network;
    }
    /**
     * Constructs a <code>GeneralBalanceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GeneralBalanceResponse} obj Optional instance to populate.
     * @return {module:model/GeneralBalanceResponse} The populated <code>GeneralBalanceResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GeneralBalanceResponse();

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

  return GeneralBalanceResponse;
}();
/**
 * The balance of the token in the wallet 
 * @member {Number} balance
 */


GeneralBalanceResponse.prototype['balance'] = undefined;
/**
 * Not included if retreiving native token (e.g., SOL, ETH, BNB, etc.) balance 
 * @member {Number} integer_balance
 */

GeneralBalanceResponse.prototype['integer_balance'] = undefined;
/**
 * Not included if retreiving native token (e.g., SOL, ETH, BNB, etc.) balance. 
 * @member {Number} decimals
 */

GeneralBalanceResponse.prototype['decimals'] = undefined;
/**
 * The network of the blockchain you selected  - Solana: `devnet`, `mainnet-beta` - Ethereum: `ropsten`, `mainnet`  Defaults when not provided (not applicable to path parameters): - Solana: `devnet` - Ethereum: `ropsten`
 * @member {String} network
 */

GeneralBalanceResponse.prototype['network'] = undefined;
/**
 * Not included if retreiving a token / NFT balance 
 * @member {String} unit
 */

GeneralBalanceResponse.prototype['unit'] = undefined;
var _default = GeneralBalanceResponse;
exports["default"] = _default;