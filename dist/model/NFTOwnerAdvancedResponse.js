"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NFTOwnerAdvancedResponseContract = _interopRequireDefault(require("./NFTOwnerAdvancedResponseContract"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The NFTOwnerAdvancedResponse model module.
 * @module model/NFTOwnerAdvancedResponse
 * @version 1.0.9407
 */
var NFTOwnerAdvancedResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NFTOwnerAdvancedResponse</code>.
   * @alias module:model/NFTOwnerAdvancedResponse
   */
  function NFTOwnerAdvancedResponse() {
    _classCallCheck(this, NFTOwnerAdvancedResponse);

    NFTOwnerAdvancedResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NFTOwnerAdvancedResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NFTOwnerAdvancedResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NFTOwnerAdvancedResponse} obj Optional instance to populate.
     * @return {module:model/NFTOwnerAdvancedResponse} The populated <code>NFTOwnerAdvancedResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NFTOwnerAdvancedResponse();

        if (data.hasOwnProperty('contract')) {
          obj['contract'] = _NFTOwnerAdvancedResponseContract["default"].constructFromObject(data['contract']);
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _ApiClient["default"].convertToType(data['owner'], 'String');
        }

        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'Number');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NFTOwnerAdvancedResponse;
}();
/**
 * @member {module:model/NFTOwnerAdvancedResponseContract} contract
 */


NFTOwnerAdvancedResponse.prototype['contract'] = undefined;
/**
 * The public key of the wallet that has true ownership over the provided NFT. If listed, it is the lister. If placed on a loan, it is the loanee. If staked, it is the staker. If burned, it is the burner. Etc. Returns `null` in the edge case that we were unable to find the true owner. If this happens, please report it to us and we will try to adapt for this edge case. 
 * @member {String} owner
 */

NFTOwnerAdvancedResponse.prototype['owner'] = undefined;
/**
 * The price of the NFT, if listed or loaned. If held, staked, or burned, this is null.
 * @member {Number} price
 */

NFTOwnerAdvancedResponse.prototype['price'] = undefined;
/**
 * The state of the NFT
 * @member {module:model/NFTOwnerAdvancedResponse.StateEnum} state
 */

NFTOwnerAdvancedResponse.prototype['state'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

NFTOwnerAdvancedResponse['StateEnum'] = {
  /**
   * value: "loaning"
   * @const
   */
  "loaning": "loaning",

  /**
   * value: "listing"
   * @const
   */
  "listing": "listing",

  /**
   * value: "staking"
   * @const
   */
  "staking": "staking",

  /**
   * value: "holding"
   * @const
   */
  "holding": "holding",

  /**
   * value: "burned"
   * @const
   */
  "burned": "burned"
};
var _default = NFTOwnerAdvancedResponse;
exports["default"] = _default;