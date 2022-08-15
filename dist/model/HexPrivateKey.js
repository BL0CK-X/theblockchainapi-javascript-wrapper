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
 * The HexPrivateKey model module.
 * @module model/HexPrivateKey
 * @version 1.0.9407
 */
var HexPrivateKey = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HexPrivateKey</code>.
   * @alias module:model/HexPrivateKey
   * @param hexPrivateKey {String} A hex private key is the typical private key used on Ethereum, for example. It looks like this: `0x200b9e5baa38b0dc7551645be11b394e9bf2b04532e4af8824bed2b3de2e0dc0`.  You can use `hex_private_key` for chains: `avalanche`, `binance_smart_chain`, `ethereum`.
   */
  function HexPrivateKey(hexPrivateKey) {
    _classCallCheck(this, HexPrivateKey);

    HexPrivateKey.initialize(this, hexPrivateKey);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HexPrivateKey, null, [{
    key: "initialize",
    value: function initialize(obj, hexPrivateKey) {
      obj['hex_private_key'] = hexPrivateKey;
    }
    /**
     * Constructs a <code>HexPrivateKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HexPrivateKey} obj Optional instance to populate.
     * @return {module:model/HexPrivateKey} The populated <code>HexPrivateKey</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HexPrivateKey();

        if (data.hasOwnProperty('hex_private_key')) {
          obj['hex_private_key'] = _ApiClient["default"].convertToType(data['hex_private_key'], 'String');
        }
      }

      return obj;
    }
  }]);

  return HexPrivateKey;
}();
/**
 * A hex private key is the typical private key used on Ethereum, for example. It looks like this: `0x200b9e5baa38b0dc7551645be11b394e9bf2b04532e4af8824bed2b3de2e0dc0`.  You can use `hex_private_key` for chains: `avalanche`, `binance_smart_chain`, `ethereum`.
 * @member {String} hex_private_key
 */


HexPrivateKey.prototype['hex_private_key'] = undefined;
var _default = HexPrivateKey;
exports["default"] = _default;