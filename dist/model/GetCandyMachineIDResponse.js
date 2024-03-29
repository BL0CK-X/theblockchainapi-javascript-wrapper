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
 * The GetCandyMachineIDResponse model module.
 * @module model/GetCandyMachineIDResponse
 * @version 1.0.9407
 */
var GetCandyMachineIDResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetCandyMachineIDResponse</code>.
   * @alias module:model/GetCandyMachineIDResponse
   */
  function GetCandyMachineIDResponse() {
    _classCallCheck(this, GetCandyMachineIDResponse);

    GetCandyMachineIDResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetCandyMachineIDResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetCandyMachineIDResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCandyMachineIDResponse} obj Optional instance to populate.
     * @return {module:model/GetCandyMachineIDResponse} The populated <code>GetCandyMachineIDResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetCandyMachineIDResponse();

        if (data.hasOwnProperty('candy_machine_id')) {
          obj['candy_machine_id'] = _ApiClient["default"].convertToType(data['candy_machine_id'], 'String');
        }

        if (data.hasOwnProperty('candy_machine_contract_version')) {
          obj['candy_machine_contract_version'] = _ApiClient["default"].convertToType(data['candy_machine_contract_version'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetCandyMachineIDResponse;
}();
/**
 * The ID of the candy machine that minted the NFT
 * @member {String} candy_machine_id
 */


GetCandyMachineIDResponse.prototype['candy_machine_id'] = undefined;
/**
 * Whether or not this corresponds to candy machine v1, candy machine v2, or a Magic Eden candy machine.
 * @member {module:model/GetCandyMachineIDResponse.CandyMachineContractVersionEnum} candy_machine_contract_version
 */

GetCandyMachineIDResponse.prototype['candy_machine_contract_version'] = undefined;
/**
 * Allowed values for the <code>candy_machine_contract_version</code> property.
 * @enum {String}
 * @readonly
 */

GetCandyMachineIDResponse['CandyMachineContractVersionEnum'] = {
  /**
   * value: "v1"
   * @const
   */
  "v1": "v1",

  /**
   * value: "v2"
   * @const
   */
  "v2": "v2",

  /**
   * value: "magic-eden-v1"
   * @const
   */
  "magic-eden-v1": "magic-eden-v1"
};
var _default = GetCandyMachineIDResponse;
exports["default"] = _default;