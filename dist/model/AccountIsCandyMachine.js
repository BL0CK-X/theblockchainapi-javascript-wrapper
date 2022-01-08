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
 * The AccountIsCandyMachine model module.
 * @module model/AccountIsCandyMachine
 * @version 1.0.9
 */
var AccountIsCandyMachine = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountIsCandyMachine</code>.
   * @alias module:model/AccountIsCandyMachine
   * @param isCandyMachine {Boolean} 
   */
  function AccountIsCandyMachine(isCandyMachine) {
    _classCallCheck(this, AccountIsCandyMachine);

    AccountIsCandyMachine.initialize(this, isCandyMachine);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountIsCandyMachine, null, [{
    key: "initialize",
    value: function initialize(obj, isCandyMachine) {
      obj['is_candy_machine'] = isCandyMachine;
    }
    /**
     * Constructs a <code>AccountIsCandyMachine</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountIsCandyMachine} obj Optional instance to populate.
     * @return {module:model/AccountIsCandyMachine} The populated <code>AccountIsCandyMachine</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountIsCandyMachine();

        if (data.hasOwnProperty('is_candy_machine')) {
          obj['is_candy_machine'] = _ApiClient["default"].convertToType(data['is_candy_machine'], 'Boolean');
        }

        if (data.hasOwnProperty('candy_machine_contract_version')) {
          obj['candy_machine_contract_version'] = _ApiClient["default"].convertToType(data['candy_machine_contract_version'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AccountIsCandyMachine;
}();
/**
 * @member {Boolean} is_candy_machine
 */


AccountIsCandyMachine.prototype['is_candy_machine'] = undefined;
/**
 * Whether or not this corresponds to candy machine v1, candy machine v2, or a Magic Eden candy machine.
 * @member {module:model/AccountIsCandyMachine.CandyMachineContractVersionEnum} candy_machine_contract_version
 */

AccountIsCandyMachine.prototype['candy_machine_contract_version'] = undefined;
/**
 * Allowed values for the <code>candy_machine_contract_version</code> property.
 * @enum {String}
 * @readonly
 */

AccountIsCandyMachine['CandyMachineContractVersionEnum'] = {
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
var _default = AccountIsCandyMachine;
exports["default"] = _default;