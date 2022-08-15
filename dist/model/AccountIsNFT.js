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
 * The AccountIsNFT model module.
 * @module model/AccountIsNFT
 * @version 1.0.9407
 */
var AccountIsNFT = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountIsNFT</code>.
   * @alias module:model/AccountIsNFT
   * @param isNft {Boolean} 
   */
  function AccountIsNFT(isNft) {
    _classCallCheck(this, AccountIsNFT);

    AccountIsNFT.initialize(this, isNft);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountIsNFT, null, [{
    key: "initialize",
    value: function initialize(obj, isNft) {
      obj['is_nft'] = isNft;
    }
    /**
     * Constructs a <code>AccountIsNFT</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountIsNFT} obj Optional instance to populate.
     * @return {module:model/AccountIsNFT} The populated <code>AccountIsNFT</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountIsNFT();

        if (data.hasOwnProperty('is_nft')) {
          obj['is_nft'] = _ApiClient["default"].convertToType(data['is_nft'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return AccountIsNFT;
}();
/**
 * @member {Boolean} is_nft
 */


AccountIsNFT.prototype['is_nft'] = undefined;
var _default = AccountIsNFT;
exports["default"] = _default;