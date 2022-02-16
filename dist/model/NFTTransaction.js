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
 * The NFTTransaction model module.
 * @module model/NFTTransaction
 * @version 1.0.9
 */
var NFTTransaction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NFTTransaction</code>.
   * @alias module:model/NFTTransaction
   */
  function NFTTransaction() {
    _classCallCheck(this, NFTTransaction);

    NFTTransaction.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NFTTransaction, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NFTTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NFTTransaction} obj Optional instance to populate.
     * @return {module:model/NFTTransaction} The populated <code>NFTTransaction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NFTTransaction();

        if (data.hasOwnProperty('block_time')) {
          obj['block_time'] = _ApiClient["default"].convertToType(data['block_time'], 'Number');
        }

        if (data.hasOwnProperty('exchange')) {
          obj['exchange'] = _ApiClient["default"].convertToType(data['exchange'], 'String');
        }

        if (data.hasOwnProperty('exchange_readable')) {
          obj['exchange_readable'] = _ApiClient["default"].convertToType(data['exchange_readable'], 'String');
        }

        if (data.hasOwnProperty('mint_address')) {
          obj['mint_address'] = _ApiClient["default"].convertToType(data['mint_address'], 'String');
        }

        if (data.hasOwnProperty('operation')) {
          obj['operation'] = _ApiClient["default"].convertToType(data['operation'], 'String');
        }

        if (data.hasOwnProperty('seller')) {
          obj['seller'] = _ApiClient["default"].convertToType(data['seller'], 'String');
        }

        if (data.hasOwnProperty('buyer')) {
          obj['buyer'] = _ApiClient["default"].convertToType(data['buyer'], 'String');
        }

        if (data.hasOwnProperty('transaction_signature')) {
          obj['transaction_signature'] = _ApiClient["default"].convertToType(data['transaction_signature'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NFTTransaction;
}();
/**
 * An epoch time stamp in UTC time that represents the time of the block where the transaction was processed 
 * @member {Number} block_time
 */


NFTTransaction.prototype['block_time'] = undefined;
/**
 * The NFT exchange on which the transaction occurred
 * @member {module:model/NFTTransaction.ExchangeEnum} exchange
 */

NFTTransaction.prototype['exchange'] = undefined;
/**
 * A readable version of the NFT exchange
 * @member {module:model/NFTTransaction.ExchangeReadableEnum} exchange_readable
 */

NFTTransaction.prototype['exchange_readable'] = undefined;
/**
 * The mint address of the NFT 
 * @member {String} mint_address
 */

NFTTransaction.prototype['mint_address'] = undefined;
/**
 * The operation of the transaction
 * @member {module:model/NFTTransaction.OperationEnum} operation
 */

NFTTransaction.prototype['operation'] = undefined;
/**
 * The public key of the wallet that listed the NFT
 * @member {String} seller
 */

NFTTransaction.prototype['seller'] = undefined;
/**
 * The public key of the buyer. This only exists in `buy` transactions. 
 * @member {String} buyer
 */

NFTTransaction.prototype['buyer'] = undefined;
/**
 * The signature of the transaction. You can look up each transaction on explorer.solana.com 
 * @member {String} transaction_signature
 */

NFTTransaction.prototype['transaction_signature'] = undefined;
/**
 * Allowed values for the <code>exchange</code> property.
 * @enum {String}
 * @readonly
 */

NFTTransaction['ExchangeEnum'] = {
  /**
   * value: "solsea"
   * @const
   */
  "solsea": "solsea",

  /**
   * value: "magic-eden"
   * @const
   */
  "magic-eden": "magic-eden",

  /**
   * value: "alpha-art"
   * @const
   */
  "alpha-art": "alpha-art",

  /**
   * value: "digital-eyes"
   * @const
   */
  "digital-eyes": "digital-eyes",

  /**
   * value: "solanart"
   * @const
   */
  "solanart": "solanart",

  /**
   * value: "exchange-art"
   * @const
   */
  "exchange-art": "exchange-art"
};
/**
 * Allowed values for the <code>exchange_readable</code> property.
 * @enum {String}
 * @readonly
 */

NFTTransaction['ExchangeReadableEnum'] = {
  /**
   * value: "SolSea"
   * @const
   */
  "SolSea": "SolSea",

  /**
   * value: "Magic Eden"
   * @const
   */
  "Magic Eden": "Magic Eden",

  /**
   * value: "Alpha Art"
   * @const
   */
  "Alpha Art": "Alpha Art",

  /**
   * value: "Digital Eyes"
   * @const
   */
  "Digital Eyes": "Digital Eyes",

  /**
   * value: "Solanart"
   * @const
   */
  "Solanart": "Solanart",

  /**
   * value: "Exchange.art"
   * @const
   */
  "Exchange.art": "Exchange.art"
};
/**
 * Allowed values for the <code>operation</code> property.
 * @enum {String}
 * @readonly
 */

NFTTransaction['OperationEnum'] = {
  /**
   * value: "buy"
   * @const
   */
  "buy": "buy",

  /**
   * value: "list"
   * @const
   */
  "list": "list",

  /**
   * value: "de_list"
   * @const
   */
  "de_list": "de_list",

  /**
   * value: "update_listing"
   * @const
   */
  "update_listing": "update_listing"
};
var _default = NFTTransaction;
exports["default"] = _default;