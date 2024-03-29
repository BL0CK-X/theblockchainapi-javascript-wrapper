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
 * The GetCandyMachineIDRequest model module.
 * @module model/GetCandyMachineIDRequest
 * @version 1.0.9407
 */
var GetCandyMachineIDRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetCandyMachineIDRequest</code>.
   * @alias module:model/GetCandyMachineIDRequest
   * @param mintAddress {String} The address of the NFT. NOT the mint authority address
   */
  function GetCandyMachineIDRequest(mintAddress) {
    _classCallCheck(this, GetCandyMachineIDRequest);

    GetCandyMachineIDRequest.initialize(this, mintAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetCandyMachineIDRequest, null, [{
    key: "initialize",
    value: function initialize(obj, mintAddress) {
      obj['mint_address'] = mintAddress;
    }
    /**
     * Constructs a <code>GetCandyMachineIDRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCandyMachineIDRequest} obj Optional instance to populate.
     * @return {module:model/GetCandyMachineIDRequest} The populated <code>GetCandyMachineIDRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetCandyMachineIDRequest();

        if (data.hasOwnProperty('mint_address')) {
          obj['mint_address'] = _ApiClient["default"].convertToType(data['mint_address'], 'String');
        }

        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetCandyMachineIDRequest;
}();
/**
 * The address of the NFT. NOT the mint authority address
 * @member {String} mint_address
 */


GetCandyMachineIDRequest.prototype['mint_address'] = undefined;
/**
 * @member {module:model/GetCandyMachineIDRequest.NetworkEnum} network
 * @default 'devnet'
 */

GetCandyMachineIDRequest.prototype['network'] = 'devnet';
/**
 * Allowed values for the <code>network</code> property.
 * @enum {String}
 * @readonly
 */

GetCandyMachineIDRequest['NetworkEnum'] = {
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
var _default = GetCandyMachineIDRequest;
exports["default"] = _default;