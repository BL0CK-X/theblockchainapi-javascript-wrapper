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
 * The AvalancheCChainPublicAddress model module.
 * @module model/AvalancheCChainPublicAddress
 * @version 1.0.9407
 */
var AvalancheCChainPublicAddress = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AvalancheCChainPublicAddress</code>.
   * @alias module:model/AvalancheCChainPublicAddress
   */
  function AvalancheCChainPublicAddress() {
    _classCallCheck(this, AvalancheCChainPublicAddress);

    AvalancheCChainPublicAddress.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AvalancheCChainPublicAddress, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AvalancheCChainPublicAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AvalancheCChainPublicAddress} obj Optional instance to populate.
     * @return {module:model/AvalancheCChainPublicAddress} The populated <code>AvalancheCChainPublicAddress</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AvalancheCChainPublicAddress();

        if (data.hasOwnProperty('hex_public_address')) {
          obj['hex_public_address'] = _ApiClient["default"].convertToType(data['hex_public_address'], 'String');
        }

        if (data.hasOwnProperty('hex_public_key')) {
          obj['hex_public_key'] = _ApiClient["default"].convertToType(data['hex_public_key'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AvalancheCChainPublicAddress;
}();
/**
 * The public address in hex form of the wallet. This is commonly used in Ethereum, Binance, and Avalanche C-Chain. (e.g., `0xB2b2d42C3adA171633E36b427F062f85A642F453`) 
 * @member {String} hex_public_address
 */


AvalancheCChainPublicAddress.prototype['hex_public_address'] = undefined;
/**
 * To public key in hex form of the wallet. This is hashed to get the hex public address. (e.g., `0x0f7182c2c2f79aca13847bed68c67662c021df868ee5d20a78df6095e4cd162610c63ec9050989a3755a18255cdd707e50678bfd762db3f0feea647610e974c4`) 
 * @member {String} hex_public_key
 */

AvalancheCChainPublicAddress.prototype['hex_public_key'] = undefined;
var _default = AvalancheCChainPublicAddress;
exports["default"] = _default;