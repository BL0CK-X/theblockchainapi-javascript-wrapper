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
 * The TokenMetadataResponse model module.
 * @module model/TokenMetadataResponse
 * @version 1.0.9
 */
var TokenMetadataResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TokenMetadataResponse</code>.
   * @alias module:model/TokenMetadataResponse
   */
  function TokenMetadataResponse() {
    _classCallCheck(this, TokenMetadataResponse);

    TokenMetadataResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TokenMetadataResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TokenMetadataResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenMetadataResponse} obj Optional instance to populate.
     * @return {module:model/TokenMetadataResponse} The populated <code>TokenMetadataResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TokenMetadataResponse();

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('decimals')) {
          obj['decimals'] = _ApiClient["default"].convertToType(data['decimals'], 'Number');
        }

        if (data.hasOwnProperty('minter_blockchain_identifier')) {
          obj['minter_blockchain_identifier'] = _ApiClient["default"].convertToType(data['minter_blockchain_identifier'], 'String');
        }

        if (data.hasOwnProperty('total_supply')) {
          obj['total_supply'] = _ApiClient["default"].convertToType(data['total_supply'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TokenMetadataResponse;
}();
/**
 * The symbol of the coin 
 * @member {String} symbol
 */


TokenMetadataResponse.prototype['symbol'] = undefined;
/**
 * The name of the coin 
 * @member {String} name
 */

TokenMetadataResponse.prototype['name'] = undefined;
/**
 * @member {Number} decimals
 */

TokenMetadataResponse.prototype['decimals'] = undefined;
/**
 * The `mint_authority` (Solana) or `master_minter` (Ethereum) 
 * @member {String} minter_blockchain_identifier
 */

TokenMetadataResponse.prototype['minter_blockchain_identifier'] = undefined;
/**
 * @member {String} total_supply
 */

TokenMetadataResponse.prototype['total_supply'] = undefined;
var _default = TokenMetadataResponse;
exports["default"] = _default;