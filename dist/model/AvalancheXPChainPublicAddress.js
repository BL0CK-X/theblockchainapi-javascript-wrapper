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
 * The AvalancheXPChainPublicAddress model module.
 * @module model/AvalancheXPChainPublicAddress
 * @version 1.0.9
 */
var AvalancheXPChainPublicAddress = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AvalancheXPChainPublicAddress</code>.
   * @alias module:model/AvalancheXPChainPublicAddress
   */
  function AvalancheXPChainPublicAddress() {
    _classCallCheck(this, AvalancheXPChainPublicAddress);

    AvalancheXPChainPublicAddress.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AvalancheXPChainPublicAddress, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AvalancheXPChainPublicAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AvalancheXPChainPublicAddress} obj Optional instance to populate.
     * @return {module:model/AvalancheXPChainPublicAddress} The populated <code>AvalancheXPChainPublicAddress</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AvalancheXPChainPublicAddress();

        if (data.hasOwnProperty('bech_public_address')) {
          obj['bech_public_address'] = _ApiClient["default"].convertToType(data['bech_public_address'], 'String');
        }

        if (data.hasOwnProperty('hex_public_address')) {
          obj['hex_public_address'] = _ApiClient["default"].convertToType(data['hex_public_address'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AvalancheXPChainPublicAddress;
}();
/**
 * The bech-32 encoded public address of the wallet, commonly used for the X and P chains of Avalanche. (e.g., `X-avax1rlxm7ygahlzfjgj4s965t0lk0ucm8v48rc9r5r`) 
 * @member {String} bech_public_address
 */


AvalancheXPChainPublicAddress.prototype['bech_public_address'] = undefined;
/**
 * The public address in hex form of the wallet. This is commonly used in Ethereum, Binance, and Avalanche C-Chain. (e.g., `0xB2b2d42C3adA171633E36b427F062f85A642F453`) 
 * @member {String} hex_public_address
 */

AvalancheXPChainPublicAddress.prototype['hex_public_address'] = undefined;
var _default = AvalancheXPChainPublicAddress;
exports["default"] = _default;