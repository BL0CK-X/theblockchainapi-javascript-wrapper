"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountContext = _interopRequireDefault(require("./AccountContext"));

var _AccountValue = _interopRequireDefault(require("./AccountValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Account model module.
 * @module model/Account
 * @version null
 */
var Account = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Account</code>.
   * @alias module:model/Account
   */
  function Account() {
    _classCallCheck(this, Account);

    Account.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Account, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Account</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Account} obj Optional instance to populate.
     * @return {module:model/Account} The populated <code>Account</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Account();

        if (data.hasOwnProperty('context')) {
          obj['context'] = _AccountContext["default"].constructFromObject(data['context']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _AccountValue["default"].constructFromObject(data['value']);
        }
      }

      return obj;
    }
  }]);

  return Account;
}();
/**
 * @member {module:model/AccountContext} context
 */


Account.prototype['context'] = undefined;
/**
 * @member {module:model/AccountValue} value
 */

Account.prototype['value'] = undefined;
var _default = Account;
exports["default"] = _default;