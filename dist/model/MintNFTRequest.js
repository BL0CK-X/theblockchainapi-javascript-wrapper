"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Wallet = _interopRequireDefault(require("./Wallet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The MintNFTRequest model module.
 * @module model/MintNFTRequest
 * @version 1.0.9
 */
var MintNFTRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MintNFTRequest</code>.
   * @alias module:model/MintNFTRequest
   * @param wallet {module:model/Wallet} 
   * @param configAddress {String} The config address of the candy machine. You can retrieve this if you have the candy machine ID using <a href=\"#operation/solanaGetCandyMachineDetails\">this endpoint</a> and retrieving the `config_address` from the response.  A candy machine ID is the same thing as a configuration address for v2 candy machines. 
   */
  function MintNFTRequest(wallet, configAddress) {
    _classCallCheck(this, MintNFTRequest);

    MintNFTRequest.initialize(this, wallet, configAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MintNFTRequest, null, [{
    key: "initialize",
    value: function initialize(obj, wallet, configAddress) {
      obj['wallet'] = wallet;
      obj['config_address'] = configAddress;
    }
    /**
     * Constructs a <code>MintNFTRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MintNFTRequest} obj Optional instance to populate.
     * @return {module:model/MintNFTRequest} The populated <code>MintNFTRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MintNFTRequest();

        if (data.hasOwnProperty('wallet')) {
          obj['wallet'] = _Wallet["default"].constructFromObject(data['wallet']);
        }

        if (data.hasOwnProperty('config_address')) {
          obj['config_address'] = _ApiClient["default"].convertToType(data['config_address'], 'String');
        }

        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }

        if (data.hasOwnProperty('candy_machine_contract_version')) {
          obj['candy_machine_contract_version'] = _ApiClient["default"].convertToType(data['candy_machine_contract_version'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MintNFTRequest;
}();
/**
 * @member {module:model/Wallet} wallet
 */


MintNFTRequest.prototype['wallet'] = undefined;
/**
 * The config address of the candy machine. You can retrieve this if you have the candy machine ID using <a href=\"#operation/solanaGetCandyMachineDetails\">this endpoint</a> and retrieving the `config_address` from the response.  A candy machine ID is the same thing as a configuration address for v2 candy machines. 
 * @member {String} config_address
 */

MintNFTRequest.prototype['config_address'] = undefined;
/**
 * @member {module:model/MintNFTRequest.NetworkEnum} network
 * @default 'devnet'
 */

MintNFTRequest.prototype['network'] = 'devnet';
/**
 * The candy machine contract of the candy machine from which you're minting. If you are minting from a `v1` candy machine ID, set this to `v1`. If you are minting from a `v2` candy machine ID, set this to `v2`. If you don't know which the version of your candy machine, check out <a href=\"#operation/solanaGetAccountIsCandyMachine\">this endpoint</a>. 
 * @member {module:model/MintNFTRequest.CandyMachineContractVersionEnum} candy_machine_contract_version
 * @default 'v1'
 */

MintNFTRequest.prototype['candy_machine_contract_version'] = 'v1';
/**
 * Allowed values for the <code>network</code> property.
 * @enum {String}
 * @readonly
 */

MintNFTRequest['NetworkEnum'] = {
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
 * Allowed values for the <code>candy_machine_contract_version</code> property.
 * @enum {String}
 * @readonly
 */

MintNFTRequest['CandyMachineContractVersionEnum'] = {
  /**
   * value: "v1"
   * @const
   */
  "v1": "v1",

  /**
   * value: "v2"
   * @const
   */
  "v2": "v2"
};
var _default = MintNFTRequest;
exports["default"] = _default;