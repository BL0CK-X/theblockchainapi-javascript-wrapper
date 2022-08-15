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
 * The NFTOwnerAdvancedResponseContract model module.
 * @module model/NFTOwnerAdvancedResponseContract
 * @version 1.0.9407
 */
var NFTOwnerAdvancedResponseContract = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NFTOwnerAdvancedResponseContract</code>.
   * The contract the NFT interacted with most recently. If there is none, this is null. 
   * @alias module:model/NFTOwnerAdvancedResponseContract
   */
  function NFTOwnerAdvancedResponseContract() {
    _classCallCheck(this, NFTOwnerAdvancedResponseContract);

    NFTOwnerAdvancedResponseContract.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NFTOwnerAdvancedResponseContract, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NFTOwnerAdvancedResponseContract</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NFTOwnerAdvancedResponseContract} obj Optional instance to populate.
     * @return {module:model/NFTOwnerAdvancedResponseContract} The populated <code>NFTOwnerAdvancedResponseContract</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NFTOwnerAdvancedResponseContract();

        if (data.hasOwnProperty('contract_type')) {
          obj['contract_type'] = _ApiClient["default"].convertToType(data['contract_type'], 'String');
        }

        if (data.hasOwnProperty('contract_id')) {
          obj['contract_id'] = _ApiClient["default"].convertToType(data['contract_id'], 'String');
        }

        if (data.hasOwnProperty('contract_blockchain_identifier')) {
          obj['contract_blockchain_identifier'] = _ApiClient["default"].convertToType(data['contract_blockchain_identifier'], 'String');
        }

        if (data.hasOwnProperty('contract_name')) {
          obj['contract_name'] = _ApiClient["default"].convertToType(data['contract_name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NFTOwnerAdvancedResponseContract;
}();
/**
 * The type of the contract that it last interacted with
 * @member {module:model/NFTOwnerAdvancedResponseContract.ContractTypeEnum} contract_type
 */


NFTOwnerAdvancedResponseContract.prototype['contract_type'] = undefined;
/**
 * The string identifier (not the public key) that we denote the contract with.
 * @member {String} contract_id
 */

NFTOwnerAdvancedResponseContract.prototype['contract_id'] = undefined;
/**
 * The public key of the contract
 * @member {String} contract_blockchain_identifier
 */

NFTOwnerAdvancedResponseContract.prototype['contract_blockchain_identifier'] = undefined;
/**
 * The readable name of the contract (e.g., Magic Eden)
 * @member {String} contract_name
 */

NFTOwnerAdvancedResponseContract.prototype['contract_name'] = undefined;
/**
 * Allowed values for the <code>contract_type</code> property.
 * @enum {String}
 * @readonly
 */

NFTOwnerAdvancedResponseContract['ContractTypeEnum'] = {
  /**
   * value: "marketplace"
   * @const
   */
  "marketplace": "marketplace",

  /**
   * value: "otc"
   * @const
   */
  "otc": "otc",

  /**
   * value: "loan"
   * @const
   */
  "loan": "loan",

  /**
   * value: "staking"
   * @const
   */
  "staking": "staking",

  /**
   * value: "burned"
   * @const
   */
  "burned": "burned"
};
var _default = NFTOwnerAdvancedResponseContract;
exports["default"] = _default;