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
 * The GetCandyMetadataRequest model module.
 * @module model/GetCandyMetadataRequest
 * @version 1.0.9407
 */
var GetCandyMetadataRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetCandyMetadataRequest</code>.
   * @alias module:model/GetCandyMetadataRequest
   */
  function GetCandyMetadataRequest() {
    _classCallCheck(this, GetCandyMetadataRequest);

    GetCandyMetadataRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetCandyMetadataRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetCandyMetadataRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCandyMetadataRequest} obj Optional instance to populate.
     * @return {module:model/GetCandyMetadataRequest} The populated <code>GetCandyMetadataRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetCandyMetadataRequest();

        if (data.hasOwnProperty('candy_machine_id')) {
          obj['candy_machine_id'] = _ApiClient["default"].convertToType(data['candy_machine_id'], 'String');
        }

        if (data.hasOwnProperty('config_address')) {
          obj['config_address'] = _ApiClient["default"].convertToType(data['config_address'], 'String');
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
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

  return GetCandyMetadataRequest;
}();
/**
 * The ID of the candy machine. This is the same as `config_address` for `v2` candy machines (supply either). 
 * @member {String} candy_machine_id
 */


GetCandyMetadataRequest.prototype['candy_machine_id'] = undefined;
/**
 * The configuration address of the candy machine. This is the same as `candy_machine_id` for `v2` candy machines (supply either). 
 * @member {String} config_address
 */

GetCandyMetadataRequest.prototype['config_address'] = undefined;
/**
 * The uuid of the candy machine. This is an alphanumeric string of length six (e.g., HpVdfP), which corresponds to the first six characters of the config_address. 
 * @member {String} uuid
 */

GetCandyMetadataRequest.prototype['uuid'] = undefined;
/**
 * @member {module:model/GetCandyMetadataRequest.NetworkEnum} network
 * @default 'devnet'
 */

GetCandyMetadataRequest.prototype['network'] = 'devnet';
/**
 * The candy machine contract of the candy machine for which you are retrieving the metadata. If you are providing `v1` candy machine ID, set this to `v1`. If you are providing `v2` candy machine ID, set this to `v2`. If you don't know which version your candy machine is, check out <a href=\"#operation/solanaGetAccountIsCandyMachine\">this endpoint</a>. 
 * @member {module:model/GetCandyMetadataRequest.CandyMachineContractVersionEnum} candy_machine_contract_version
 * @default 'v1'
 */

GetCandyMetadataRequest.prototype['candy_machine_contract_version'] = 'v1';
/**
 * Allowed values for the <code>network</code> property.
 * @enum {String}
 * @readonly
 */

GetCandyMetadataRequest['NetworkEnum'] = {
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

GetCandyMetadataRequest['CandyMachineContractVersionEnum'] = {
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
var _default = GetCandyMetadataRequest;
exports["default"] = _default;