"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GeneralWallet = _interopRequireDefault(require("./GeneralWallet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SupplyWalletRequest model module.
 * @module model/SupplyWalletRequest
 * @version 1.0.9
 */
var SupplyWalletRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SupplyWalletRequest</code>.
   * @alias module:model/SupplyWalletRequest
   * @param wallet {module:model/GeneralWallet} 
   */
  function SupplyWalletRequest(wallet) {
    _classCallCheck(this, SupplyWalletRequest);

    SupplyWalletRequest.initialize(this, wallet);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SupplyWalletRequest, null, [{
    key: "initialize",
    value: function initialize(obj, wallet) {
      obj['wallet'] = wallet;
    }
    /**
     * Constructs a <code>SupplyWalletRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SupplyWalletRequest} obj Optional instance to populate.
     * @return {module:model/SupplyWalletRequest} The populated <code>SupplyWalletRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SupplyWalletRequest();

        if (data.hasOwnProperty('wallet')) {
          obj['wallet'] = _GeneralWallet["default"].constructFromObject(data['wallet']);
        }
      }

      return obj;
    }
  }]);

  return SupplyWalletRequest;
}();
/**
 * @member {module:model/GeneralWallet} wallet
 */


SupplyWalletRequest.prototype['wallet'] = undefined;
var _default = SupplyWalletRequest;
exports["default"] = _default;