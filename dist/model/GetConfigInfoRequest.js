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
 * The GetConfigInfoRequest model module.
 * @module model/GetConfigInfoRequest
 * @version 1.0.9
 */
var GetConfigInfoRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetConfigInfoRequest</code>.
   * @alias module:model/GetConfigInfoRequest
   * @param configAddress {String} The config address of the candy machine.  If you don't know the address of a candy machine, you can use the \"Get Candy Machine Details\" endpoint to get the configuration public key address.  If you don't know the candy machine ID to call this endpoint, you can find it with the \"Get NFT's Candy Machine ID\" endpoint. 
   */
  function GetConfigInfoRequest(configAddress) {
    _classCallCheck(this, GetConfigInfoRequest);

    GetConfigInfoRequest.initialize(this, configAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetConfigInfoRequest, null, [{
    key: "initialize",
    value: function initialize(obj, configAddress) {
      obj['config_address'] = configAddress;
    }
    /**
     * Constructs a <code>GetConfigInfoRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetConfigInfoRequest} obj Optional instance to populate.
     * @return {module:model/GetConfigInfoRequest} The populated <code>GetConfigInfoRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetConfigInfoRequest();

        if (data.hasOwnProperty('config_address')) {
          obj['config_address'] = _ApiClient["default"].convertToType(data['config_address'], 'String');
        }

        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetConfigInfoRequest;
}();
/**
 * The config address of the candy machine.  If you don't know the address of a candy machine, you can use the \"Get Candy Machine Details\" endpoint to get the configuration public key address.  If you don't know the candy machine ID to call this endpoint, you can find it with the \"Get NFT's Candy Machine ID\" endpoint. 
 * @member {String} config_address
 */


GetConfigInfoRequest.prototype['config_address'] = undefined;
/**
 * @member {module:model/GetConfigInfoRequest.NetworkEnum} network
 * @default 'devnet'
 */

GetConfigInfoRequest.prototype['network'] = 'devnet';
/**
 * Allowed values for the <code>network</code> property.
 * @enum {String}
 * @readonly
 */

GetConfigInfoRequest['NetworkEnum'] = {
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
var _default = GetConfigInfoRequest;
exports["default"] = _default;