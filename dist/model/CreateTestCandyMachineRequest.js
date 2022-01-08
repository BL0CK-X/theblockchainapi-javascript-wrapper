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
 * The CreateTestCandyMachineRequest model module.
 * @module model/CreateTestCandyMachineRequest
 * @version 1.0.9
 */
var CreateTestCandyMachineRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateTestCandyMachineRequest</code>.
   * @alias module:model/CreateTestCandyMachineRequest
   * @param wallet {module:model/Wallet} 
   */
  function CreateTestCandyMachineRequest(wallet) {
    _classCallCheck(this, CreateTestCandyMachineRequest);

    CreateTestCandyMachineRequest.initialize(this, wallet);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateTestCandyMachineRequest, null, [{
    key: "initialize",
    value: function initialize(obj, wallet) {
      obj['wallet'] = wallet;
    }
    /**
     * Constructs a <code>CreateTestCandyMachineRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTestCandyMachineRequest} obj Optional instance to populate.
     * @return {module:model/CreateTestCandyMachineRequest} The populated <code>CreateTestCandyMachineRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTestCandyMachineRequest();

        if (data.hasOwnProperty('wallet')) {
          obj['wallet'] = _Wallet["default"].constructFromObject(data['wallet']);
        }

        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }

        if (data.hasOwnProperty('candy_machine_contract_version')) {
          obj['candy_machine_contract_version'] = _ApiClient["default"].convertToType(data['candy_machine_contract_version'], 'String');
        }

        if (data.hasOwnProperty('include_gatekeeper')) {
          obj['include_gatekeeper'] = _ApiClient["default"].convertToType(data['include_gatekeeper'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return CreateTestCandyMachineRequest;
}();
/**
 * @member {module:model/Wallet} wallet
 */


CreateTestCandyMachineRequest.prototype['wallet'] = undefined;
/**
 * @member {module:model/CreateTestCandyMachineRequest.NetworkEnum} network
 * @default 'devnet'
 */

CreateTestCandyMachineRequest.prototype['network'] = 'devnet';
/**
 * The contract you want to use to create the candy machine. Note: Metaplex disabled the creation of `v1` candy machines on their smart contract, and so we no longer support the creation of `v1` test candy machines. 
 * @member {module:model/CreateTestCandyMachineRequest.CandyMachineContractVersionEnum} candy_machine_contract_version
 * @default 'v2'
 */

CreateTestCandyMachineRequest.prototype['candy_machine_contract_version'] = 'v2';
/**
 * Whether or not to include a gatekeeper for testing purposes. Only applies to v2 candy machines.
 * @member {Boolean} include_gatekeeper
 * @default false
 */

CreateTestCandyMachineRequest.prototype['include_gatekeeper'] = false;
/**
 * Allowed values for the <code>network</code> property.
 * @enum {String}
 * @readonly
 */

CreateTestCandyMachineRequest['NetworkEnum'] = {
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

CreateTestCandyMachineRequest['CandyMachineContractVersionEnum'] = {
  /**
   * value: "v2"
   * @const
   */
  "v2": "v2"
};
var _default = CreateTestCandyMachineRequest;
exports["default"] = _default;